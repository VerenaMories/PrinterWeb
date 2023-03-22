import React, {useEffect} from 'react'
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import facebook from '../../images/Group 2.png';
import instagram from '../../images/Group 6.png';
import Linked from '../../images/Group 374.png';
import { Link } from 'react-router-dom';
import twitter from '../../images/Group 8.png';
import Group641 from '../../images/Group 641.png';
import Group473 from '../../images/Group 473.png';
import Group375 from '../../images/Group 375.png';
import Group454 from '../../images/Group 454.png';
import dot from '../../images/Group 549.png';
import '../../App.css'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>

<div className="mainContainer">
    <div className="container">
        <div className="row">
            {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div> */}
            <div className="col-md-12">
                <div className="inputContainer" style={{paddingTop:'5px'}} >
<input type="text" className='Inp' placeholder='Search' />
                </div>
            </div>
            <div className="col-md-12 " style={{padding:'1.5rem'}}>
                <div className=" container" style={{display:'flex', justifyContent:'center'}} >
<div className="row iconsContainer">
    <div className="col" style={{paddingRight:'5px'}}>
        {/* <div className="iconWrapper"> */}
        <img src={facebook} alt="" />  

        {/* </div> */}
    </div>
    <div className="col"  style={{paddingRight:'5px'}}>
       
       <img src={instagram} alt="" />  
         </div>
    <div className="col"  style={{paddingRight:'5px'}}>
    <img src={twitter} alt="" />  

        {/* <i class="fa-brands fa-instagram iconWrapperInsta"></i> */}
    </div>
  
    <div className="col"  style={{paddingRight:'5px'}}>
    <img src={Linked} alt="" />  

    </div>
</div>
                </div>
            </div>
            <div className="col-md-12" style={{color:'#EC1F26', marginTop:'1%', marginBottom:'2%'}}>
                <p className='text-center' style={{fontFamily:'a Atmospheric', marginBottom:'0px'}}>welcome to</p>
                <h3 style={{fontSize:'22px',lineHeight:'30px' , fontFamily:'a Atmospheric', textAlign:'center'}}>advanced image runners</h3>
            </div>
            <div className="col-md-12 lastUpdate" style={{display:'flex',justifyContent:'center'}} >
<div className="divContainer" >
    <div className="divShadow container p-3" style={{width:'326px', height:'1458px'}}>
    <p style={{color:'#EC1F26',fontSize:'35px',fontFamily:'a Atmospheric',marginBottom:'0'}}>We</p>
    <h3 style={{fontFamily:'Segoe UI', fontSize:'29px', textAlign:'center', color:'#707070', lineHeight:'37px',fontWeight:'700px'}}>Serve Copiers 
 And Printers 
for your Industry, and 
we provide you with 
all kinds of services 
concerning your
 printers. </h3>


 <div className=' WhatWeDo' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'6%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',marginBottom:'17%', marginLeft:'5%',marginTop:"12%"}}>
    <img src={Group641} alt="" style={{width:'50%'}}/>
    <p style={{color:'#EC1F26', fontSize:'21px',lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'4%',marginBottom:'1px'}}>what we do</p>
 <div className="row" style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >
 <div className='col-md-12' style={{width:'100%'}}> 
<p style={{color:'#6F6F6F', fontSize:'17px',lineHeight:'20px', textAlign:'center',fontFamily:'a Atmospheric'}}>view our 
services  </p>
    </div>
    </div> 
     
 </div>
 
 <Link to='/products' style={{textDecoration:'none'}}> 
 <div className=' WhatWeDo' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'6%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',marginBottom:'17%', marginLeft:'5%'}}>
    <img src={Group473} alt="" style={{width:'50%'}}/>
    <p style={{color:'#EC1F26', fontSize:'21px',lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'4%',marginBottom:'1px'}}>our products</p>
 <div className="row" style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >
 <div className='col-md-12' style={{width:'100%'}}> 
<p style={{color:'#6F6F6F', fontSize:'17px',lineHeight:'20px', textAlign:'center',fontFamily:'a Atmospheric'}}>view our 
products  </p>
    </div>
    </div> 
     
 </div></Link>
 <Link to='/products' style={{textDecoration:'none'}}> 
 <div className=' WhatWeDo' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',marginBottom:'17%', marginLeft:'5%'}}> 
    <img src={Group375} alt="" style={{width:'50%'}}/>
    <p style={{color:'#EC1F26', fontSize:'24px',lineHeight:'31px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%',marginBottom:'1px'}}>Build now</p>
    <p style={{color:'#6F6F6F', fontSize:'16px',lineHeight:'20px', textAlign:'center',fontFamily:'a Atmospheric'}}>get your own 

    quotation  </p>
 </div>
 </Link>
 
