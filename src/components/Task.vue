<template>
    <div class='task' :class="[(finishedTask ? 'finished' : ''), (urgent ? 'urgent' : '')]">
        <h1>{{taskName}}</h1>
        <nav class="btn-group">
            <button :disabled="finishedTask" @click="taskUrgent" class="btn btn-danger">Urgent</button>
            <button @click="taskfinishedAction" :disabled="finishedTask" class="btn btn-primary">Finished</button>
            <button @click="removeTask" class="btn btn-secondary">Remove</button>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Task',
    data(){
        return{
            finishedTask:false,
            urgent:false
        }
    },

    props:['taskName','taskId'],

    methods: {
        taskfinishedAction(){
            this.finishedTask = !this.finishedTask;
            this.urgent ? this.urgent = false : "";
        },
        taskUrgent(){
            this.urgent = !this.urgent;
        },
        removeTask(){
            this.$store.commit('removeElement',this.taskId)
        }
    },
}
</script>

<style>
    .task{
        min-height: 6vh;
        margin: auto;
        margin-top: 1vh;
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
        contain: strict;
        border-radius: 5px;
    }

    .finished{
        background-color: chartreuse;
    }

    .finished > h1{
        text-decoration: line-through;
    }

    .urgent{
        background-color: rgb(206, 0, 0);
    }

    .task > nav{
        width: 40%;
        display: flex;
        justify-content: space-around;
    }

    .task >h1{
        padding-left: 5%;
        margin:auto 0;
        font-size: 1rem;
        max-width: 50%;
        contain: content;
    }
</style>
