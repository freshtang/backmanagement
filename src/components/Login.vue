<template>
  <div class="login">
    <form>
      <input v-model="user.username" placeholder="username"/>
      <br>
      <input v-model="user.password" placeholder="password" v-on:keyup.enter="login"/>
      <br>
      <button class="btn btn-sm" @click="login">登陆</button>
      <button class="btn btn-sm" @click="cancel">取消</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      count: function () {
        return this.$store.getters.Getarticlecount
      }
    },
    methods: {
      cancel () {
        this.$router.push('/')
      },
      login () {
        this.$store.dispatch('UserLogin', this.user).then(() => {
          this.$notify({
            title: '登陆成功',
            type: 'success'
          })
          this.$router.push({path: '/admin'})
        }, () => {
          this.$notify({
            title: '登陆失败，请检查用户名或密码',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    text-align: center;
    background-color: ghostwhite;
    padding: 20px;
    border-radius: 15px;
    input{
      margin: 10px;
      padding: 8px;
      border-radius: 3px;
      width: 200px;
    }
    button{
      margin: 3px 50px;
    }
  }

}
</style>
