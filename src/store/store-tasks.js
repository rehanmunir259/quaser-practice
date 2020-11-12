import Vue from 'vue';
import { uid } from 'quasar';
const state = {
    tasks: {
        ID1: {
            name: "Go to shop",
            completed: false,
            dueDate: "2021/05/12",
            dueTime: "18:30",
        },
        ID2: {
            name: "Get bananas",
            completed: false,
            dueDate: "2021/05/13",
            dueTime: "14:00",
        },
        ID3: {
            name: "Get apples",
            completed: false,
            dueDate: "2021/05/14",
            dueTime: "16:00",
        }
    }

}

const mutations = {
    //only sync
    //never async function
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id);
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    // async methods
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },

    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid();
        let payload = {
            id: taskId,
            task: task
        };

        commit('addTask', payload)

    }
}

const getters = {
    // get data from states
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key];
            if (!task.completed) {
                tasks[key] = task;
            }
        })
        return tasks;
    },

    tasksCompleted: (state) => {
        let tasks = {};
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key];
            if (task.completed) {
                tasks[key] = task;
            }
        })
        return tasks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}