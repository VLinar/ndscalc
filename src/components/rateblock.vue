<template>
     <div class="selectndsblock">
       <div class="rateblock">
           <div
                v-for="(rate,index) in ndsRate" 
                :key="index"
                class="rateslach"  
           >
               <div 
                  :class="[activerate === rate? 'calcactive': '', 'rate' , (ndsRate.length - 1) === index? 'mrn': '' , index === 0 ? 'mln': '']"
                  @click="activerate = rate"
                >
                {{rate}}%  
                </div>
                <div :class="[(ndsRate.length - 1) === index? 'calcslashnone' : '' , 'calcslash']"></div>
           </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ndsRate: [10,12,13,15,16,18,20,21,24],
                activerate: 20
            }
        },
        watch:{
            activerate(newval){
                this.$emit('changeactiverate', newval) 
            }
        }
    }
</script>

<style scoped>
    .rateblock{
        display: flex;
        flex-direction: row;
        padding: 2px;  
        width: 528px;
        height: 34px;
        background: #F7F7F7;
        border-radius: 7px;
        margin-bottom: 18px;
        box-sizing: unset!important;
        -webkit-box-sizing: unset!important;
        -moz-box-sizing: unset!important;
    }
    .rateslach{
        display: flex;
        align-items: center;
        height: 34px;
    }
    .rate{
        width: 51px;
        height: 34px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #616161;
        margin: 0px 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select:none;
    }
    .mln{
        margin-left: 0px;
    }
    .mrn{
        margin-right: 0px;
    }
    .calcslashnone{
        display: none;
    }
</style>