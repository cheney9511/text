<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="items in lbtList.slice(0, 3)" :key="items.out_id">
                <img :src=items.image_url alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../lib/MUI/images/wx.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>	           
		        </ul> 
		</div>
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            lbtList:[]
        }
    },
    created() {
        this.getlbtList()
    },
    methods: {
        getlbtList(){//获取轮播图
            this.$axios.get('https://www.doutula.com/api/search?keyword=%E9%87%91%E9%A6%86%E9%95%BF')
                .then(res=>{
                    console.log(res.data);
                    if(res.data.status === 1){
                        this.lbtList = res.data.data.list;
                    }else{
                        Toast('接口或处理逻辑出错');
                    }
                }).catch(error=>{console.log(error)});
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
        // .mint-swipe-item:nth-child(1){background:red }
        // .mint-swipe-item:nth-child(2){background:blue }
        // .mint-swipe-item:nth-child(3){background:cyan }
    }
    .mui-content>.mui-table-view:first-child {margin-top: 0;}
    .mui-grid-view.mui-grid-9,.mui-grid-view.mui-grid-9 .mui-table-view-cell{border: 0;background: #fff ;}
    .mui-grid-view.mui-grid-9 .mui-table-view-cell img{width: 50px;height: 50px;}
    img{width: 100%;height: 100%;}
</style>
