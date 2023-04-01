import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    taskList: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask (state, action) {
            state.taskList.unshift(action.payload);
            return state;
        },
        updateTask (state, action) {
            let index = state.taskList.findIndex(task => {
                return task.id === action.payload.id;
            });
            if (index > -1) {
                state.taskList[index].status = action.payload.status;
            }
            return state;
        },
        refreshTaskList (state, action) {
            state.taskList = action.payload;
            return state;
        }
    }
})

export default taskSlice;
export const taskActions = taskSlice.actions;
export const fetchTasksData = () => {
    return async (dispatch) => {
        let response = await axios.get('/tasks/');
        dispatch(taskActions.refreshTaskList(response.data));
    }
}
export const addNewTaskData = (newTask) => {
    return async (dispatch) => {
        let response = await axios.post('/tasks/', newTask);
        dispatch(taskActions.addNewTask(response.data));
    }
}
export const updateTaskData = (taskDetails) => {
    return async (dispatch) => {
        let response = await axios.put(
            `/tasks/update/${taskDetails.id}/`,
            {'status': taskDetails.status}
        )
        if (response.status === 200) {
            dispatch(taskActions.updateTask({...taskDetails}));
        }
    }
}