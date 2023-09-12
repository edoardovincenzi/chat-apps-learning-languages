import { Button, TextField } from '@mui/material';
import { addChat } from 'app/store/chatReducer';
import { selectorGetChat } from 'app/store/selectorIssue';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { selectorGetUser } from 'app/store/user/userSelector';
import { pb } from 'main';
import { useState } from 'react';

function Home() {
  const dispatch = useAppDispatch();
  const chatArray = useAppSelector(selectorGetChat);
  const userInfo = useAppSelector(selectorGetUser);
  const [text, setText] = useState('');
  function loadData() {
    pb.collection('chat')
      .getList()
      .then((res) => {
        console.log(res);
      });
  }
  const createChat = async () => {
    const data = {
      id_user: userInfo?.id,
      text_chat: text,
    };

    const record = await pb.collection('chat').create(data);
    dispatch(addChat(record.text_chat));
    setText('');
  };
  return (
    <>
      <Button variant="contained" onClick={loadData}>
        LoadData
      </Button>
      {chatArray.chat.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" onClick={createChat}>
        Add text to chat
      </Button>
    </>
  );
}

export default Home;
