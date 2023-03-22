import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image1 from '../../images/Image 1.png';
import Image2 from '../../images/Image 2.png';
import Image3 from '../../images/Image 3.png';
export default function SubCanon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className="container-fluid">
           <div className="row">
           {/* <div className="col-md-12">
                   <div className="imageContainer" >
                       <img src={Logo} alt="" />
                   </div>
               </div>   */}
               
               </div> 
               </div> 
               <div className="imageContainer" style={{paddingTop:'7%'}}>
<img src={Image1} alt="" style={{width:'118%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image2} alt="" style={{width:'118%'}}/>

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image3} alt="" style={{width:'118%'}}/>

               </div>
              
</>   )
}
