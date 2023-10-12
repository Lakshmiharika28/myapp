import React from 'react'
import { useContext } from 'react'
import { store } from '../App';

export default function Conexpo() {
const [data,setData] = useContext(store)
    return(
        <>
         <div className='col-md-9'>
        {
            data.map((e,i)=>{
                return(
                    <>                  
                    <h1>{e.name} - {e.age}</h1>                  
                    <hr/>
                    </>
                )
            })  
        }
        </div>
        </>
    )     
}