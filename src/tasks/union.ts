//объявляем переменную, которая может быть строкой или числом
export let variable: string | number

type Status = 'loading' | 'success'
const st :Status = 'loading'

//1. Создай переменную, которая может содержать либо строку, либо число, либо объект. Затем напиши функцию, которая принимает эту переменную и выводит её тип в консоль. Убедись, что функция корректно определяет тип значения в переменной.
let data
data = "Hello";
type Data = string | number | object

function printDataType(data:Data) {
    console.log(typeof data)
}

// Вызов функции
printDataType(data); // Вывод: "string"

//2. Объяви два типа объектов, представляющих информацию о пользователе и его статусе. Затем создай новый тип, который будет представлять профиль пользователя, объединяя в себе характеристики обоих объектов. Создай объект профиля и выведи его данные в консоль.

type UserInfo = {
    name: string,
    age: number,
    email: string
}
type UserStatus = {
    status : 'online' | 'offline' | 'away';
    lastseen :string
}

type UserProfile = UserInfo & UserStatus


const user:UserProfile ={
    name:'Ilona',
    age:28,
    email:'ilonaverenich@tut.by',
    status:'online',
    lastseen:'20.12.2023'
}

//3. Напиши функцию, которая принимает два аргумента: строку и число. Определи типы аргументов так, чтобы функция могла принимать как строку, так и число. Функция должна выводить переданные значения в консоль.

type Value = string| number 

function printValue(value:Value) {
    console.log(value);
}

// Вызов функции
printValue("Hello"); // Вывод: "Hello"
printValue(42);      // Вывод: 42

//4. Создай функцию printInfo(info), которая принимает параметр info, представляющий объект с различными свойствами, такими как name, age и status. Определи несколько типов объектов с разными наборами свойств. Затем используй оператор пересечения (&) для создания более общего типа параметра функции, который учитывает все возможные свойства. Вызови функцию с объектами разных типов.

type Info = {
    name?:string,
    age?: number,
    status?: string
}

function printInfo(info: Info) {
    console.log(`Name: ${info.name}`);
    console.log(`Age: ${info.age}`);
    console.log(`Status: ${info.status}`);
}

// Вызов функции с объектами разных типов
printInfo({ name: "Alice" });                    
// Вывод: Name: Alice

printInfo({ age: 30 });                          
// Вывод: Age: 30

printInfo({ name: "Bob", age: 25, status: "Active" }); 
// Вывод: Name: Bob, Age: 25, Status: Active

/* 5. Определи тип CarInfo, который будет содержать следующие поля:
model (модель автомобиля) - строка.
year (год выпуска) - число.
Определи тип CarFeatures, который будет содержать следующие поля:
hasAC (наличие кондиционера) - булевое значение.
hasBluetooth (наличие Bluetooth) - булевое значение.
Создайте новый тип CarProfile, который будет объединять характеристики из типов CarInfo и CarFeatures.
Создайте объект myCar с типом CarProfile и заполните его данными, представляющими ваш автомобиль.
Выведите информацию о машине, используя данные из объекта myCar.
// Вывод данных о моей машине
console.log(`Model: ${myCar.model}`);
console.log(`Year: ${myCar.year}`);
console.log(`Air Conditioning: ${myCar.hasAC ? "Yes" : "No"}`);
console.log(`Bluetooth: ${myCar.hasBluetooth ? "Yes" : "No"}`); */ 

type CarInfo ={
    model:string,
    year: number
}

type CarFeatures = {
    hasAC: boolean,
    hasBluetooth: boolean,
}
type CarProfile = CarInfo & CarFeatures;
const myCar: CarProfile  = {
    model: 'BMW',
    year:2023,
    hasAC: true,
    hasBluetooth:true
}
