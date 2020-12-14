<template>
  <div class="calcform">
    <calcinput
      @resyltactive="resyltactive = $event"
      @pricechange="price = $event"
    />
    <rateblock @changeactiverate="activerate = $event" />
    <typeselect @changetype="typeselect = $event" />
    <result
      v-if="resyltactive"
      :activerate="activerate"
      :typeselect="typeselect"
      :resyltactive="resyltactive"
      :price="price"
    />
  </div>
</template>

<script>
  import calcinput from "@/components/calcinput.vue";
  import rateblock from "@/components/rateblock.vue";
  import typeselect from "@/components/typeselect.vue";
  import result from "@/components/result.vue";
  export default {
    data() {
      return {
        activerate: 20,
        typeselect: 0,
        resyltactive: false,
        price: 0,
      };
    },
    components: {
      calcinput,
      rateblock,
      typeselect,
      result,
    },
  };
</script>

<style>
  .calcform {
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 532px;
    margin: 62px auto;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 14.4222px 29.6456px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-family: "Proxima Nova", Helvetica Neue, sans-serif;
    font-style: normal;
    box-sizing: unset !important;
    -webkit-box-sizing: unset !important;
    -moz-box-sizing: unset !important;
  }
  .calcslash {
    background: #ebebeb;
    border-radius: 1px;
    width: 1px;
    height: 21px;
    display: flex;
    align-self: center;
  }

  .calcactive {
    background: linear-gradient(0deg, #ff6457, #ff6457),
      linear-gradient(180deg, #ff7222 0%, #ff6262 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.11),
      0px 0.293408px 2.93408px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    color: white !important;
  }

  @media (max-width: 600px) {
    .calcform {
      width: auto !important;
    }
    .rateblock {
      width: auto !important;
      flex-wrap: wrap;
      height: auto !important;
    }
    .ndstypeselection {
      width: auto !important;
    }
    hr {
      width: auto !important;
    }
  }

  @media (max-width: 400px) {
    .calcform {
      width: auto !important;
    }
    .rateblock {
      width: auto !important;
      flex-wrap: wrap;
      height: auto !important;
    }
    .ndstypeselection {
      width: auto !important;
    }
    hr {
      width: auto !important;
    }
    .calcresult {
      width: 100% !important;
    }
  }
</style>
