import { RootState } from 'app/store/store';

export const selectorGetUser = (state: RootState) => state.user.userInfo;
