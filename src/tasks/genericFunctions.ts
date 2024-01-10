// Задание 1. Напишите функцию identity, которая принимает аргумент и возвращает его без изменений с использованием дженериков.
export function identity<T> (value:T):T{
    return value
}
const result1  = identity(4) // result1 имеет тип number
const result2  = identity('Ilona') // result2 имеет тип string

// Задание 2. Напишите функцию toArray, которая принимает аргумент и возвращает массив, содержащий только этот аргумент.

function toArray<T> (value:T):T[]{
    return [value]
}

const arr1 = toArray(42)