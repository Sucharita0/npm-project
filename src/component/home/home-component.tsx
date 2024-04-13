import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { FakestoreContract } from "../../conract/fakestore-contract";
import { addToCart } from "../../slicer/cart-slicer";

export function HomeComponent(){

    const dispatch = useDispatch();

    const[products,setProducts] = useState<FakestoreContract[]>([]);

    const handleAddToCart = (product:any) =>{
        dispatch(addToCart(product));
    }

        useEffect(()=>{
            fetch('http://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                setProducts(data);
            })
        },[])

    return(
        <div>
            <h2>Products catalog</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {
                 products.map(product=>
                    <div style={{width:'200px',margin:'10px',padding:'10px'}}>
                        <img src={product.image} width="200" height="150"/>
                        <p>{product.title}</p>
                        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
                    </div>
                 )   
                }
            </div>
        </div>
    )
}