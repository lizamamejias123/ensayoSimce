<template>
  <div id="Comentario">
    <div class="comentario p-3" v-for="(comentario, index) in comentarios" :key="index">
      <h5>{{ comentario.name }}</h5>
      <h3>{{ comentario.message }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comentarios",
  props: ["comentarios"],
};

</script>

<style lang='scss'>
#Comentario {
  padding-top: 2em;
}
.comentario {
  text-align: left;
  width: 60%;
  border:0.1px solid rgba(0, 0, 222, 0.3);
  margin-bottom: 1em;
  
}

</style>
