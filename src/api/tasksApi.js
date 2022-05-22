import axios from 'axios';

const backendURL = 'http://localhost:8080/';

export const getAllTasks = async () => {
  const response = await axios.get(backendURL);
  return response;
};
