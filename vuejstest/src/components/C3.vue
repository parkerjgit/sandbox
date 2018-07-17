<template>
  <div 
    class="comp" 
    v-on:mousemove="getRGB" 
    v-bind:style="{background: bg}">
    <span>{{ ttl }}</span>
    <p>When a Vue instance is created, it adds all the properties found in its data object to Vue’s *reactivity system*. Note, data properties are only reactive if they existed when the instance was created. Any changes to reactive properties will automatically trigger view update.</p>
  </div>
</template>

<script>
import SecondComponent from './SecondComponent'

export default {
  data () {
    return {
      ttl: '#3',
      w: 0,
      h: 0,
      rgb: []
    }
  },
  methods: {
    getWidth: function() {
        this.w = document.documentElement.clientWidth;
        this.h = document.documentElement.clientHeight;
    },
    getRGB: function(e) { 
      this.getWidth()  
      this.rgb = [
          Math.round(e.pageX/this.w * 255),
          Math.round(e.pageY/this.h * 255),
          150
      ];       
    }
  },
  computed: {
    bg: function () {     
      return 'rgb('+this.rgb.join(',')+')'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp {
  /*background: charcoal;*/
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
</style>
