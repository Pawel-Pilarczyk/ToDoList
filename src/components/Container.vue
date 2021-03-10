<template>
    <div id='container'>
        <h1>To Do List</h1>
        <Task v-for="task in $store.state.tasks" :taskName="task.taskName" :key="task.id" :taskId="task.id"></Task>
    </div>
</template>

<script>

import Task from './Task';

export default {
    name:'Container',
    components: {
        Task
    },
    data(){
        return{

        }
    },
    methods: {

    },
}
</script>

<style>
    #container{
        width: 60vw;
        margin: auto;
    }

    @media (max-width: 900px){
        #container{
        width: 100vw;
        }
    }

</style>

