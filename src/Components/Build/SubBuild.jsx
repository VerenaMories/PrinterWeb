import React,{useEffect} from 'react'
import Group601 from '../../images/Group 575.png';
import Group575 from '../../images/Group 601.png';
import { Link } from 'react-router-dom'; 

export default function SubBuild() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className="container" style={{height:'100vh'}}>
<p style={{color:'#EC1F26', fontSize:'46px', lineHeight:'40px', textAlign:'center',fontFamily:'a Atmospheric',marginTop:'3%'}}>Build now </p>

        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}

            <div className="col-md-12 " style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<div style={{backgroundColor:'rgba(109, 107, 107, 0.33)',borderRadius:'74px',width:'821px', height:'355px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', display:'flex', justifyContent:'center', alignItems:'center'}}>
  <div className="row">
    <div className="col">   <Link style={{textDecoration:'none'}} to='/paper'> 
   <div style={{display:'flex', justifyContent:'center'}}>
   <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
   <div style={{display:'flex', justifyContent:'center'}}>    <img src={Group601} alt="" style={{marginTop:'15%', mixBlendMode:'luminosity'}}/>
</div>

    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'2%'}}>copiers </p>
 
 </div>
   </div>
   </Link></div>
    <div className="col"><Link style={{textDecoration:'none'}} to='/printers'> 

<div style={{display:'flex', justifyContent:'center'}}>

<div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', width:'267px', height:'220px'}}>
<div style={{display:'flex', justifyContent:'center'}}> <img src={Group575} alt="" style={{marginTop:'15%'}}/>
</div>
 <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'2%'}}>printers</p>

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
