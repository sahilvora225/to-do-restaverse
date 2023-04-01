import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [{id: 0, name: 'My Task', 'created_at': '2023-04-01 12:00:00', status: 0}]
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask (state, action) {
            let newTask = {
                id: state.taskList.length,
                name: action.payload,
                'created_at': '2023-04-01 01:00:00',
                status: 0
            }
            state.taskList.unshift(newTask);
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
        }
    }
})

export default taskSlice;
export const taskActions = taskSlice.actions;