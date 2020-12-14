<template>
  <div class="ndstypeselection">
    <div
      :class="[typeselect === 0 ? 'calcactive' : '', 'calcbutton']"
      id="highlight"
      @click="typeselect = 0"
    >
      Выделить НДС
    </div>
    <div class="calcslash typeslash"></div>
    <div
      :class="[typeselect === 1 ? 'calcactive' : '', 'calcbutton']"
      id="charge"
      @click="typeselect = 1"
    >
      Начислить НДС
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        typeselect: 0,
      };
    },
    watch: {
      typeselect(val) {
        this.$emit("changetype", val);
      },
    },
  };
</script>

<style scoped>
  .ndstypeselection {
    width: 528px;
    height: 38px;
    background: #f7f7f7;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    padding: 2px;
    margin-bottom: 18px;
    box-sizing: unset !important;
    -webkit-box-sizing: unset !important;
    -moz-box-sizing: unset !important;
  }
  .calcbutton {
    width: 259px;
    height: 34px;
    align-self: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #616161;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    .calcbutton {
      width: 100%;
      padding: 0 5px;
    }
  }
  .typeslash {
    margin: 0px 4px;
  }
</style>
