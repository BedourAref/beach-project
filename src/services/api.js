import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

export async function getPosts() {
  const response = await apiClient.get("/posts?_limit=6");
  return response.data;
}

export default apiClient;
