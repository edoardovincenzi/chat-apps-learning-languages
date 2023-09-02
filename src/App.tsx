import { Button } from '@mui/material';
import { addIssue } from 'app/store/IssueReducer';
import { selectorIssue } from 'app/store/selectorIssue';
import { useAppDispatch, useAppSelector } from 'app/store/store';
import { auth, googleProvider } from 'config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { db } from 'config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const dispatch = useAppDispatch();
  const selectorTest = useAppSelector(selectorIssue);
  const chatTest = collection(db, 'chat-test');
  console.log(auth.currentUser);

  const getChatTest = async () => {
    try {
      const data = await getDocs(chatTest);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="contained" onClick={() => dispatch(addIssue('adadas'))}>
        Hello world
      </Button>
      {selectorTest.projectIssues.map((issue, index) => (
        <h1 key={index} className="text-3xl font-bold underline">
          {issue}
        </h1>
      ))}
      <Button onClick={signInWithGoogle}>Authenticate with google</Button>
      <Button onClick={logOut}>Log out</Button>
      <div>
        <Button onClick={getChatTest}>Get data</Button>
      </div>
    </>
  );
}

export default App;
