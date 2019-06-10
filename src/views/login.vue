<template>
    <div class="login-wrap">
        <form action="/login" method="POST">
            <div  class="row">
                <input type="text" name="username" placeholder="请输入6到8位用户名">
                <span class="tip"></span>
            </div>
            <div  class="row">
                <input type="password" name="password" placeholder="请输入密码">
                <span class="tip"></span>
            </div>
            <div  class="row">
                <button type="submit">登录</button>
            </div>
            
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login-wrap{
    max-width: 420px;
    max-height: 420px;
    background: hsla(0, 0%, 100%, 0.5);
    margin: auto;
    border: 1px solid hsla(0, 0%, 0%, 0.2);
    background-clip: padding-box;
    border-radius: 0.5em;
    padding: 1em;

    .row{
        margin: 0.5em;
    }

    input{
        display: inline-block;
    }
    input{
        width: 50%;
    }

    button{
      width:50%;  
    }
}
</style>


<script>
export default {
    
}
</script>




