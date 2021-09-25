require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('614dfd949c67d5ebf89d6d9e', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('614dfd949c67d5ebf89d6d9e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})