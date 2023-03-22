import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
import Image20 from '../../images/Image 20.png';
import Image19 from '../../images/Image 19.png';
import Image18 from '../../images/Image 18.png';
import Image17 from '../../images/Image 17.png';

export default function SubProduct5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className='container p-5' >
           <div className="row">
           <div className="col" style={{padding:'0'}} >
<img src={Image20} alt="" style={{width:'100%'}} />

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image19} alt="" style={{width:'100%'}}/>

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image18} alt="" style={{width:'100%'}}/>

               </div>
               <div className="col" style={{padding:'0'}}>
<img src={Image17} alt="" style={{width:'100%'}}/>

               </div>
               </div> 
               </div> 
         
</>  )
}
