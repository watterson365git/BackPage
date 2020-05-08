<template>
    <div class="contain">
        <img src="../assets/img/logo3.png" alt="" class="title">
        <div class="bodyi">
            <ul>
                <router-link to="/addarticle" style="text-decoration: none"><li class="blogs"><span class="two"></span>  描述添加</li></router-link>
                <router-link to="/addhtml" style="text-decoration: none"><li class="blogs"><span class="two"></span>  文章上传</li></router-link>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style scoped>
    ul{
        padding: 0;
        margin: 0;
    }

    .contain{
        position: absolute;
        top: 0;
        width:300px;
        background-color: rgb(21,31,45);
        height: 100%;
    }
    .title{
        width: 100%;
    }
    .users,.blogs{
        text-indent: 2em;
        display: block;
        border-radius: 10px 0 0 10px;
        margin-left: 10%;
        height: 45px;
        margin-bottom: 20px;
        text-align: left;
        line-height: 45px;
        color: lightslategrey;
        font-size: 110%;
        font-weight: bold;
        transition: 0.4s color,background-color;
    }
    .blogs span{
        display: inline-block;
        position: relative;
        top: 4px;
        width: 20px;
        height: 20px;
        background: url("../assets/img/blog_a.png") round;
        transition: 0.4s background;

    }
    .users span{
        display: inline-block;
        position: relative;
        top: 4px;
        width: 20px;
        height: 20px;
        background: url("../assets/img/me_a.png") round;
        transition: 0.4s background;

    }

    .users:hover,.blogs:hover{
        color: #eeeeee;
        background-color: #0F83EA;
    }

    .users:hover .one{
        background: url("../assets/img/me.png") round;
    }
    .blogs:hover .two{
        background: url("../assets/img/blog.png") round;
    }


    .users:hover{

    }
    .blogs:hover{

    }

    .users{
        margin-top: 80px ;
    }



</style>