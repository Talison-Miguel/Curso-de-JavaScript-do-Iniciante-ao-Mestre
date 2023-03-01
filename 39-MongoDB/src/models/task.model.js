const mongoonse = require("mongoose")

const taskScheme = new mongoonse.Schema({
    title: { type: String, require: true, trim: true, maxlength: 150 },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, require: false },
    userId: { type: String, require: true, trim: true }
})

module.exports = mongoonse.model("Task", taskScheme)