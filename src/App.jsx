import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { getAllTasks, postTask, getDoneTasks } from "./api/tasksApi";
import "./App.scss";
import TaskBar from "./component/taskBar/TaskBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [toDoOrDone, setToDoOrDone] = useState("todo");

  useEffect(() => {
    const callAPI = async () => {
      if (toDoOrDone === "todo") {
        const response = await getAllTasks();
        setTasks(response.data.dados);
      } else if (toDoOrDone === "done") {
        const response = await getDoneTasks();
        setTasks(response.data.dados);
      }
    };

    callAPI();
  }, []);

  const handleChange = (e) => {
    setToDoOrDone(e.target.attributes.value.textContent);
  };

  const onChangeTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const saveNewTask = async () => {
    if (taskInput === "") {
      return "";
    } else {
      await postTask(taskInput);

      setTaskInput("");

      updateScreen();
    }
  };

  const updateScreen = async () => {
    const response = await getAllTasks();
    setTasks(response.data.dados);
  };

  return (
    <Container sx={{ paddingY: "2rem" }} className="display-column">
      <Typography
        component="h1"
        variant="h3"
        sx={{ color: "#86019b", fontWeight: "600", fontFamily: "Poppins" }}
      >
        Anotações
      </Typography>
      <Box className="input-task-box">
        <TextField
          fullWidth
          label="Digite sua tarefa"
          value={taskInput}
          onInput={onChangeTaskInput}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              saveNewTask();
            }
          }}
        />
        <Button
          className="add-task-button"
          variant="contained"
          onClick={saveNewTask}
        >
          Adicionar
        </Button>
      </Box>
      <ToggleButtonGroup
        color="primary"
        value={toDoOrDone === "todo" ? "todo" : "done"}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="todo">A fazer</ToggleButton>
        <ToggleButton value="done">Concluídos</ToggleButton>
      </ToggleButtonGroup>
      <Box>
        {tasks.map((task) => {
          return (
            <TaskBar
              key={task._id}
              id={task._id}
              taskTitle={task.description}
              shouldUpdateScreen={(shouldUpdate) =>
                shouldUpdate && updateScreen()
              }
            />
          );
        })}
      </Box>
    </Container>
  );
}

export default App;
