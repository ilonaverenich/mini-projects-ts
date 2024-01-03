//1. типизировать обьект movie 
export interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    ratings: Ratings
}
interface Ratings {
    imdb:number,
    metacritic: number
}

const movie: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    ratings: {
      imdb: 8.8,
      metacritic: 74,
    },
  };

//2. Типизировать обьект car 
interface Car {
    make: string,
    model: string,
    year: number,
    specifications: Specifications
}
interface Specifications {
    engineType:string,
    color:string

}
const car:Car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    specifications: {
      engineType: "Gasoline",
      color: "Blue",
    },
  };
  
  //3. Типизировать обьект apartment 
  type Apartament ={
    address: string,
    numberOfRooms: number,
    features: Features
  }
  type Features ={
    hasBalcony: boolean,
    hasParking: boolean
  }
  const apartment: Apartament = {
    address: "456 Elm Street",
    numberOfRooms: 2,
    features: {
      hasBalcony: true,
      hasParking: false,
    },
  };

  //4. Типизировать обьект product  

  type Product = {
    name:string,
    price:number,
    details: Details
  }
  type Details ={
    brand: string,
    screen: string
  }
  
  const product:Product = {
    name: "Smartphone",
    price: 599,
    details: {
      brand: "Samsung",
      screen: "6.5 inches",
    },
  };