export type RandomDataType<T> = {
	randomData: T
}


//1.Типизируй массив так, чтобы он мог содержать только строки:
const stringArray: string[] = ['apple', 'banana', 'cherry'];
const stringArray2: Array<String> = ['apple', 'banana', 'cherry'];
const stringArray3 = ['apple', 'banana', 'cherry'] as string[];

//2. Типизируй массив так, чтобы он мог содержать только числа:

const numberArray = [1, 2, 3] as number[];
const numberArray2: Number[] = [1, 2, 3];
const numberArray3: Array<number> = [1, 2, 3];

//3. Создай обобщенный массив, который может содержать элементы разных типов (строки, числа, булевые):
const mixedArray :(string | number | boolean)[] = ['hello', 42, true];

//4. Создай обобщенный тип для массива с помощью дженерика, который может содержать элементы разных (которые передадим) типов, примеры данных, для которых должен работать дженерик:


type ArrayOfType<T> = T[];

const numbers : ArrayOfType<number> = [1, 2, 3, 4]
const strings : ArrayOfType<string>  = ['Redev', 'TypeScript', 'React', 'Redux']
const objects: ArrayOfType<{ id: number; name: string }>  = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Sasha'},
]
const arrayNumbers: ArrayOfType<number[]> = [
    [1, 2, 3],
    [4, 5, 6]
]

//5. Типизируй заданные объекты с использованием дженериков: 
interface Item<TInfo, TFeatures> {
    info: TInfo,
    features: TFeatures
}

interface Info {
    address: string,
    city: string
}

interface FeaturesHouse {
    bedrooms: number,
    bathrooms: number,
    areaSquareFeet: number,
    hasGarden: boolean
}

interface FeaturesComputer {
    processor: string,
    memoryGB: number,
    storageGB: number,
    hasGraphicsCard: boolean
}

// Пример использования для дома
const house: Item<Info, FeaturesHouse> = {
    info: {
        address: '123 Main Street',
        city: 'Exampleville',
    },
    features: {
        bedrooms: 3,
        bathrooms: 2,
        areaSquareFeet: 1800,
        hasGarden: true,
    },
};

// Пример использования для компьютера
const computer: Item<Info, FeaturesComputer> = {
    info: {
        address: 'N/A',
        city: 'Techtopia',
    },
    features: {
        processor: 'Intel Core i7',
        memoryGB: 16,
        storageGB: 512,
        hasGraphicsCard: true,
    },
};

// Пример использования для стола (без конкретных характеристик)
const table: Item<Info, {}> = {
    info: {
        address: 'house',
        city: 'house',
    },
    features: {},
};

//6. 
type TypeFactory<T> =T;
type XType = TypeFactory<string> 
type XType2 = TypeFactory<number> 
type XType3 = TypeFactory<boolean> 

function toArray<T> (...arg:T[]):T[]{
	return arg
}
toArray(1,2,3,4)

type PaymentInfo<T> = {
    id: string;
    amount: number;
    currency: T;
}
const paymentInfo:PaymentInfo<number> = {
	id: 'string',
    amount: 12000,
    currency: 15
}

function indx<T>(arg:T):T{
	return arg
}
indx<string>('ss')