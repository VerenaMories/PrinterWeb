import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import Image7 from '../../images/Image 7.png';
import Image8 from '../../images/Image 8.png';
import Image9 from '../../images/Image 9.png';
export default function SubCanon3() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col" >
<img src={Image7} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" >
<img src={Image8} alt="" style={{width:'100%'}}/>

               </div>
               <div className="col" >
<img src={Image9} alt="" style={{width:'100%'}}/>

               </div>
               
               </div> 
               </div> 
             
              
</>   )
}
