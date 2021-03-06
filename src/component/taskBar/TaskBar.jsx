import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deleteTask, updateCompletedTask } from '../../api/tasksApi';
import './TaskBar.scss';

export default function TaskBar({ taskTitle, id, shouldUpdateScreen }) {
  const handleDeleteClick = async (_e) => {
    await deleteTask(id);
    shouldUpdateScreen(true);
  };

  const handleUpdateTask = async (_e) => {
    await updateCompletedTask(id);
    shouldUpdateScreen(true);
  };

  return (
    <Box className='taskbar-box'>
      <Typography className='taskbar-title' component='span' variant='body2'>
        {taskTitle}
      </Typography>
      <Box className='taskbar-icons'>
        <IconButton onClick={handleUpdateTask}>
          <CheckIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
}
