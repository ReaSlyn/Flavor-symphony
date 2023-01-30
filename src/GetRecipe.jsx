// import RecetteCard from './RecetteCard';
import React from 'react';
import { useState, useEffect } from "react";
import Random from './Helper/Random';



import * as THREE from 'three'

import { useLoader } from '@react-three/fiber'





// export default function GetRecipe() {


// const newR = getAll()
// console.log(newR)

// }

const GetRecipe = (props) =>{


const [error, setError] = useState(null);
const [allRecipe, setAllRecipe] = useState([]);

useEffect(()  => {
async function fetchData(){ await 
  fetch(`http://localhost:5100/api/foodRecipe`)
    .then(res => res.json())
    .then(
      (result) => {
        setAllRecipe(result);
        
      },
      (error) => {
        setError(error);      
      }
    )
} fetchData()}, [error],


)
    // return console.log(allRecipe);
  return  <GetNewRecipe allRecipe={allRecipe} time={props} />
      
  }

export default GetRecipe;

  const GetNewRecipe = (props) => {
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);
    const [counter, setCounter] =useState(props.time.time);


    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (counter ? console.log(counter) :  <RecetteCard x={1} img={1}/>)
      // return [console.log(counter), <RecetteCard x={1} img={1}/>]

    };









    // console.log('je sui un nombre pas dans le use',number)
    // useEffect(() => {
    
    //   setTimeout(() => {
    //     setCount((count) => count + 1)    
    //     setNumber(Random(1, 2))
    //     console.log('useEffect called');
    //     console.log('je sui un nombre',number) 
      
    //   }
    //   , 1000);
    // }, []) // <- add empty brackets here
            

    

    // const id =( allRecipe.id[number])
   
     
    
    
    


  
export {default as GetNewRecipe} from './GetRecipe.jsx';



const RecetteCard =(props) =>{

  const texture = useLoader(THREE.TextureLoader, `./Recipe${props.img}.png`)
return (
  <group>
<mesh position={ [ -props.x, 10.4, -3 ] }>
<planeGeometry attach="geometry" args={[3, 3]} />
<meshPhongMaterial attach="material" map={texture} />
</mesh>

</group>


)
}

export {default as RecetteCard} from './GetRecipe.jsx';



