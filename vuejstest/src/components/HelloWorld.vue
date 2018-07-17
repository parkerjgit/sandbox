<template>
  <div class="hello">
    <div class="wrapper">
      <header class="panel header">My header</header>
      
      <div class="panel"><first-component></first-component></div>
      <div class="panel"><c3></c3></div>
      <div class="panel">Panel C</div>
      <div class="panel">Panel D</div>
      <div class="panel">Panel E</div>
      <div class="panel">Panel F</div>
      <div class="panel">Panel G</div>
      <div class="panel">Panel H</div>
      <div class="panel">Panel I</div>
      <div class="panel">Panel J</div>
      <div class="panel">Panel A</div>
      <div class="panel">Panel B</div>
      <div class="panel">Panel C</div>
      <div class="panel">Panel D</div>
      <div class="panel">Panel E</div>
      <div class="panel">Panel F</div>
      <div class="panel">Panel G</div>
      <div class="panel">Panel H</div>
      <div class="panel">Panel I</div>
      <div class="panel">Panel J</div>
      
      <footer class="panel footer">My footer</footer>
    </div>
  </div>
</template>

<script>
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import C3 from './C3'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'first-component': FirstComponent,
    'second-component': SecondComponent,
    'c3': C3
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
/*   margin: 40px; */
/*   font-family: 'Open Sans', 'sans-serif';
  background-color: #fff;
  color: #444; */
}

.wrapper {
  /*max-width: 1000px;*/
/*   margin: 0 20px; */
  display: grid;
  /*grid-gap: 1px;*/
}

/* no grid support? */
/*.wrapper {
  display: flex;
  flex-wrap: wrap;
}*/

.wrapper {
  display: grid;
  margin: 0 auto;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  /*grid-template-columns: repeat(auto-fill, 200px);*/
   grid-auto-rows: minmax(200px, auto); 
  /*grid-auto-rows: auto;*/
}

.panel {
  /* needed for the flex layout*/
  margin: 2px;
  /*flex: 1 1 200px;*/
  
  
}

.header {
  grid-column: 1;
  grid-row: 1 /6;
}

.footer {
  /*flex: 0 1 100%;*/
  grid-column: 1 / -1;
}

.wrapper > * {
  background-color: #444;
  color: #fff;
  /*border: solid 1px white;*/
  /*padding: 10px;*/
  /*font-size: 150%;
  margin-bottom: 10px;*/
}


/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

/*@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}*/
</style>
