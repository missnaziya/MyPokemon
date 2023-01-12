import react,{useState} from 'react' ;
import axios from 'axios';



const MyPokemon = () => {

const [data,setData] = useState([]); 
   const fetch = () => {
              axios.get("https://jsonplaceholder.typicode.com/users")
              .then((res) =>{
                  setData(res.data);
                console.log(res.data);
                alert('hello');
            }  
            )
   }

    return (

        
        <div>
        pokemon

        <button onClick={fetch}>click me</button>

 <div>
{data.map((value) =>(
    
    <div>
<h1>
{ value?.id }

{ value?.name }
</h1>

    </div>
    
    )
    
)}


</div> 

 
    </div>

)


    
    
}

export default MyPokemon;