import axios from "axios";

const api = axios.create({
  baseURL: "http://3.34.140.51",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  
  addComment: (id, content) =>
    api.post(`/api/articles/${id}/comments`, { content }),
  comments: (id) => api.get(`/api/articles/${id}/comments`),
  delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
  editComment: (id, coId, content) =>
    api.put(`/api/articles/${id}/comments/${coId}`, { content }),

};