<template>
  <div id="app">
  	<h1 v-text="title"></h1>
  	<input v-model="newItem" v-on:keyup.enter="addItem"></input>
  	<ul>
  		<li class="pointer" v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
  	</ul>
    <component_msg msgFromFather='you die!'></component_msg>
  </div>
</template>

<script>
import Store from './store'
import Component_msg from './components/component_msg'
export default {
  data: function(){
  	return {
  		title: 'This is a todo list',
  		items: Store.fetch(),
  		newItem: ''
  		
  	}
  },
  components:{Component_msg},
  watch: {
    items: {
      handler: function(items){
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
	 toggleFinish: function(item){
		item.isFinished = !item.isFinished;
	 },
	 addItem: function(){
		this.items.unshift({
			label: this.newItem,
  			isFinished: false
		})
		this.newItem = '';
	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
	text-decoration: line-through;
}
.pointer{
	cursor: pointer;
}
</style>
