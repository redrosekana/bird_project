import React from 'react'
import './about.css'

export default function Abouts() {
    
    const effectClick = (ev) => {
        console.log(ev.target.innerText);
        alert(`คุณ ${ev.target.innerText} เรียบร้อยแล้ว`)
    }
    
    
    return (
    <div style={{marginTop:"100px"}} id="about-div">
            <div className='container' id='about-container'>
                <p className='text-center mt-3' id='about-title'>abouts</p>
                <div className='text-center'>
                    <div className="span-box"></div><i className="fa-solid fa-star"></i><div className="span-box"></div>
                </div>
                
                <div className='row mt-5'>
                    <div className='col-lg-6 mt-3 mt-lg-0 about-row'>
                        เว็บไซต์นี้พัฒนาด้วย react เป็น library ของ javascript ละเป็นแบบ CSR โดยใช้ html css javascript เป็นพื้นฐาน
                        มีการนำลูกเล่นต่างๆ เช่น event scrolling , hover effect เป็นต้น และเว็บไซต์ก็เป็นแบบ responsive design
                    </div>
                    <div className='col-lg-6 mt-3 mt-lg-0 about-row'>
                        เว็บไซต์นี้ได้ทำงานหาข้อมูลต่างๆ มาประกอบการทำเว็บไซต์ ซึ่งไม่ได้มีเจตนาที่จะลอกเลียนแบบแต่อย่างใด เพียงแต่
                        จะนำมาเพื่อประกอบให้เว็บไซต์เท่านั้น หากผิดพลาดประการใด ขออภัยมา ณ ที่นี้ด้วย
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-3 mt-lg-5'>
                        <button className='btn btn-lg btn-outline-light fs-3' onClick={(ev) => effectClick(ev)}>download</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
