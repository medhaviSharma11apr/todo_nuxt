import { defineStore } from "pinia";

export const useStore = defineStore('todo', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      console.log('here in store add todo')
      this.tasks.push({ text: task, completed: false });
      console.log('store tasks', this.tasks)
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },

}

);