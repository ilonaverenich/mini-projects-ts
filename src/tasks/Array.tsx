import React from 'react'
interface Cars {
    id: number,
    brand: string,
    children?: React.ReactNode|React.ReactNode[];
}

function Array() {
    const cars: Cars[] =[{id:1, brand:'BMW'},{id:2, brand:'MAZDA'} ]

  return (
    <div>
        <p>Array</p>
    </div>
  )
}

export default Array
