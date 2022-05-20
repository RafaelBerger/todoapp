import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import './App.scss';
import TaskBar from './component/taskBar/TaskBar';
import fakeTasks from './fakeTasks.json';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(fakeTasks.tasks);
  }, []);

  return (
    <Container sx={{ paddingY: '2rem' }} className='display-column'>
      <Typography component='h1' variant='h3'>
        Anotações
      </Typography>
      <Box className='input-task-box'>
        <TextField fullWidth label='Digite sua tarefa' />
        <Button className='add-task-button' variant='contained'>
          Adicionar
        </Button>
      </Box>
      <Box>
        {tasks.map((task) => {
          return <TaskBar taskTitle={task.title} />;
        })}
      </Box>
    </Container>
  );
}

export default App;
