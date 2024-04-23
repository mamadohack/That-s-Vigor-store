
const initialState: { tasks: task[]} = {
  tasks: [{id:1,text:"first text todo"}],
};

export type task ={
    id:number;
    text:string;
}

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
