<template>
    <div class='taskAdder input-group mb-3'>
        <input type="text" name="" id="newTaskAdder" v-model="newTaskName" maxlength="50">
        <button @click.prevent="addTask" class="btn btn-outline-secondary">Add Task</button>
    </div>
</template>
<script>


export default {
    name:'TaskAdder',
    data(){
        return{
            newTaskName: "",
        }
    },

    props:[],

    methods: {
        addTask(){
            if(this.newTaskName !== ""){
            this.$store.commit('addNewTask',
            {
                id:this.$store.state.tasks.length,
                taskName:this.newTaskName,
                finished: false,
            });
            this.newTaskName = "";
            }
        }
    },
}
</script>

<style>

    .taskAdder{
        width: 60vw;
        margin: 0 auto;
    }
    .taskAdder > input{
        width: 60%;
    }

    @media (max-width: 900px){
        .taskAdder{
        width: 100vw;
        margin: 0;
        }

        .taskAdder > input{
            width: 80%;
        }
    }

</style>
