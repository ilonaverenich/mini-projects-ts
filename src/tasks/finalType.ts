// 1. Типизируй и выведи данные в консоль:
export type Product ={
    name: string,
    price: number
}
const product:Product = {
    name: "Laptop",
    price: 999.99,
  };
  
  console.log(`Product: ${product.name}, Price: $${product.price}`);

 //2. Типизируй и выведи данные в консоль:
 interface Person {
     name:string,
     age:number, 
     address: Adress

 }
 interface Adress{
    street:string,
    city: string,
    zipCode: string
 }
 const person:Person = {
    name: "Alice",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Cityville",
      zipCode: "12345",
    },
  };
  
  console.log(`Name: ${person.name}, Age: ${person.age}`);
  console.log(
    `Address: ${person.address.street}, ${person.address.city}, ${person.address.zipCode}`
  );

  //3. Типизируй и выведи данные в консоль в массиве по каждому объекту (Product и Quantity):
  type Cart ={
    product:string,
    quantity:number
  }
  const cart : Cart[]= [
    { product: "Shirt", quantity: 2 },
    { product: "Shoes", quantity: 1 },
    { product: "Hat", quantity: 3 },
  ];

  // 5. Типизируй
  type Order = {
    customerName: string,
    products: Array <Products>,
    shippingInfo: ShippingInfo
  }

  type Products ={
    name: string,
    price: number
  }

  type ShippingInfo ={
    address: string,
    deliveryDate: string
  }
  const order:Order = {
    customerName: "Alice",
    products: [
      { name: "Laptop", price: 999.99 },
      { name: "Headphones", price: 49.99 },
    ],
    shippingInfo: {
      address: "123 Main St",
      deliveryDate: "2023-09-30",
    },
  };
 // 6. Типизируй

 type Movie ={
    title: string,
    director: Director,
    actors: Array <Actors>
    genres: string[]

 }
type Director ={
    name: string,
    birthYear: number
}
type Actors ={
    actor: Actor,
    films : Array<Films>
}
type Actor ={
    name : string,
    birthYear: number
}

type Films ={
    movieTitle: string,
    roles: Array <Roles>
}

type Roles = { 
    movieTitle: string,
    characterName: string

}
 const movie: Movie = {
    title: "Inception",
    director: {
      name: "Christopher Nolan",
      birthYear: 1970,
    },
    actors: [
      {
        actor: { name: "Leonardo DiCaprio", birthYear: 1974 },
        films: [
          {
            movieTitle: "Inception",
            roles: [{ movieTitle: "Inception", characterName: "Cobb" }],
          },
          {
            movieTitle: "The Revenant",
            roles: [{ movieTitle: "The Revenant", characterName: "Hugh Glass" }],
          },
        ],
      },
      {
        actor: { name: "Joseph Gordon-Levitt", birthYear: 1981 },
        films: [
          {
            movieTitle: "Inception",
            roles: [{ movieTitle: "Inception", characterName: "Arthur" }],
          },
        ],
      },
    ],
    genres: ["Science Fiction", "Action", "Thriller"],
  };

  //7. Типизируй:
  interface Zoo {
    name: string,
    species: Species,
    characteristics: Characteristics,
    habitats: Habitats[]

  }
  interface Species {
    name: string,
    classification:string
  }

  interface Characteristics{
    size: string,
    diet: string
  }

  interface Habitats {
    habitatType: string, 
    location: string
  }

  const zoo:Zoo[] = [
    {
      name: "Lion",
      species: {
        name: "Panthera leo",
        classification: "Mammal",
      },
      characteristics: {
        size: "Large",
        diet: "Carnivore",
      },
      habitats: [
        { habitatType: "Grasslands", location: "Africa" },
        { habitatType: "Savanna", location: "Africa" },
      ],
    },
    {
      name: "Panda",
      species: {
        name: "Ailuropoda melanoleuca",
        classification: "Mammal",
      },
      characteristics: {
        size: "Medium",
        diet: "Bamboo",
      },
      habitats: [
        { habitatType: "Bamboo Forest", location: "China" },
        { habitatType: "Mountainous Regions", location: "China" },
      ],
    },
  ];

