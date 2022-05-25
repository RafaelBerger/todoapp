import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { getAllTasks, postTask } from './api/tasksApi';
import './App.scss';
import TaskBar from './component/taskBar/TaskBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const callAPI = async () => {
      const response = await getAllTasks();
      setTasks(response.data.dados);
    };

    callAPI();
  }, []);

  const onChangeTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const saveNewTask = async () => {
    await postTask(taskInput);

    setTaskInput('');

    const response = await getAllTasks();
    setTasks(response.data.dados);
  };

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
        <TextField
          fullWidth
          label='Digite sua tarefa'
          value={taskInput}
          onInput={onChangeTaskInput}
        />
        <Button
          className='add-task-button'
          variant='contained'
          onClick={saveNewTask}
        >
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
