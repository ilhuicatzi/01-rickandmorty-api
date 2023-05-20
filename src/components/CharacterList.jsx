import React, { useState, useEffect } from 'react';
import Character from './Character';

function NavPage (props){
  return <header className='flex justify-between items-center w-full mb-10'>
    <button disabled={props.page===1} className='sm:px-3 px-1 py-2 m-1 bg-cyan-700 text-white md:font-medium border-2 rounded-full  ' onClick={()=> props.setPage(props.page - 1)} > Page: {props.page - 1} </button>
    <h3 className='font-medium m-2 py-2 px-8 border-2 rounded-2xl font-kenia text-xl md:text-2xl text-green-300'> Page  {props.page} </h3>
    <button className='sm:px-3 px-1 py-2 m-1 bg-cyan-700 text-white md:font-medium border-2 rounded-full  ' onClick={()=> props.setPage(props.page + 1)} > Page: {props.page +1} </button>
  </header>
}

function CharacterList() {
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false)
      setCharacter(data.results)
    }
    fetchData()
  }, [page])

  return (
    <div className="flex flex-col items-center justify-center text-white bg-black">
      

      <div className="text-3xl md:text-6xl font-medium font-kenia my-8">
        <h1 className="hover:text-green-500" > Rick and Morty api</h1>
      </div>

      <div className='w-5/6'>
        <NavPage page={page} setPage={setPage} />
      </div>
      

      {
        loading ?( <h1 className="text-5xl font-medium font-kenia my-8">Loading...</h1>) : (
      
      <div className='flex justify-center items-center sm:ml-40 lg:ml-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mx-2 '>
          {
            character.map((character) => {
              return (
                <Character key={character.id} character={character} />
              )
            })
          }
        </div>
      </div>)}

      <div className='w-5/6 my-10'>
        <NavPage page={page} setPage={setPage} />
      </div>

    </div>

  )
}

export default CharacterList