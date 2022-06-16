import axios from 'axios';

const backendURL = 'http://localhost:8080/';

export const getAllTasks = async () => {
  const response = await axios.get(backendURL);
  return response;
};

export const postTask = async (taskDescription) => {
  const response = await axios.post(backendURL, {
    description: taskDescription,
  });
  return response;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(backendURL + `${taskId}`);

  return response;
};

export const updateCompletedTask = async (taskId) => {
  const response = await axios.put(backendURL + `${taskId}`);

  return response;
};
