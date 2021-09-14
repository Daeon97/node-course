const fs = require('fs')

const meBuffer = fs.readFileSync('1-json.json')
const meJSON = meBuffer.toString()
const me = JSON.parse(meJSON)

me.name = 'Immanuel Engels Onyeka'
me.age = 24

const newMeJSON = JSON.stringify(me)

fs.writeFileSync('1-json.json', newMeJSON)