<Link to='/contact' style={{textDecoration:'none'}}> 
<div className=' WhatWeDo' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'6%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',marginBottom:'17%', marginLeft:'5%',marginTop:"12%"}}>
    <img src={Group454} alt="" style={{width:'50%'}}/>
    <p style={{color:'#EC1F26', fontSize:'24px',lineHeight:'31px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'5%',marginBottom:'1px'}}>contact us</p>
 <div className="row" style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >
 <div className='col-md-12' style={{width:'98%'}}> 
 <p style={{color:'#6F6F6F', fontSize:'15px',lineHeight:'20px', textAlign:'center',fontFamily:'a Atmospheric'}}>contact us for 
more info. </p>
    </div>
    </div> 
     
 </div>
 </Link> 
    </div>
   
</div>
            </div>
            <div className="col-md-12 " style={{paddingTop:'12%'}}>
                <div className="container">
                    <div className="row" style={{display:'flex', justifyContent:'center'}}>
                    <div className="divContainer2" >
    <div className="divShadow2 container " style={{padding:'0'}}>
        <div className="row" style={{display:'flex', justifyContent:'center'}}>
            <div className="col-md-8">
            <h4 style={{fontFamily:'Segoe UI', fontSize:'25px', textAlign:'center', color:'#707070', lineHeight:'33px',marginTop:'12%',marginBottom:'0px'}}>Why Do Clients Choose</h4>

            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <p style={{color:'#EC1F26',fontFamily:'Segoe UI', fontSize:'45px', textAlign:'center',fontFamily:'a Atmospheric', width:'110px', height:'51px'}}>AIR</p>

        </div>
 <div className="divo" style={{display:'-webkit-box'}}>
 <img src={dot} alt="" style={{marginRight:'21px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'27px', textAlign:'left', marginBottom:'2px'}}>Top rated services and support.</p>

 </div>
 <div className="divo" style={{display:'-webkit-box'}}>
 <img src={dot} alt="" style={{marginRight:'21px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'27px', textAlign:'left', marginBottom:'2px'}}>Solutions that fits.</p>

 </div>
 <div className="divo" style={{display:'-webkit-box'}}>
 <img src={dot} alt="" style={{marginRight:'21px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'27px', textAlign:'left', marginBottom:'2px'}}>Flexible solutions billing and 
financing.  </p>

 </div>
 <h4 style={{fontFamily:'Segoe UI', fontSize:'25px', textAlign:'center', color:'#707070', marginTop:'9%', marginBottom:'9%'}}>What makes us unique</h4>
 <div className="divo" style={{display:'-webkit-box',marginBottom:'6%' }}>
 <img src={dot} alt="" style={{marginRight:'5px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'20px', textAlign:'left', marginBottom:'2px'}}>Online customer service portal 
For placing service requests
Monitoring current request
Checking service history and 
fleet management.
 </p>

 </div>
 <div className="divo" style={{display:'-webkit-box',marginBottom:'6%' }}>
 <img src={dot} alt="" style={{marginRight:'5px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'20px', textAlign:'left', marginBottom:'2px'}}>Local help disk for quick easy to 
solve problems.

 </p>

 </div>
 <div className="divo" style={{display:'-webkit-box',marginBottom:'4%' }}>
 <img src={dot} alt="" style={{marginRight:'5px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'20px', textAlign:'left', marginBottom:'2px'}}>On-going training at no charge


 </p>

 </div>
 <div className="divo" style={{display:'-webkit-box',marginBottom:'6%' }}>
 <img src={dot} alt="" style={{marginRight:'5px'}}/> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'20px', textAlign:'left', marginBottom:'2px'}}>No undisclosed fuel or delivery 
costs.



 </p>

 </div>
 <div className="divo" style={{display:'-webkit-box',marginBottom:'6%' }}>
 <img src={dot} alt="" style={{marginRight:'5px'}}/> 
 <div className="container-fluid" style={{paddingLeft:'0px'}}> <p style={{color:'#707070',fontFamily:'A Suls', fontSize:'20px', lineHeight:'20px', textAlign:'left', marginBottom:'2px'}}>Real-time phone conversations: 
we understand the frustration of 
automated service systems so we
are dedicated to providing live 
personnel to answer and resolve
any questions.
 </p></div>


 </div>
    </div>
   
</div>
                    </div>
           
                </div>

            </div>
        </div>
    </div>
</div>
</>  )
}
