import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
import Image10 from '../../images/Image 10.png';
import Image11 from '../../images/Image 11.png';
export default function SubCanon6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' style={{height:'100vh'}}>
           <div className="row">
           <div className="col" >
<img src={Image10} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image11} alt="" style={{width:'100%'}}/>

               </div>
               </div> 
               </div> 
           
              
              
</>   )
}
