<template>
    <div>
        <b-form class="container mt-5">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="email" type="email" required placeholder="Email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input type="password" id="input-2" v-model="password" required placeholder="Password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="login">Entrar</b-button>
    </b-form>
    </div>
</template>
<script>
export default {
    name:'FormLogin',
    data() {
        return {
         email: '',
         password: '', 
        }
    },
    methods:{
        login(){
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let entrar = usuarios.find((u) => u.email === this.email && u.password === this.password);
        if(entrar){localStorage.setItem('user', JSON.stringify(entrar));
        this.$router.push({name: 'RedSocial'})}
        else{
            console.log('no existe usuario')
        }
    }}
    
    
}
</script>