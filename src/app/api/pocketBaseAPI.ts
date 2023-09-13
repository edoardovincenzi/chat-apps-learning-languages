import { Dispatch } from '@reduxjs/toolkit';
import { addUsers } from 'app/store/usersList/usersListReducer';
import { pb } from 'main';
import { UserPB } from 'types';

export const getAllUsers = async (dispatch: Dispatch, userInfo: UserPB) => {
  const usersList = await pb.collection('users').getFullList<UserPB>({
    sort: '-created',
  });
  const usersListWithoutUs = usersList.filter(
    (user) => user.id !== userInfo.id
  );
  dispatch(addUsers(usersListWithoutUs));
};
