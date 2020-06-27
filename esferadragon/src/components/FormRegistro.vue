<template>
    <div>
       <b-form class="container mt-5">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="datos.email" type="email" required placeholder="Email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="name" required placeholder="Name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input type="password" id="input-3" v-model="password" required placeholder="Password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="registrar">Registrate</b-button>
    </b-form>
    </div>
</template>
<script>
export default {
    name:'FormRegistro',
    props: ["datos"],
    data() {
    return {
      password: "",
    };
  },
  methods: {
    registrar() {
      let usuario = {
        email: this.email,
        name: this.name,
        password: this.password,
      };
      let usuarios = JSON.parse(localStorage.getItem("usuarios"));
      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      console.log('fuiste registrado');
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    localStorage.getItem("usuarios") == null ? localStorage.setItem("usuarios", JSON.stringify([])) : false;
  },
  computed: {
    name() {
      return `${this.datos.name.first} ${this.datos.name.last}`;
    },
  },
}
</script>