import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Group601 from '../../images/Group 601.png';
import Group575 from '../../images/Group 575.png';
import Group660 from '../../images/Group 660.png';
import Group640 from '../../images/Group 640.png';
import { Link } from 'react-router-dom';
export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className="container">
        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}

            <div className="col-md-12 p-4">
<div className="divContainer" style={{ boxShadow: '1px 2px 2px 2px rgb(0 0 0 / 30%)'}}>
    <div className="divShadow container p-3">
   <Link style={{textDecoration:'none'}} to='/colors'> 
   <div style={{display:'flex', justifyContent:'center', marginTop:'10%'}}>
   <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
    <img src={Group601} alt="" style={{marginTop:'3%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>office printers <br />
and copiers</p>
 
 </div>
   </div>
   </Link>
   <div style={{display:'flex', justifyContent:'center', marginTop:'15%'}}>

 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
    <img src={Group575} alt="" style={{marginTop:'10%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>scanners</p>
 
 </div>
 </div>
 <div style={{display:'flex', justifyContent:'center', marginTop:'15%'}}>

 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
    <img src={Group660} alt="" style={{marginTop:'8%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>large format
printers </p>
 
 </div>
 </div>
 <Link style={{textDecoration:'none'}} to='/products/subProduct2'>
 <div style={{display:'flex', justifyContent:'center', marginTop:'15%'}}>

 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px', marginBottom:'10%'}}>
    <img src={Group640} alt="" style={{marginTop:'5%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>production <br />
printers</p>
 
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
