import api from "./api";

export const getTodoTask = () => {
  return api.get("/todos");
};
