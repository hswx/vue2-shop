<template>
  <div>

<nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur" @click="defaultSort()">默认</a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortGoods()">价格
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby" @click.stop="showFilterPop">筛选</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>价格区间:</dt>
              <dd><a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur':priceChecked=='all'}">选择价格</a></dd>
              <dd v-for="(item,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+  item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

<nav-footer></nav-footer>
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
  </div>
</template>

<script>
 import "./../assets/css/base.css"
  import "./../assets/css/nav-header.css"
  import "./../assets/css/nav-bread.css"
   import "./../assets/css/nav-footer.css"
   import "./../assets/css/goods-list.css"
 import navHeader from "./../components/NavHeader.vue"
 import navBread from "./../components/NavBread.vue"
 import navFooter from "./../components/NavFooter.vue"
 import axios from 'axios'
export default {

  data() {
    return {
      page: 2,
      pageSize: 8,
      sortFlag: true,
      goodsList:[],
      priceFilter:[
        {
          startPrice:0,
          endPrice:1000,
        },
        {
          startPrice:1000,
          endPrice:2000,
        },
        {
          startPrice:2000,
          endPrice:3000,
        },
        {
          startPrice:3000,
          endPrice:4000,
        },
        {
          startPrice:4000,
          endPrice:5000,
        },
      ],
      priceChecked:'all',
      filterBy:false,
      overLayFlag:false
    }
  },
  mounted() {
    this.getGoodsList();
  },
     components:{
         navHeader,
         navFooter,
         navBread
     },

  methods: {
         getGoodsList() {
             var params={
               page: this.page,
               pageSize: this.pageSize,
               sort: this.sortFlag?1:-1
             }
             axios.get("http://localhost:3000/goods",{params}).then((result)=>{
                 console.log(result);
               this.goodsList = result.data.result.list;
             })

         },
         defaultSort(){
          this.sortFlag=true;
          this.page=1;
          this.getGoodsList();
         },
         sortGoods(){
          this.sortFlag=!this.sortFlag;
          this.page=1;
          this.getGoodsList();
         },
    setPriceFilter(index){
             this.priceChecked=index;
    },
    showFilterPop(){
        this.filterBy=true;
        this.overLayFlag=true;
    },
    closePop(){
      this.filterBy=false;
      this.overLayFlag=false;
    }
  },


}

</script>


