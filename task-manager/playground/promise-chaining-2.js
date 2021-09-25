require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

// Task.findByIdAndDelete('614e014ba4664df342ca5a4f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('614de766b48b9bd844ac2dc7').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})