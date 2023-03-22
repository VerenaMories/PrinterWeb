import React,{useEffect} from 'react'
import dx from '../../images/dx 6.png';

import { Link } from 'react-router-dom';

export default function Printers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="container" style={{height:'100vh'}}>
           <div className="row">
           {/* <div className="col-md-12">
                   <div className="imageContainer" >
                       <img src={Logo} alt="" />
                   </div>
               </div>      */}
               <div className="col-md-12">
           <Link to='/canon' style={{textDecoration:'none'}}>  
           <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'5%'}}>
           <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%' , width:'326px', height:'488px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', marginTop:'5%'}}>
                   <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >    <img src={dx} alt="" style={{marginTop:'20%'}}/>
   </div>
   <div className="imageContainer" style={{padding:'0'}}> 
       {/* <img src={canon} alt="" /> */}
       </div>
   
   
       {/* <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center'}}>imageRUNNER ADVANCE DX C5870i</p> */}
    
    </div>
           </div>
          
    </Link> 

   
                   </div>    
                </div>  
               </div>  
   
    </>
  )
}
