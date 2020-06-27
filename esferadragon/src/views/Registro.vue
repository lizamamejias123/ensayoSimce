<template>
    <div>
        <FormRegistro :datos='datos'></FormRegistro>
    </div>
</template>
<script>

import FormRegistro from '../components/FormRegistro'
export default {
    name:'Registro',
    components:{FormRegistro},
    data() {
        return {
            datos: {
                name: {
                first: "",
                last: "",},
                email: "",
            },
        };
    },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((datos) => (this.datos = datos.results[0]));
  },
  beforeCreate() {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? this.$router.push({ name: "RedSocial" }) : false;
  },
    
}
</script>