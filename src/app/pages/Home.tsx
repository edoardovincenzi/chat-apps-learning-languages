import ListContacts from 'app/features/ListContacts';
import { resetChat } from 'app/store/chat/chatReducer';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { selectorGetUser } from 'app/store/user/userSelector';
import { useEffect } from 'react';

function Home() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectorGetUser);
  useEffect(() => {
    dispatch(resetChat());
  }, []);

  return (
    <>
      <p>Benvenuto nella chat {userInfo?.name}</p>
      <ListContacts />
    </>
  );
}

export default Home;
