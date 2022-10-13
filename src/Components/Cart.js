import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='my-12'>
            <h1 className='my-10 text-4xl'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 '>
                {
                    products.map((product)=>
                    <div 
                    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                    className="card card-compact w-96 bg-base-100 shadow-xl hover:bg-slate-300 my-10 mx-auto">
  <figure><img className='h-56 w-full' src={product.picture} alt="gadget" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <h2 className="card-title">{product.balance}</h2>
    <h2 className="text-xl">{product.company}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim quaerat assumenda aspernatur tenetur fugit temporibus error cupiditate hic ipsa.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;