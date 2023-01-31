type ArrUniqueTypes<T> = T[]

const test: ArrUniqueTypes<Number> = [1, 2]
const test2: ArrUniqueTypes<String | boolean> = ['dev','tools', true]

const arrNumber: number[] = [1,2,3,4,5]