<template>
    <div id="login_registerPage">
        <!-- 背景图片 -->
        <div id="login-bg" class="container-fluid">

            <div class="bg-img"></div>
            <div class="bg-color"></div>
        </div>

        <div class="container animated" id="login" :class="{'zoomInRight':LoginOrRegister,'elementHidden':!LoginOrRegister}">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="login">
                        <a href="#" class="ToLogin_Register" @click="ToLogin_Register">去注册</a>
                        <h1>登录</h1>
                        <form>
                            <div class="form-group animated" :class="{'shake':!PhoneNumberReg.test(L_InputUserName)}">
                                <input type="text" class="form-control" id="L_InputUserName" placeholder="用户名" v-model="L_InputUserName">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="L_InputPassword1" placeholder="密码"  v-model="L_InputPassword1">
                            </div>

                            <br>
                            <button type="submit" class="btn btn-lg btn-block btn-success" @click.prevent="ToLoginEvent">登录</button>
                        </form>

                    </div>
                </div>
            </div>


        </div>

        <div class="container registerBox animated" id="register" :class="{'zoomInLeft':!LoginOrRegister,'elementHidden':LoginOrRegister}">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="login" style="text-align: center;">
                        <a href="#" class="ToLogin_Register" @click="ToLogin_Register">去登录</a>
                        <h1>注 册</h1>
                        <form>
                            <div class="form-group">
                                <input type="phone" class="form-control animated" id="R_InputPhoneNumber" placeholder="手机号码" v-model="R_InputPhoneNumber">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="R_InputEmail" placeholder="邮箱" v-model="R_InputEmail">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="R_InputPassword1" placeholder="密码" v-model="R_InputPassword1">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="R_InputPassword2" placeholder="再次输入密码" v-model="R_InputPassword2">
                            </div>

                            <br>
                            <button type="submit" class="btn btn-lg btn-block btn-success" @click.prevent="RegisterEvent">确定注册</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>




    </div>
</template>

<script type="es6">
    import  qs from 'qs';
    export default {
        name: "login_registerPage",
        data(){
            return {
                personalOrOrganizition:[],
                LoginOrRegister:true,
                L_InputUserName:'',
                L_InputPassword1:'',
                R_InputPhoneNumber:'',
                R_InputEmail:'',
                R_InputPassword1:'',
                R_InputPassword2:'',
                PhoneNumberReg:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
                emailReg:new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$'),
                passwordReg:new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$"),
                phoneWaringFlag:true,
                emailWaringFlag:true,
                password2WaringFlag:true,
                personalOrganizitionWaringFlag:true,
            }
        },
        mounted(){
            
        },
        methods:{
            ToLogin_Register(){
                this.LoginOrRegister = !this.LoginOrRegister;
                this.personalOrOrganizition = [];
                // 将所有字段的验证条件重新赋值为 true
                this.phoneWaringFlag = true;
                this.emailWaringFlag = true;
                this.password2WaringFlag = true;
                this.personalOrganizitionWaringFlag = true;
            },
            personalOrOrganizitionClickEvent(){
                this.personalOrOrganizition = [];
                console.log(this.personalOrOrganizition);
            },
            ToLoginEvent(){
                let that = this;
                // 判断用户输入的内容是否符合规范 L_InputPassword1
                if (this.L_InputUserName==''){
                    this.$message({
                        message:"请输入用户名...",
                        duration:2000,
                        type:'warning',
                        center:true
                    })
                    return;
                }

                if (this.L_InputPassword1==''){
                    this.$message({
                        message:"请输入密码...",
                        duration:2000,
                        type:'warning',
                        center:true
                    })
                    return;
                }

                // Ajax 代码
                this.$axios({
                    method:'POST',
                    url:'/custom/login',
                    data:{
                        username:this.L_InputUserName,
                        password:this.L_InputPassword1
                    }
                })
                  .then(res=>{
                    if (res.data.loginFlag&&res.data.errorCode==0){
                        // 保存 token
                        localStorage.setItem("token",res.data.token);
                        // 路由跳转
                        that.$router.push("/index");
                    }else{
                        that.$message({
                            message:res.data.message,
                            type:"warning",
                            duration:2000,
                            center:true
                        })
                    }
                  })
                  .catch(error=>{
                      that.$message({
                          message:"服务器繁忙中，请稍后重试...",
                          type:"warning",
                          duration:2000,
                          center:true
                      })
                  })

            },
            RegisterEvent(){
                let that = this;
                // 判断用户输入的内容是否符合规范
                this.phoneWaringFlag = this.PhoneNumberReg.test(this.R_InputPhoneNumber);
                this.emailWaringFlag = this.emailReg.test(this.R_InputEmail);
                this.password2WaringFlag = this.R_InputPassword1==this.R_InputPassword2;
                this.personalOrganizitionWaringFlag = this.personalOrOrganizition.length==0;
                if(!this.phoneWaringFlag){
                    this.$message({
                        message:"请输入正确的手机号码...",
                        type:"warning",
                        center:true,
                        duration:2000
                    })
                    return;
                }
                if(!this.emailWaringFlag){
                    this.$message({
                        message:"请输入正确的邮箱地址...",
                        type:"warning",
                        center:true,
                        duration:2000
                    })
                    return;
                }
                if(this.R_InputPassword1==''||this.R_InputPassword1.length<6||this.R_InputPassword1.length>16){
                    this.$message({
                        message:"请输入正确格式的密码...",
                        type:"warning",
                        center:true,
                        duration:2000
                    })
                    return;
                }
                if(!this.password2WaringFlag){
                    this.$message({
                        message:"两次密码不一致，请重新输入...",
                        type:"warning",
                        center:true,
                        duration:2000
                    })
                    return;
                }
                console.log(!this.passwordReg.test(this.R_InputPassword1));
                if (!this.passwordReg.test(this.R_InputPassword1)){
                    console.log(this.R_InputPassword1)
                    this.$message({
                        message:".密码必须由字母、数字组成，区分大小写，且长度为8到16位",
                        type:"warning",
                        center:true,
                        duration:3000
                    })
                    return;
                }
                // Ajax 代码
                that.$axios({
                    method:"POST",
                    url:"/custom/register",
                    data:{
                        username:this.R_InputPhoneNumber,
                        useremail:this.R_InputEmail,
                        password:this.R_InputPassword1
                    }
                })
                  .then(res=>{
                      if (!res.data.registerFlag){
                          this.$message({
                              message:res.data.message,
                              type:"warning",
                              center:true,
                              duration:2000
                          })
                      } else {
                          this.$message({
                              message:res.data.message,
                              type:"success",
                              center:true,
                              duration:2000
                          })
                          // 路由跳转到登录页面，要求用户登录
                          setTimeout(function () {
                              that.$router.go(0);
                          },2100);
                      }
                  })
                  .catch(error=>{
                      this.$message({
                          message:"系统错误，请联系客服...",
                          type:"warning",
                          center:true,
                          duration:2000
                      })
                  })
            }
        }
    }
