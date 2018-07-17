<template>
  <div class="sec">
    {{ ttl }}
    passed msg: {{ passed_msg }}
    <button @click="talkback">talk back!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ttl: '#2'
    }
  },
  props: ['passed_msg'],
  methods: {
    talkback: function() {
      this.$emit('talk')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sec {
  background: gray;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
</style>