<template>
    <div>
        <div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">Esferas del Dragón</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link to="/RedSocial">RedSocial</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item ><router-link to="/Registro">Registro</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/">Log In</router-link> </b-dropdown-item>
          <b-dropdown-item @click="logout"><router-link to="/">LogOut</router-link> </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>
<script>
export default {
    name:'Navbar', 
    methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
  },
}
</script>