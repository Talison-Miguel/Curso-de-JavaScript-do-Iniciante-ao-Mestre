const tasks = require("./../../data/tasks.json")


exports.get = async (id) => {
    if(id) {
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