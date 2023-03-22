import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
import Image13 from '../../images/Image 13.png';
import Image12 from '../../images/Image 12.png';
export default function SubCanon7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col">
<img src={Image13} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image12} alt="" style={{width:'100%',height:'100%'}}/>

               </div>
               </div> 
               </div> 
         
              
              
</>   )
}
