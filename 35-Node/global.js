global.console.log('teste')
console.log(__filename)
console.log(__dirname)
console.log(process.versions.node)
console.log(process.argv)

// const [ , , fistName, lastName] = process.argv
// console.log(`O nome é ${fistName} ${lastName}`)

const getByFlag = flag => {
    const indexOfFlag = process.argv.indexOf(flag)
    return process.argv[indexOfFlag + 1]
}

const fistName = getByFlag('--fistname')
const lastName = getByFlag('--lastname')

console.log(`O nome é ${fistName} ${lastName}`)