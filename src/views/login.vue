<template>
  <div class="limiter">
    <div class="container-login">
      <div class="wrap-login">
        <div class="login-form-title">
          <span>登录</span>
        </div>

        <form class="login-form validate-form">
          <div class="wrap-input validate-input" data-validate="Username is required">
            <span class="label-input">用户名</span>
            <input class="input" type="text" name="username" placeholder="输入用户名">
            <span class="focus-input"></span>
          </div>

          <div class="wrap-input validate-input" data-validate="Password is required">
            <span class="label-input">密码</span>
            <input class="input" type="password" name="pass" placeholder="输入密码">
            <span class="focus-input"></span>
          </div>

          <div class="flex-box">
            <div class="contact-form-checkbox">
              <input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me">
              <label class="label-checkbox" for="ckb1">记住我</label>
            </div>

            <div>
              <a href="#" class="txt1">忘记密码？</a>
            </div>
          </div>

          <div class="container-login-form-btn">
            <button class="login-form-btn">登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.limiter {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
  margin-bottom: 26px;
}

.container-login {
  border-radius: 10px;
}

.login-form-title {
  background: url(images/bg-01.jpg) no-repeat center/cover;
  padding: 70px 15px 74px 15px;
  text-align: center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(54, 84, 99, 0.7);
  }
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}

.label-input {
  font-size: 15px;
  color: #808080;
  line-height: 1.2;
  text-align: right;
  position: absolute;
  top: 14px;
  left: -105px;
  width: 80px;
}

.input {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #555555;
  line-height: 1.2;
  display: block;
  width: 100%;
  background: transparent;
  padding: 0 5px;
  outline: none;
  border: none;
  height: 45px;
}
.focus-input::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
  background: #57b846;
}
.input:focus + .focus-input::before {
  width: 100%;
}

.txt1 {
  font-size: 13px;
  line-height: 1.4;
  color: #999999;
}

.container-login-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}

.login-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 160px;
  height: 50px;
  background-color: #57b846;
  border-radius: 25px;

  font-family: Poppins-Regular;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn:hover {
  background-color: #333333;
}

.flex-box {
  margin-bottom: 30px;
  width: 100%;
}
.container-login {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ebeeef;
  box-sizing: border-box;
}
.wrap-login {
  width: 675px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: #808080;
}
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 43px 88px 93px 190px;
}
@media (max-width: 576px) {
  form {
    padding: 43px 15px 57px 117px;
  }
}
@media (max-width: 480px) {
  form {
    padding: 43px 15px 57px 15px;
  }
  .label-input {
    text-align: left;
    position: unset;
    top: unset;
    left: unset;
    width: 100%;
    padding: 0 5px;
  }
}
</style>


<script>
export default {};
</script>




