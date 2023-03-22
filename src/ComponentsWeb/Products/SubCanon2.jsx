import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import Image4 from '../../images/Image 4.png';
import Image5 from '../../images/Image 5.png';
import Image6 from '../../images/Image 6.png';
export default function SubCanon2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col" >
<img src={Image4} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" >
<img src={Image5} alt="" style={{width:'100%'}}/>

               </div>
               <div className="col" >
<img src={Image6} alt="" style={{width:'100%'}}/>

               </div>
               
               </div> 
               </div> 
           
              
</>   )
}
