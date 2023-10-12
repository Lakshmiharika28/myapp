import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Products() {

    const [products, setProducts] = useState([{}])
    const [images, setImages] = useState(Array)
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    },[])
    console.log(products)
  return (
        <>
        {
            products.map((e,i)=>{
                return(
                    <>
                    <div class="col-md-3 float-start" style={{marginBottom:"100px"}}>
                        <div className='container-fluid'>
                            <div style={{border:"1px solid #ccc",padding:"10px",height:"500px"}}>
                            <h5 style={{height:"50px"}}>{e.brand}</h5><hr/>
                            <p style={{height:"40px"}}>{e.title}</p>
                            <div class="card" style={{width:"100%",height:"150px"}}>
                                {
                                    // e.images.map((img,index)=>{
                                    //     return(
                                    //         <>
                                    //         </>
                                    //     )
                                    // })
                                }
                                <img class="card-img-top" src={e.thumbnail} alt="Card image" style={{height:"150px"}} />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
  )
}