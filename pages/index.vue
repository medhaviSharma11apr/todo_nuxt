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
                <li v-for="(task, index) in tasks" :key="index"
                    class="flex justify-between  mt-4 items-center bg-gray-100 p-2 mb-2 rounded ">
                    <span :class="{ 'line-through': task.completed }" @click="toggleTask(index)">
                        {{ task.text }}
                    </span>

                </li>
            </ul>
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';



const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
    console.log('newtask', newTask.value)

    if (newTask.value.trim()) {
        tasks.value.push({ text: newTask.value, isCompleted: false });
        newTask.value = '';
    }
    console.log(tasks.value)
};
</script>