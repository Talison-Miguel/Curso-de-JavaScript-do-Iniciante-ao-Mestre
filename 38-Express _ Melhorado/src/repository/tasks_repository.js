const tasks = require("./../../data/tasks.json")


exports.get = async (id) => {
    if(!isNaN(id)) {
        return tasks.find(task => task.id === parseInt(id))
    }
    return tasks
}

exports.post = async (data) => {
    const newData = {
        ...data, 
        id: tasks[tasks.length - 1].id + 1
    }

    tasks.push(newData)
    return newData
}

exports.put = async (data, id) => {
    const taskIndex = tasks.findIndex( task => task.id === parseInt(id))
    if (taskIndex < 0) {
        return null
    }
    tasks.splice(taskIndex, 1, data)
    return data
}

exports.patch = async (data, id) => {
    const { title, completed, userId } = data
    const taskById = tasks.find( task => task.id === parseInt(id))
    const taskIndex = tasks.findIndex( task => task.id === parseInt(id))

    const updatedAt = Date.now()
    const taskUpdated = { title, completed, userId, updatedAt }

    if (taskIndex < 0) {
        return null
    }

    for (let prop in taskUpdated) {
        if(typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    const editTask = { ...taskById, ...taskUpdated }
    tasks.splice(taskIndex, 1, editTask)

    return editTask
}

exports.delete = async (id) => {
    const taskIndex = tasks.findIndex( task => task.id === parseInt(id))

    if (taskIndex < 0) {
        return null
    }

    const deleteTask = tasks.splice(taskIndex, 1)

    return deleteTask
}
// ...