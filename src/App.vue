<template>
  <div id="toDoList">
    <TaskAdder/>

    <template v-if="$store.state.tasks.length > 0">
      <Container/>
    </template>

    <template v-else>

      <h1>Add your first Task Today!</h1>

    </template>


  </div>
</template>

<script>

import Container from './components/Container'
import TaskAdder from './components/TaskAdder'

export default {
  name: 'App',
  components: {
    Container,
    TaskAdder,
  },
  methods:{
  },

}
</script>

<style>
  #toDoList{
    width: 100vw;
    padding-top: 100px;
  }
</style>
