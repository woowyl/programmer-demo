<template>
    <div class="content">
        <p class="title">1. 各种方式-外层不设定高度</p>
        <ul class="overflow">
            <li class="visible">
                <section class="section">overflow:visible</section>
            </li>
            <li class="scroll tr">
                <section class="section">overflow:scroll</section>
            </li>
            <li class="hidden">
                <section class="section">overflow:hidden</section>
            </li>
        </ul>

        <p class="title">2. 各种方式-外层设定高度 且小于子元素高度</p>
        <ul class="overflow set-height">
            <li class="visible">
                height:100
                <section class="section">overflow:visible;<br>height:200</section>
            </li>
            <li class="scroll tr">
                height:100
                <section class="section">overflow:scroll;<br>height:200</section>
            </li>
            <li class="hidden">
                height:100
                <section class="section">overflow:hidden;<br>height:200</section>
            </li>
        </ul>
        <p class="title">3. ScrollTop</p>
        <!-- <div class="scroll-containner"> -->
            <div class="scroll-scroller">
                <ul class="ul-in-scroller">
                    <li class="scroller-content" v-for="n in 10" :key="n">
                        {{n}}
                    </li>
                </ul>
                <p class="p-in-scroller">这里是Ul后的p标签</p>
            </div>
        <!-- </div> -->

        <p></p>
    </div>
</template>

<script>
    export default {
        methods:{
            scrollFun:function() {
                $('.scroll-scroller').on('scroll', ()=> {
                    console.log($('.scroll-scroller').scrollTop());
                })

                 $(window).on('scroll', ()=> {
                    console.log('window scroll',$(window).scrollTop());
                    console.log('html scroll',$('html').scrollTop());
                    console.log('body scroll',$('body').scrollTop());
                })
            }
        },
        mounted: function() {
            this.scrollFun();
        }
    }
</script>

<style scoped>

    .tr {
        text-align: right;
    }
    .content {
        padding: 10px 30px;
        padding-bottom: 100px;
    }
    .title {
        font-size: 20px;
        text-align: left;
    }
    .overflow li {
        margin-bottom: 10px;
    }
    .visible {
        overflow: visible;
        background: blanchedalmond;
    }
    .scroll {
        overflow: scroll;
        background: blanchedalmond;
    }
    /* 不显示滚动条 */
    .scroll::-webkit-scrollbar {
        display: none;
    }
    .hidden {
        overflow: hidden;
         background: blanchedalmond;
    }
    .section {
        display: inline-block;
        height: 200px;
        width: 200px;
        background: burlywood;
    }

    /* 设定高度 */
    .overflow.set-height li{
        height: 100px;
    }

    /*  */
    .scroll-containner {
        background: cornflowerblue;
    }
    .scroll-scroller {
        overflow: scroll;
        height: 300px;
    }
    .ul-in-scroller {
        background: #a1f5eb;
    }
    .ul-in-scroller li {
        height: 40px;
        margin-bottom: 10px;
        vertical-align: middle;
    }
    .p-in-scroller {
        height: 20px;

    }

</style>