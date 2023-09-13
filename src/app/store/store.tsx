import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chat/chatReducer';
import userReducer from 'app/store/user/userReducer';
import usersListReducer from 'app/store/usersList/usersListReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
    usersList: usersListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
