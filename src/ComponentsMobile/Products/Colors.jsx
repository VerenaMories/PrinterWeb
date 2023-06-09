import React,{useEffect} from 'react'
import '../Home/Home.css';
import Group601 from '../../images/Group 710.png';
import Group575 from '../../images/Group 707.png';

import { Link } from 'react-router-dom'; 
export default function Colors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className="container" style={{height:'100vh'}}>
<p style={{color:'#EC1F26', fontSize:'17px', lineHeight:'22px', textAlign:'center',fontFamily:'a Atmospheric',marginTop:'3%', marginBottom:'0px'}}>Build now </p>

        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}

            <div className="col-md-12 p-4">
<div className="divContainer" style={{ boxShadow: '1px 2px 2px 2px rgb(0 0 0 / 30%)'}}>
    <div className="divShadow container p-3">
   <Link style={{textDecoration:'none'}} to='/printers'> 
   <div style={{display:'flex', justifyContent:'center', marginTop:'10%'}}>
   <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
    <img src={Group601} alt="" style={{marginTop:'15%', mixBlendMode:'luminosity'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'2%'}}>black and <br />
White </p>
 
 </div>
   </div>
   </Link>
   <Link style={{textDecoration:'none'}} to='/products/subProduct'> 

   <div style={{display:'flex', justifyContent:'center', marginTop:'17%', marginBottom:'12%'}}>

 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
    <img src={Group575} alt="" style={{marginTop:'15%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'2%'}}>colors</p>
 
 </div>
 </div>
 </Link>
    </div> 
    </div> 
    </div> 
              </div>  
                </div>  
</>  )
}
