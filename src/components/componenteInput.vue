<template>

  <section class="src-components-componente-input">
    <div class="container-fluid">
      <div class="jumbotron">
       
        <h5>COLOR: <input type="text" v-model="color"></h5>
        <h5>FONDO: <input type="text" v-model="fondo"></h5>
        <h5>SIZE: <input type="text" v-model="tamanio"></h5>
        <hr>
        <h5>Cantidad de Palabras: {{calcularPalabras}}</h5>
        <h5>Texto Editado: <input type="text" v-cambiarColor="this.color" v-cambiarFondo="this.fondo" v-cambiarFontSize="this.tamanio" v-model="texto"> </h5>
        
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-componente-input',
    props: [],
    mounted () {

    },
    data () {
      return {
        texto: '',
        color: '',
        fondo: '',
        tamanio: '',
      }
    },
    methods: {

    },
    filters: {
      
    },
    computed: {
     calcularPalabras() {
     let palabras = Array.from(this.texto.trimStart())
     let cont = 0
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == ' ') {
          if (cont == 0) {
            cont = 1
          } else {
            cont = cont + 1
          }
        }
      }
      return cont
     },
    
    }
}


</script>

<style scoped lang="css">
  .src-components-componente-input {
  }

.jumbotron {
  background-color: whitesmoke;
}
</style>
