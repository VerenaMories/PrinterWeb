import React, { useEffect } from "react";
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Group548 from '../../images/Group 548.png';
import Group533 from '../../images/Group 533.png';

export default function About() {
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
            </div> */}
            <div className="col-md-12">
                <div className="container">
                    <div className="row" style={{justifyContent:'center'}}>
                    <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px',    boxShadow: '1px 2px 2px 2px rgb(0 0 0 / 30%)'}}>
                <h1 style={{color:'#707070', fontSize:'30px',lineHeight:'40px', textAlign:'center', fontFamily:'Segoe UI',marginBottom:'0'}}>Our Mission</h1>
                <div className="container">
                <p style={{color:'#707070', fontSize:'18px',lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular'}}>We are an independent
professional services organization <br />
dedicated to providing superior <br />
managed IT solutions, office <br />
technologies and services. <br />
The foundation of our success <br />
is based on exceeding the <br />
expectations of our clients, 
<p  style={{color:'#707070', fontSize:'18px',lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular', width:'105%'}}>employees, partners and community.</p>

</p>

                </div>
              
<div className="imageContainer" style={{paddingBottom:'8%', paddingTop:'3%'}}>
<img  src={Group548} alt="" />

</div>
    <h1 style={{color:'#707070', fontSize:'30px',lineHeight:'40px', textAlign:'center', fontFamily:'Segoe UI', marginBottom:'6%'}}>Our vision and values </h1>
    <p style={{color:'#707070', fontSize:'18px',lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular',marginBottom:'0'}}>Positive Attitude <br />
Integrity <br />
Innovation <br />
Customer-First Focus <br />
Professionalism <br />
Drive for Results </p>
<div className="imageContainer" style={{paddingBottom:'8%', paddingTop:'8%'}}>
<img  src={Group533} alt="" />

</div>

 </div>
                    </div>
                </div>
        
            </div>
     <div className="col-md-12">
        <p style={{color:'#EC1F26', fontSize:'21px', lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', marginTop:'6%'}}>About Us</p>
        <p style={{color:'#707070', fontSize:'18px', lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular'}}>We deliver a full
         suite of multifunctional copiers and printers, managed print services, IT solutions, document workflow consulting and software,
          phone and voice technology and on-site managed services. Our team of the best and brightest professionals provides office solutions, 
          along with nationally recognized service and support, to local and national businesses.</p>
          <div className="container">
          <p style={{color:'#707070', fontSize:'18px', lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular'}}>We also offer a tuition reimbursement program to help our employees <br /> continue to grow throughout their career. By providing flexible time off and paid holidays, we help employees find a healthy balance between work and family. Loffler is committed to helping you build a rewarding career that’s full of exciting opportunities.</p>

          </div>
       
          <p style={{color:'#707070', fontSize:'18px', lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular'}}>We offer a great working environment, competitive compensation, and a full benefits package. If you want to work for a company that appreciates you and <br /> honours our core values, then we want to meet you!</p>

          
          <p style={{color:'#707070', fontSize:'18px', lineHeight:'24px', textAlign:'center', fontFamily:'Segoe UI Regular'}}>Our talented team led by experienced management is what sets apart. we are extremely proud of our team, and we are confident you’ll experience the highest <br /> level of integrity, professionalism, and success when you partner with us for your office technology and managed services needs.</p>
     </div>
        </div>
      </div>
    </>
  );
}
