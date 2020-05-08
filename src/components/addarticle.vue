<template>
    <div class="back">
        <!--            <form action="http://www.zhuxf.net/manager/artcleadd" class="form" method="post" enctype="multipart/form-data">-->
        <form action="http://localhost/manager/artcleadd" class="form" method="post" enctype="multipart/form-data">

            <label for=""><div class="lable">标题</div><input type="text" class="title2" placeholder="   请输入文章标题" name="title"></label>
            <label for=""><div class="lable">作者</div><input type="text" class="author" value="Watterson" disabled="disabled" name="author"></label>
            <label for=""><div class="lable">日期</div><input type="date" class="date" name="date"></label>
            <label for=""><div class="lable">文章封面</div><input type="file" accept="image/png" class="pic" name="pic"></label>
            <label for=""><div class="lable">文章类型</div> <select name="kind" id="kind">
                <option value="Vue">Vue</option>
                <option value="ES6">ES6</option>
                <option value="CSS3">CSS3</option>
                <option value="Nuxt">Nuxt</option>
                <option value="Express">Express</option>
                <option value="Mini_Program">Mini_Program</option>
            </select> </label>
            <label for=""><div class="lable">描述</div><textarea name="describe"  class="describe"></textarea></label>
            <label for=""><div class="lable">文章</div><textarea name="article"  class="describe"></textarea></label>

            <!--                <label for=""><div class="lable">上传html文件</div><input type="file" accept="text/html" class="pic" name="pic"></label>-->
            <label for=""><input type="submit" class="submit" value="提交"></label>


        </form>
    </div>
</template>

<script>
    export default {
        name: "addarticle"
    }
</script>

<style scoped>
    .back{
        position: absolute;
        top: 0;
        left: 300px;
        height: 100%;
        width: calc(100% - 300px);

        background-color: #eeeeee;
    }
    .form{
        position: relative;
        left: 5%;
        top: 50px;
        display: inline-block;
        background-color: #ffffff;
        height:90%;
        width:90%;
        overflow: auto;
    }

    label{
        position: relative;
        left: 5%;
        top: 5%;
        display: block;

        width:90%;
        margin-bottom: 3%;
    }

    .date,.title2,.author{
        display: block;
        height: 40px;
        border-radius: 5px;
        border: solid 1px grey ;
        width: 100%;

    }
    .title2{
        font-weight: bold;
        font-size: 16px;
    }
    .date{
        width:150px;
        font-weight: bold;
        font-size: 16px;
        text-indent: 3px;
    }
    .author{
        font-weight: bold;
        font-size: 16px;
        text-indent: 1em;
    }
    .lable{
        font-size: 120%;
        font-weight: bold;
    }
    .blog{
        width: 100%;
        height: 200px;
        resize:none;
    }

    .describe{
        width: 100%;
        height: 100px;
        resize:none;
    }

    .submit{
        display: inline-block;
        width: 90px;
        height: 40px;
        border-radius: 3px;
        background-color: #1889ff;
        font-size: 110%;
        font-weight: bold;
        color: #ffffff;
        border: #1889ff 1px solid ;
        transition:0.4s background-color;
    }

    .submit:hover{

        background-color: #126bff;

    }

</style>