function initExecute(execute) {
  return function(callback) {
    return execute(callback)
  }
}

class Job {
  constructor(execute , priority = 0) {
    this.execute = initExecute(execute)
    this.priority = priority
  }
}

export default Job
