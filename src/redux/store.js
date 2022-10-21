import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { CoreApi } from './services/Core';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [CoreApi.reducerPath]:CoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoreApi.middleware),
});
