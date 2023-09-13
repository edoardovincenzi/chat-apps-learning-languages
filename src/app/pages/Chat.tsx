import { Button, TextField, Typography } from '@mui/material';
import { addChat, addHistoryChat } from 'app/store/chat/chatReducer';
import { selectorGetChat } from 'app/store/chat/chatselector';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { selectorGetUser } from 'app/store/user/userSelector';
import { pb } from 'main';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChatPB } from 'types';

const Chat = () => {
  const dispatch = useAppDispatch();
  const chatArray = useAppSelector(selectorGetChat);
  const userInfo = useAppSelector(selectorGetUser);
  const [text, setText] = useState('');
  const { id } = useParams();
  function loadData() {
    pb.collection('chat')
      .getList<ChatPB>()
      .then((res) => {
        console.log(id);
        const chatHistory = res.items.filter(
          (item) =>
            ( item.id_user_receive === userInfo?.id || item.id_user_receive === id)
             && ( item.id_user_send === id || item.id_user_send === userInfo?.id)
        );
        dispatch(addHistoryChat(chatHistory));
        console.log(res);
      });
  }
  const createChat = async () => {
    const data = {
      id_user_send: userInfo?.id,
      id_user_receive: id,
      text_chat: text,
    };

    const record = await pb.collection('chat').create(data);
    dispatch(addChat(record.text_chat));
    setText('');
  };
  useEffect(() => {
    loadData();
    pb.collection('chat').subscribe<ChatPB>('*', function (e) {
      dispatch(addChat(e.record));
    });
    return () => {
      pb.collection('chat').unsubscribe('*');
    };
  }, []);
  return (
    <div className="flex flex-col">
      <Link to={'/'}>
        <Button>Back to contacts</Button>
      </Link>
      {chatArray.map((chat, index) => (
        <Typography
          key={index}
          className={
            chat.id_user_receive === userInfo?.id
              ? 'bg-orange-300/60'
              : 'bg-sky-300/60'
          }
        >
          {chat.text_chat}
        </Typography>
      ))}
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" onClick={createChat}>
        Add text to chat
      </Button>
    </div>
  );
};

export default Chat;
