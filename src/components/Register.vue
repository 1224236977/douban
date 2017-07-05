<template>
  <div class="Register">
    <router-link :to="this.$route.params.myUrl" class="registerdel"></router-link>
    <div class="registerTop"></div>
    <div class="registerWelcome">欢迎来到豆瓣</div>
    <input type="text" placeholder="手机号/邮箱" class="inT"><br/>
    <input type="text" placeholder="密码" class="inB">
    <div class="registerBtn">登录</div>
    <div class="zcdb">
      <span>注册豆瓣</span>
      <span>丨</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>
<style>
  .Register{padding: 0 0.2rem}
  .registerTop{height: 0.94rem;}
  .registerWelcome{height: 1.35rem;line-height: 1.35rem;}
  .registerWelcome{color: #42bd56;font-size: 0.38rem}
  .registerdel{display: block;width: 0.12rem;height: 0.12rem;position: absolute;top: 0.36rem;left: 0.16rem;
    background: url("../assets/images/zhuce_03.jpg") no-repeat;}
  .Register input{width: 100%;height: 0.45rem;border: 1px solid #f1f1f1;text-indent: 1em}
  .Register .inT{border-radius: 4px 4px 0px 0px}
  .Register .inB{border-radius: 0px 0px 4px 4px}
  .registerBtn{margin-top: 0.14rem;background-color: #42bd56;color: #fff;border-radius: 4px;height: 0.43rem;line-height: 0.43rem;
  font-size: 0.14rem}
  .zcdb{margin-top: 0.18rem;font-size: 0.14rem}
  .zcdb span:nth-of-type(1){color: #6bcb7a}
</style>
