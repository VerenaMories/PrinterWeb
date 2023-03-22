import React from 'react'

export default function Footer() {
    const today = new Date();

  return (
 <>
 
 <div class="footer-copyright" style={{backgroundColor:'transparent'}}>
<div className="container" style={{ marginTop: "25px" }}>
          <div
            className="row p-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <div className="col-md-6 " style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
              <div className="row" style={{ display: "block" }}> */}
                {/* <a
                  href="https://neoneg.com/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  www.neoneg.com
                </a> */}
              
              {/* </div>
            </div> */}
            <div className="col-md-12" style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
              <p  style={{margin:'0',    fontSize: '15px',lineHeight: '1.8', fontWeight:'400', fontFamily:'Segoe UI',color:'#000'}}>
                Copyright &copy; {today.getFullYear()} by{" "}
                <span>
                  {" "}
                  <a
                    href="https://neoneg.com/"
                    target="_blank"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    NEON
                  </a>{" "}
                </span>
                <a
                  href=""
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    window.open(`https://wa.me/+201113588988`);
                  }}
                >
                  <i
                    className="fa-brands fa-whatsapp fs-5"
                    style={{ color: "#000", marginRight: "10px" }}
                  ></i>
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
</div>
 </>
  )
}
