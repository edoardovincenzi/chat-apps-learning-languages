import { Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { addUser } from 'app/store/user/userReducer';
import { selectorGetUser } from 'app/store/user/userSelector';
import { pb } from 'main';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPB } from 'types';

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const userInfo = useAppSelector(selectorGetUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!pb.authStore.isValid) {
      navigate('/login');
    } else {
      refreshToken(dispatch);
    }
  }, [pb.authStore.isValid]);

  if (pb.authStore.isValid && userInfo?.id) {
    return <>{children}</>;
  }
};

export default ProtectRoute;

const refreshToken = async (dispatch: Dispatch) => {
  const authData = await pb.collection('users').authRefresh();
  dispatch(addUser(authData.record as UserPB));
};
