import React from 'react';
import './components/App.css';
const app = () => {

  //local data for rendering purpose

  let arr=[
    {one:'FREE',
    two:'$0/month',
    three:'Single User',
    four:'50GB Storage',
    five:'Unlimited Public Projects',
    six:'Community Access',
    seven:'Dedicated Phone Support',
    eight:'Free Subdomain',
    nine:'Monthly Status Report'

 },{one:'PLUS',
    two:'$9/month',
    three:'5 Users',
    four:'50GB Storage',
    five:'Unlimited Public Projects',
    six:'Community Access',
    seven:'Dedicated Phone Support',
    eight:'Free Subdomain',
    nine:'Monthly Status Report'

 },{one:'PRO',
    two:'$49/month',
    three:'Unlimited Users',
    four:'50GB Storage',
    five:'Unlimited Public Projects',
    six:'Community Access',
    seven:'Dedicated Phone Support',
    eight:'Free Subdomain',
    nine:'Monthly Status Report'

 }
]


    return (
        <div className='row d-flex justify-content-around  mt-4 py-4'>
      {arr.map((val,index)=>{
return(
  <div className='col-lg-3 col-md-6'>
<div className='card mx-auto mb-2' style={{width:'18rem',height:"24rem"}} >
<div className='d-flex flex-column '>
        <h6 class="card-title text-center">{val.one}</h6>
        <h1 class=" text-center border-bottom p-4">{val.two}</h1>
        <h6><i class="bi bi-check-lg py-4 m-4"></i> {val.three} </h6>
         <h6><i class="bi bi-check-lg py-4 m-4"></i> {val.four}</h6>
          <h6><i class="bi bi-check-lg py-4  m-4"></i> {val.five}</h6>
        <h6><i class="bi bi-check-lg py-4 m-4"></i> {val.six}</h6>
        <h6><i class="bi bi-check-lg py-4 m-4"></i> {val.seven}</h6>
        <h6><i class="bi bi-check-lg py-4  m-4"></i> {val.eight}</h6>
        <h6><i class="bi bi-check-lg py-4 m-4"></i> {val.nine}</h6>
       
       <button  class="btn bg-primary text-white border border-none rounded-pill  ">Button</button> 
       </div>
      </div>
      </div>
)
 })}

      </div>

    );
    }
export default app;