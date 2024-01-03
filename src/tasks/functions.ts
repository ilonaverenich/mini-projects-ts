
//1. Добавь типы для аргумента и возвращаемого значения функции greet, чтобы указать, что она принимает строку и возвращает строку.

 export function greet(name:string):string {
    return "Hello, " + name + "!";
  }

//2. Определи типы для аргументов и возвращаемого значения функции add, чтобы указать, что она принимает два числа и возвращает число.
function add (a:number, b:number):number {
    return a + b;
  }

  //3. Добавь типы для аргументов и возвращаемого значения функции generateRandomNumber, чтобы указать, что она работает с числами.

  function generateRandomNumber(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //4. Определи типы для аргументов функции handleError, чтобы указать, что она принимает строку ошибки и функцию обработки ошибок.
/*   function handleError(error, errorHandler) {
    errorHandler(error);
  }
 */
  function sendMessage(message :string, recipient?: string , sender?:string ):string{
    return  `Message from ${sender} to ${recipient}: ${message}`
  }

