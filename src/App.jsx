import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { getAllTasks } from './api/tasksApi';
import './App.scss';
import TaskBar from './component/taskBar/TaskBar';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const response = await getAllTasks();
      setTasks(response.data.dados);
    };

    callAPI();
  }, []);

  return (
    <Container sx={{ paddingY: '2rem' }} className='display-column'>
      <Typography
        component='h1'
        variant='h3'
        sx={{ color: '#86019b', fontWeight: '600', fontFamily: 'Poppins' }}
      >
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
          return <TaskBar key={task.id} taskTitle={task.description} />;
        })}
      </Box>
    </Container>
  );
}

export default App;
