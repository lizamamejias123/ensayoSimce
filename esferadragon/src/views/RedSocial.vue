<template>
    <div>
      <b-container class="Home">
      <b-row class="text-center">
        <b-col cols="5">
        <NuevoComentario @comentarionuevo="comentarionuevo"/></b-col>
        <b-col cols="7"><Comentarios :filtrar='filtrar' :comentarios="comentarios"/></b-col>
      </b-row>
    </b-container> 
    </div>
</template>
<script>

import NuevoComentario from "../components/NuevoComentario";
import Comentarios from "../components/Comentarios";
export default {
 name: "Home",
  components: {
    NuevoComentario,
    Comentarios,
  },
  data() {
    return {
      comentarios: [],
      user: {},
    };
  },
  beforeCreate() {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? false : this.$router.push({ name: "Registro" });
  },
  methods: {
    comentarionuevo(comentarionuevo) {
      this.comentarios.push({
        email: this.user.email,
        name: this.user.name,
        message: comentarionuevo,
        
      });console.log('ACA1')
      localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
    },
    filtrar(filtrar,comentarios){
        console.log('ACA3')
       comentarios.forEach(e=> {e.filtrar = comentarios;
       console.log(comentarios)
       console.log('ACA2')
           
       });
    }
  },
  beforeMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
    let comentariosdelLocalStorage = localStorage.getItem("comentarios");
    comentariosdelLocalStorage == null 
    ? localStorage.setItem("comentarios", JSON.stringify([])) 
    : (this.comentarios = JSON.parse(comentariosdelLocalStorage));
  },  
}
</script>