</script>

<style scoped>
    @import "../static/css/bootstrap.min.css";
    @import "../static/css/base.css";
    @import "../static/css/animate.min.css";
    body {
        font-family: 'Montserrat', sans-serif;
        text-rendering : optimizeLegibility;
        -webkit-font-smoothing : antialiased;
    }


    #login-bg.container-fluid {
        padding: 0;
        height: 100%;
        position: absolute;
    }

    /* Background image an color divs*/
    .bg-img , .bg-color {
        min-width: 50%;
        vertical-align: top;
        padding: 0;
        margin-left: 0;
        height: 100%;
        background-color: #CAF0D3;
        display: inline-block;
        overflow: hidden;
    }

    .bg-color {
        margin-left: -5px;
    }

    .bg-img {
        background-image: url("../static/images/bg-image.jpg");
        background-size: cover;
    }

    #login,#registerBox{
        padding-top: 5%;
        text-align: center;
        text-transform: uppercase;
    }


    .login {
        width: 100%;
        height: 500px;
        background-color: #fff;
        padding: 15px;
        padding-top: 30px;
    }

    .login h1 {
        margin-top: 30px;
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 3px;
    }

    .login form {
        max-width: 420px;
        margin: 30px auto;
    }

    .login .btn {
        border-radius: 50px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 20px;
        padding: 14px;
        background-color: #00B72E;
    }

    .form-group input {
        font-size: 20px;
        font-weight: lighter;
        border: none;
        background-color: #F0F0F0;
        color: #465347!important;
        padding: 26px 30px;
        border-radius: 50px;
        transition : 0.2s;
    }




    /* Form check styles*/

    .form-check {
        padding: 0;
        text-align: left;
    }

    .form-check label {
        vertical-align: top;
        padding-top: 5px;
        padding-left: 5px;
        font-size: 15px;
        color: #606060;
        font-size: 14px;
    }

    .forgot-password {
        text-align: right;
        float: right;
        font-weight: bold;
    }

    .forgot-password a {
        color: #00B72E;
        opacity: 0.6;
    }

    .forgot-password a:hover {
        opacity: 1;
    }


    /* Switch styles */

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 30px;
    }

    /* Hide default HTML checkbox */
    .switch input {display:none;}

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #F0F0F0;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 30px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: #00B72E;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #00B72E;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(30px);
        -ms-transform: translateX(30px);
        transform: translateX(30px);
    }



    /* Media queries */

    @media(max-width: 500px) {
        .bg-img , .bg-color {
            min-width: 100%;
            height: 50%;
            margin: 0;
        }

        .forgot-password {
            text-align: right;
            float: left;
            padding: 20px 0;
        }


        #login {
            padding-top: 50px;
        }

    }
    div.login {
        border-radius: 15px;
        position: relative;
    }
    .formCheckBox {
        margin: 18px 0px;
        position: relative;
    }
    .formCheckBox div {
        float: left;
        margin-left: 30px;
    }
    .ToLogin_Register {
        top: 8px;
        right: 20px;
        position: absolute;
        text-decoration: none;
        animation: register 2s linear infinite alternate;
    }
    @keyframes register {
        0% {
            right: 20px;
        }
        100% {
            right: 40px;
        }
    }
    .registerBox .login {
        height: 600px;
    }
    .registerBox {
        padding-top: 1%;
    }
    .borderWaring {
        border: 1px solid red!important;
    }
</style>
