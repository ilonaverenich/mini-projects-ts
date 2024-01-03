//Практика типизация массивов

export const nameUsers: string[] = ['Ilona','Eugen','Marina','Ruslan'];
export const bool: boolean[] = [true, false] 
export const numAndStr : Array<number|string> = ['Ilona', 12, '333']
type Users ={
    name: string,
    age:number
}
export const arrayAndObj: Array<Users> = [{name:'Ilona',age:28}]
export const arrayPointsObj: Array<{x:number,y:number}> =[{x:2,y:3},{x:4,y:6}] 
export const arr: Array<number[]> = [[1,2,3],[3,4,56]];
type Users2 ={
    name:string,
    age: number,
    isStudent: boolean
}
export const objUsers: Array<Users2> = [{name:'Ilona',age:28,isStudent:false}, {name:'Eugen',age:19,isStudent:true}]