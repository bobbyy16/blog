import React, { useState } from 'react'

export default function Home() {
    const [name, setName] = useState('Abhishek');
    const [age, setAge] = useState(23);

    const handleClick = () => {
        setName('Bobs')
        setAge(22)
    }
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
