import React from 'react'

function Character({ character }) {
  return (
    <div className="flex items-center justify-center p-2 m-2">
      <img src={character.image} alt={character.name} className="z-10 sm:w-40 sm:h-40 w-28 h-28 rounded-full" />
      <div className="relative right-40 text-md  bg-black md:bg-teal-800 w-screen h-40 rounded-full">
        <h1 className="hover:text-green-500 relative left-44 font-medium text-lg">{character.name}</h1>
        <p className="text-gray-300 relative left-44 italic">{character.species}</p>
        <p className="text-gray-300 relative left-44 italic ">{character.status}</p>
        <p className="text-gray-300 relative left-44 italic">{character.gender}</p>
        <p className="text-gray-300 relative left-44 italic">{character.origin.name}</p>
        <p className="text-gray-300 relative left-44 italic">{character.location.name}</p>
        

      </div>
    </div>
  )
}

export default Character