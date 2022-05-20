import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./TaskBar.scss";

export default function TaskBar({ taskTitle }) {
  return (
    <Box className='taskbar-box'>
      <Typography className='taskbar-title' component='span' variant='body2'>
        {taskTitle}
      </Typography>
      <Box className='taskbar-icons'>
        <IconButton>
          <CheckIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
