import { configureStore } from '@reduxjs/toolkit';

import taskSlice from './tasks';

const store = configureStore({
    reducer: taskSlice.reducer
});

export default store;