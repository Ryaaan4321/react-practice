export const loggerMiddleware=store=>next=>action=>{
    console.log("dispatching ",action);
    console.log("prev state ",store.getState())
    const result=next(action);
    console.log("next state ",store.getState());
    return result;
}

export const saveTodoMiddleware = store => next => action => {
  if (action.type === "todo/addTodo") {
    setTimeout(() => {
      console.log("Saved todo to server:", action.payload);
    }, 1000);
  }

  return next(action);
};


