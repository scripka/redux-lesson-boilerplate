export const addToDo = todo => ({
  type: "ADD_TODO",
  todo
})

export const completeTask = id => ({
  type: "COMPLETE_TODO",
  id
})