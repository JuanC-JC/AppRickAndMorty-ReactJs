import React from 'react'
import imgLogo from './images/logo.png'
import CharacterCard from '../Components/CharacterCard'
import Error from '../Components/Error'


//Hook personalizado
function useData(){

  const url = 'https://rickandmortyapi.com/api/character'

  const [data,setData] = React.useState([])
  const [nextPage,setNextPage] = React.useState(`${url}`)
  const [loading,setLoading] = React.useState(true)
  const [error,setError] = React.useState(null)


  const fetchData = async ()=>{

    setLoading(true)
    setError(null)

    try{
      const response = await fetch(nextPage)
      const characters = await response.json()

      setTimeout(() => {
      setData([...data,...characters.results])
      setNextPage(characters.info.next)
      setLoading(false)
      }, 2000);



    }catch(error){
      setLoading(false)
      setError(error)
    }

  }

  //solo ejecuta una vez en el componentDidMount -> use memo
  React.useEffect(()=>{

      fetchData() 

      //una creacion de un intervalo
      // const idInterval = setInterval(() => {
      //   console.log("ejecutnado escuchador de errores")
      //   if(error){
      //     console.log("hacer solicitud fetch")
      //     fetchData()
      //   }
      // }, 10000);

      
      //equivalente a componentWillUnmont
      // return ()=>{
      //   clearInterval(idInterval)
      // }

  },[])



  return {data,loading,error,fetchData,nextPage}
}


//componente render
function MainPage(){

    const {data,loading,nextPage,fetchData,error} = useData()

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={imgLogo} alt="Rick & Morty"/>

          <ul className="row">

            {data.map((character)=>(
              <CharacterCard character={character} key={character.id}/>
            ))}

          </ul>

          {loading && <h1 className="text-center">Loading...</h1>}
          {!loading && error && <Error error={error}/>}
          {!loading && nextPage && <button onClick={()=>fetchData()}>Load More</button>}
            
        </div>
      </div>
    );
}

export default MainPage