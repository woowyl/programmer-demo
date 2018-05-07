<template>
    <div class="content">
        <p class="title">各种方式-外层不设定高度</p>
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

        <p class="title">各种方式-外层设定高度 且小于子元素高度</p>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.test {
    height: 400px;
    background: brown;
}
    .tr {
        text-align: right;
    }
    .content {
        padding: 10px 30px;
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
</style>