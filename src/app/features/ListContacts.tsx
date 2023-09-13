import { Button } from '@mui/material';
import { getAllUsers } from 'app/api/pocketBaseAPI';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { selectorGetUser } from 'app/store/user/userSelector';
import { selectorGetUsersList } from 'app/store/usersList/usersListSelector';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListContacts = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(selectorGetUsersList);
  const userInfo = useAppSelector(selectorGetUser);
  useEffect(() => {
    if (userInfo) {
      getAllUsers(dispatch, userInfo);
    }
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {usersList.map((user) => (
        <Link to={`/chat/${user.id}`} key={user.id}>
          <Button>{user.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default ListContacts;
