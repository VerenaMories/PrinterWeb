import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
import Image14 from '../../images/Image 14.png';
import Image16 from '../../images/Image 16.png';
import Image15 from '../../images/Image 15.png';

export default function SubCanon8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col" >
<img src={Image14} alt="" style={{width:'100%',height:'100%'}} />

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image16} alt="" style={{width:'100%',height:'100%'}}/>

               </div>
               <div className="col"  style={{padding:'0'}}>
<img src={Image15} alt="" style={{width:'100%',height:'100%'}} />

               </div>
               
               </div> 
               </div> 
        
              
              
</>   )
}
