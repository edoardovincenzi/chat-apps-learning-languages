import { configureStore } from '@reduxjs/toolkit';
import IssueReducer from './IssueReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    issue: IssueReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
