//o Set é tipo um array que so aceita valores unicos

const _set = new Set()
const _weekSet = new WeakSet()


const arr = [1,2,3,4,5,2,3]

_set.add(1)
_set.add(5)
_set.add(2)
_set.add(7)
_set.add(3)
_set.add(6)
console.log(_set.size)
console.log(_set.has(6))
_set.delete(6)
console.log(_set.size)
console.log(_set.has(6))

console.log('---------------keys')
for(let el of _set.keys()) {
    console.log(el)
}
console.log('---------------values')

for(let el of _set.values()) {
    console.log(el)
}



// console.log('__________')

let obj2 = {}
;(function() {
    let obj1 = {foo: 'bar'}
    let obj2 = {foo2: 'bar2'}


    _set.add(obj1)
    _weekSet.add(obj2)

})()

for(let x of _set) {
    console.log(x)
}


console.log('__________')
console.log(_set.size)

console.log(_weekSet.has(obj2))