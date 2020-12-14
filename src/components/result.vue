<template>
  <div>
    <hr />
    <div class="calcresult">
      <div>
        <div class="calcgridtable">
          <div>Сумма</div>
          <div>
            <div>{{ price }} ₽</div>
            <div class="calcclonecopy">
              <div class="calcclone" @click="copy(price)"></div>
            </div>
          </div>
        </div>
        <div class="numberwordcalc ">
          <div class="calcclonecopy">
            <div class="calcclone calcnum" @click="copy(textfrom(price))"></div>
          </div>
          <div>
            <div class="strresult">{{ textfrom(price) }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="calcgridtable">
          <div>НДС {{ activerate }}%</div>
          <div>
            <div>{{ ndssum }} ₽</div>
            <div class="calcclonecopy">
              <div class="calcclone" @click="copy(ndssum)"></div>
            </div>
          </div>
        </div>
        <div class="numberwordcalc ">
          <div class="calcclonecopy">
            <div
              class="calcclone calcnum"
              @click="copy(textfrom(ndssum))"
            ></div>
          </div>
          <div class="strresult">{{ textfrom(ndssum) }}</div>
        </div>
      </div>
      <div>
        <div class="calcgridtable">
          <div>
            Сумма
            <span v-if="typeselect === 1">c</span>
            <span v-else>без</span>
            НДС
          </div>
          <div>
            <div>{{ resultnds }} ₽</div>
            <div class="calcclonecopy">
              <div class="calcclone" @click="copy(resultnds)"></div>
            </div>
          </div>
        </div>
        <div class="numberwordcalc numberwordcalclast">
          <div class="calcclonecopy">
            <div
              class="calcclone calcnum"
              @click="copy(textfrom(resultnds))"
            ></div>
          </div>
          <div class="strresult">{{ textfrom(resultnds) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var rubles = require("rubles").rubles;
  export default {
    props: ["activerate", "typeselect", "resyltactive", "price"],
    computed: {
      ndssum() {
        let sum;
        if (this.typeselect === 0) {
          sum =
            (Number(this.price) * this.activerate) / (this.activerate + 100);
          return sum.toFixed(2);
        } else {
          sum =
            (Number(this.price) * (this.activerate + 100)) / 100 -
            Number(this.price);
          return sum.toFixed(2);
        }
      },
      resultnds() {
        let sum;
        if (this.typeselect === 0) {
          sum = Number(this.price) - this.ndssum;
          return sum.toFixed(2);
        } else {
          sum = Number(this.price) + Number(this.ndssum);
          return sum.toFixed(2);
        }
      },
    },
    methods: {
      textfrom(text) {
        let newText = rubles(text);
        return newText[0].toUpperCase() + newText.slice(1);
      },
      copy(text) {
        navigator.clipboard.writeText(text).then(
          function() {
            console.log("goot");
          },
          function() {
            console.log("fail");
          }
        );
      },
    },
  };
</script>

<style scoped>
  hr {
    width: 527px;
    background: #ebebeb;
    border: none;
    height: 1px;
    margin-bottom: 22px;
    box-sizing: unset !important;
    -webkit-box-sizing: unset !important;
    -moz-box-sizing: unset !important;
  }
  .calcresult {
    width: 353px;
    margin: auto;
  }
  .calcgridtable {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #616161;
  }

  /* Иконка copy */
  .calcclonecopy {
    position: relative;
    margin-left: 13px;
    cursor: pointer;
  }
  .calcclone {
    display: flex;
  }
  .calcclone::before {
    content: "";
    width: 12px;
    height: 12px;
    position: relative;
    left: 2px;
    border: 1px solid #616161;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .calcclone::after {
    content: "";
    width: 12px;
    height: 12px;
    position: relative;
    top: 5px;
    left: -15px;
    background: white;
    border: 1px solid #616161;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .calcgridtable {
    display: flex;
    justify-content: space-between;
  }
  .calcgridtable div:last-child {
    display: flex;
    justify-content: space-between;
  }
  .numberwordcalc {
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: rgba(97, 97, 97, 0.5);
    display: flex;
    align-items: center;
    margin: 10px 0px 25px 0px;
  }
  .numberwordcalclast {
    margin: 10px 0px 0px 0px;
  }
  .numberwordcalc .calcclonecopy {
    margin-left: 4.5px;
  }
  .calcnum::after,
  .calcnum::before {
    border-color: #c4c4c4;
  }
  .strresult {
    max-width: 298px;
  }
</style>
