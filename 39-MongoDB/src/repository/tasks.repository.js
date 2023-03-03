const mongoose = require("mongoose")
const Task = require("./../models/task.model")

const tasks = require('./../../data/tasks.json')

exports.get = (id) => {
    if (id) {
        return Task.findById(id)
    }
    return Task.find({})
}

exports.post = (data) => {
    const newData = { ...data }
    return Task.create(newData)
}

exports.put = (data, id) => {
    return Task.findOneAndUpdate({ _id: id }, data, { new: true })
}

exports.patch = (data, id) => {
    const { title, completed, userId } = data

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    return Task.findOneAndUpdate({ _id: id }, taskUpdated, {  })
}

exports.delete = (id) => {
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) {
    //     return null
    // }
    // const deletedTask = tasks.splice(taskIndex, 1)
    // return deletedTask
    return Task.findOneAndRemove({ _id: id })
}