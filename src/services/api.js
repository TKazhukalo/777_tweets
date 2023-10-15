import axios from "axios";

axios.defaults.baseURL = 'https://6528475b931d71583df21cb0.mockapi.io';

export const fetchUsers = async () => {
       
  const response = axios.get(`/users`);
  return response;
};

export const updateUser = async ( id, user ) => {
  const response = axios.put(`/users/${id}`, user);
  return response;
}
