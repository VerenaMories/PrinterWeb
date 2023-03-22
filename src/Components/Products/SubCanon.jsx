import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import Image1 from '../../images/Image 1.png';
import Image2 from '../../images/Image 2.png';
import Image3 from '../../images/Image 3.png';
export default function SubCanon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<section className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col"style={{padding:'0'}}>
<img src={Image1} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image2} alt="" style={{width:'100%',height:'100%'}}/>

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image3} alt="" style={{width:'100%',height:'100%'}}/>

               </div>
               
               </div> 
               </section> 
             
              
</>   )
}
