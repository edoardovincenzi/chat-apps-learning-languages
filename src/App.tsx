import { Button } from '@mui/material';
import { addIssue } from 'app/store/IssueReducer';
import { selectorIssue } from 'app/store/selectorIssue';
import { useAppDispatch, useAppSelector } from 'app/store/store';

function App() {
  const dispatch = useAppDispatch();
  const selectorTest = useAppSelector(selectorIssue);

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
    </>
  );
}

export default App;
