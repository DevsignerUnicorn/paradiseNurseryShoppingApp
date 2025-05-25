import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configurationStore from Redux Toolkit
const store = configureStore({
    reducer: {
        cart: cartReducer, // 'cart' slice is managed by cartReducer
    },
});
export default store;  // Export for use in <Provider store={store}>
