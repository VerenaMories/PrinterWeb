import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
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
<div className="container" style={{height:'100vh'}}>
<p style={{color:'#EC1F26', fontSize:'46px', lineHeight:'40px',  textAlign:'center',fontFamily:'a Atmospheric',marginTop:'3%'}}>Our Products </p>

        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}

            <div className="col-md-12 "  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<div className='p-5' style={{backgroundColor:'rgba(109, 107, 107, 0.33)',borderRadius:'74px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div className="row">
      <div className="col"> <Link style={{textDecoration:'none'}} to='/colors'> 
   <div style={{display:'flex', justifyContent:'center'}}>
   <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'195px', height:'234px'}}>
   <div style={{display:'flex', justifyContent:'center'}}> <img src={Group601} alt="" style={{marginTop:'3%'}}/></div>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>office printers <br />
and copiers</p>
 
 </div>
   </div>
   </Link></div>
  <div className="col">  <div style={{display:'flex', justifyContent:'center'}}>

<div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'195px', height:'234px'}}>
<div style={{display:'flex', justifyContent:'center'}}>  <img src={Group575} alt="" style={{marginTop:'10%'}}/></div>
   <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'9%'}}>scanners</p>

</div>
</div></div>
 <div className="col"> <div style={{display:'flex', justifyContent:'center'}}>

<div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'195px', height:'234px'}}>
<div style={{display:'flex', justifyContent:'center'}}> <img src={Group660} alt="" style={{marginTop:'8%'}}/></div> 
   <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'8%'}}>large format
printers </p>

</div>
</div></div>
<div className="col"> <Link style={{textDecoration:'none'}} to='/products/subProduct2'>
 <div style={{display:'flex', justifyContent:'center'}}>

 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'195px', height:'234px'}}>
 <div style={{display:'flex', justifyContent:'center'}}> <img src={Group640} alt="" style={{marginTop:'5%'}}/></div>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%'}}>production <br />
printers</p>
 
 </div>
 </div>
  </Link></div>

    </div> 
    </div> 
    </div> 
              </div>  
                </div>  
</>  )
}
