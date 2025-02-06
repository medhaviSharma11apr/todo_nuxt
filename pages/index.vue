<template>
    <div class="main">
        <div class="container flex items-center justify-center mx-auto border-2 border-indigo-600 ">
            <h1 class="text-2xl font-bold mb-4">To Do App</h1>
        </div>
        <div class="container mx-auto border-2 border-red-600">

            <input type="text" v-model="newTask"  @keyup.enter="addTask" class="border rounded p-2 w-full">
            <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>

        </div>

    </div>
</template>


<script setup>

const newTask = ref('');
const allTask = ref([]);


const addTask = () => {
    console.log(newTask.value);

    if (newTask.value) {
        allTask.value.push({
            name: newTask.value,
            isComplete: false,
        })
    }


}
</script>