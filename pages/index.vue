<template>
    <div class="main">
        <div class="container flex items-center justify-center mx-auto  ">
            <h1 class="text-2xl font-bold mb-4">To Do App</h1>
        </div>
        <div class="container mx-auto flex gap-2 ">

            <input type="text" v-model="newTask" @keyup.enter="addTask()" class="border rounded p-2 w-full">
            <button @click="addTask()" class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>

        </div>

        <div class="container   mx-auto ">

            <ul>
                <li v-for="(task, index) in tasks2.tasks" :key="index"
                    class="flex justify-between  mt-4 items-center bg-gray-100 p-2 mb-2 rounded ">
                    <span :class="{ 'line-through': task.completed }" >
                        {{ task.text }}
                    </span>
                  

                    <div class=" flex justify-between item-end">
                           <input type="checkbox" class="mx-2" @click="tasks2.toggleTask(index)">
                           <!-- <input type="checkbox" class="mx-2" @click="toggleTask(index)"> -->
                              <!-- <button @click="removeTask(index)" class="text-red-500">Delete</button> -->
                              <button @click="tasks2.removeTask(index)" class="text-red-500">Delete</button>
                    </div>
                    
                  

                   

                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useStore} from '~/store/todo.js'




const newTask = ref('');
const tasks = ref([]);
const tasks2 = useStore();
console.log('hnn',tasks2);
console.log('hnn',tasks2);



// const removeTask = (index) => { tasks.value.splice(index, 1); };
const removeTask = (index) => { tasks2.removeTask(index) };
const toggleTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const addTask = () => {
    console.log('newtask', newTask.value)

    if (newTask.value.trim()) {
        // tasks.value.push({ text: newTask.value, isCompleted: false });
        tasks2.addTask(newTask.value)
        newTask.value = '';
        
    }
   
    console.log('2'+tasks2.tasks)
   
};
</script> 