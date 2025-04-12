import axios from 'axios';

const BASE_URL = 'https://reqres.in';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, {
      email,
      password
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/users/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};

export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

export const logout = () => {
  localStorage.removeItem('token');
}; 