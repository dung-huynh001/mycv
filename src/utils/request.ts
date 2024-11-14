import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7127/api/',
});

const get = async <T>(
  path: string,
  config: AxiosRequestConfig = {},
): Promise<T> => {
  return await axiosInstance
    .get<T>(path, config)
    .then((response) => response.data);
};

const post = async <T>(
  path: string,
  data: {} = {},
  config: AxiosRequestConfig = {},
): Promise<T> => {
  return await axiosInstance
    .post<T>(path, data, config)
    .then((response) => response.data);
};

const put = async <T>(
  path: string,
  data: {} = {},
  config: AxiosRequestConfig = {},
): Promise<T> => {
  return await axiosInstance
    .put<T>(path, data, config)
    .then((response) => response.data);
};

const patch = async <T>(
  path: string,
  data: {} = {},
  config: AxiosRequestConfig = {},
): Promise<T> => {
  return await axiosInstance
    .patch<T>(path, data, config)
    .then((response) => response.data);
};

const remove = async <T>(
  path: string,
  config: AxiosRequestConfig = {},
): Promise<T> => {
  return await axiosInstance
    .delete<T>(path, config)
    .then((response) => response.data);
};

export { axiosInstance, get, post, put, patch, remove };
