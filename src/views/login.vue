<template>
    <div>
        <form action="/login" method="POST">
            <div>
                <label for="username">用户名：</label>
                <input type="text" name="username" placeholder="请输入6到8位用户名">
                <span class="tip"></span>
            </div>
            <div>
                <label for="password">密码：</label>
                <input type="password" name="password" placeholder="请输入6到8位用户名">
                <span class="tip"></span>
            </div>
            <div>
                <button type="submit">登录</button>
            </div>
            
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    label{
        width: 25%;
        text-align: right;
    }
    input{
        width: 70;
    }
}
</style>


<script>
export default {
    
}
</script>




