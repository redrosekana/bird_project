import React from 'react';
import { useEffect } from 'react';
import './sectionone.css'

export default function Sectionone(props) {
    useEffect(()=>{
        document.getElementById('natural').classList.add('ready')
    },[])
    
    return (
        <section id="sectionone">
            <div className='container p-3' id="boxsectionone">
                <div className='row'>
                    <div className='col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 d-flex flex-column justify-content-center'>
                        <h1>ณ ธรรมชาติที่แสนงดงามแห่งใดในโลก</h1>
                        <p className='fs-5'>นกในโลกนี้มีหลายชนิด แต่ก็มีชนิดที่สวยงามเปรียบดั่งอัญมณีของโลก</p>
                        <button id='btn-bird'>{props.btn}</button>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2'><img src={"./picture/m.jpg"} alt="nothing" className="img-fluid" id='natural'/></div>
                </div>
            </div>
        </section>
    )
}

