import './styles.css'
import CharCard from '../CharCard'


function Characters({characterList}) {

  return (

    <div>
      <h1>Meus Personagens</h1>
      <div className='card-container'>
        {characterList.map((characterList)=>{
          return <ul>
                  <li>
                    <CharCard characterList={characterList} key={characterList.id}/>
                  </li>
                </ul>
        })}
      </div>
    </div> 
    
  )

} 

export default Characters