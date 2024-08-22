import { configureStore } from '@reduxjs/toolkit';
import abTestReducer from './abTestStore';

export const store = configureStore({                       
  reducer: {                                            
    abTest: abTestReducer,
  },
});

export type State = ReturnType<typeof store.getState>;        // State is a type that represents the entire Redux state
//export type AppDispatch = typeof store.dispatch;                  // AppDispatch is a type that represents the Redux store's dispatch function
