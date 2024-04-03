export const addTodo = (text:string) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteTodo = (id:number) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};
