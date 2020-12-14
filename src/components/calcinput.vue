<template>
  <div class="calcprice">
    <label for="price" class="calclabel">Цена</label>
    <input
      type="text"
      id="price"
      placeholder="0,00"
      v-model="price"
      @keypress="isNumber()"
      @change="inputnumber(price)"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        price: "",
        timeout: 0,
      };
    },
    watch: {
      price(newValue) {
        newValue > 0
          ? this.$emit("resyltactive", true)
          : this.$emit("resyltactive", false);
        this.$emit("pricechange", newValue);
      },
    },
    methods: {
      isNumber: function(evt) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        } else {
          return true;
        }
      },
      inputnumber(text) {
        let n = Number(text) + "";
        this.price = n;
        return n;
      },
    },
  };
</script>

<style scoped>
  .calcprice {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }
  label {
    width: 44px;
    height: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #616161;
    margin-right: 12px;
  }
  input {
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 7px;
    /* width: 476px; */
    width: 100%;
    height: 48px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    padding: 15px 10px;
    font-family: "Proxima Nova", "Helvetica Neue", "sans-serif";
    font-style: normal;
    color: #616161;
  }
  input:focus {
    outline: none;
  }
</style>
