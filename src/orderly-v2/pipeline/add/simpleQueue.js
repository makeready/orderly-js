const simpleQueue = ([queue]) => {
  return (...tasks) => tasks.map(queue.add)
}

export default simpleQueue