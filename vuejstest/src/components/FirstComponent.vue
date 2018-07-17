<template>
  <div class="comp">
    <span>{{ ttl }}</span>
    <ul><li v-for="(item,index) in bag">{{index}}. {{item.type}}</li></ul>
    <second-component 
      passed_msg="i was passed!"
      v-on:talk="donttalkback"
    ></second-component>
  </div>
</template>

<script>
import SecondComponent from './SecondComponent'

export default {
  data () {
    return {
      ttl: '#1',
      bag: [
        {type: 'orange'},
        {type: 'apple'},
        {type: 'banana'}
      ]
    }
  },
  components: {
    'second-component': SecondComponent
  },
  methods: {
    donttalkback: function() {
      this.ttl = "hey, don't talk back to me. I'm number 1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp {
  background: charcoal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
</style>
