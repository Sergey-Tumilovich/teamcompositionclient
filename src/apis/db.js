import axios from 'axios';

export default axios.create({
  //local
  // baseURL: 'http://localhost:3001'
  //deployed
  baseURL: 'https://my-json-server.typicode.com/Sergey-Tumilovich/teamcompositionserver'
});
