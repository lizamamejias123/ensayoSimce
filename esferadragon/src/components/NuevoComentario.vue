<template>
  <div id="NuevoComentario">
    <b-input-group-append>
      <b-form-textarea  v-model="message" placeholder="Ingresa tu comentario..." ></b-form-textarea>
      <b-button variant="success" @click="NuevoComentario">Enviar comentario</b-button>
    </b-input-group-append>
    <b-input-group-append class="my-3">
        <b-form-input size="sm" class="mr-sm-2" v-model="filtrar" placeholder="Filtrar Comentarios"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="filtro">Search</b-button>
    </b-input-group-append>
  </div>
</template>

<script>
export default {
  name: "NuevoComentario",
  data() {
    return {
      message: "",
      filtrar:'',
    };
  },
  methods: {
    NuevoComentario() {
      this.$emit("comentarionuevo", this.message);
      this.message = '';
    },
    filtro(){
        this.$emit('filtrar', this.filtrar);
        this.filtrar = '';
    }
  },
};
</script>

<style>
#NuevoComentario {
  padding-top: 2em;
  width: 100%;
  margin: auto;
}
</style>
