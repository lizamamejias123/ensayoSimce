<template>
    <div>
        <FormLogin></FormLogin>
    </div>
</template>
<script>

import FormLogin from '../components/FormLogin'
export default {
    name:'Registro',
    components:{FormLogin},
    beforeCreate() {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? this.$router.push({ name: "RedSocial" }) : false;
  },
    
}
</script>