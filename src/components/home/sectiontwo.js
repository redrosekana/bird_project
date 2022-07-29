import React from 'react';
import './sectiontwo.css'
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Sectiontwo(){
   const b = useRef([])
   useEffect(()=>{
      window.addEventListener("scroll",scrollEffect)
      
      return () => {
         window.removeEventListener("scroll",scrollEffect)
      }
      },[])
   
   function scrollEffect(event){
      console.log(window.scrollY);
      for (let i=0;i<7;i++){
         if (b.current[i].offsetTop-window.scrollY < 1000){
            b.current[i].classList.add('success')
         }
         //console.log(b.current[0].offsetTop)
      }
   }
   
   return(
        <section id='sectiontwo'>
            <div className='container boxsectiontwo p-3'>
                <div className='row gy-5'>
                    <div className='col-12 birds' ref={el => b.current[0] = el}>
                       <h2 className='text-center'>นกบลูเจย์</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b1.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>บลูเจย์เป็นนกตัวเล็ก ๆ ที่มีรูปลักษณ์และร้องเพลงตามแบบฉบับ นกชนิดนี้มีถิ่นกำเนิดในอเมริกาเหนือ และเป็นที่รู้จักสำหรับสีน้ำเงินที่มีส่วนในสีขาวและหน้าอกสีขาว บลูเจย์มีความสามารถในการพูดที่ดี ดังนั้นนกชนิดนี้จึงสามารถเลียนแบบนกอื่นๆ และมนุษย์ได้</p>
                    </div>
                    
                    <div className='col-12 birds' ref={el => b.current[1] = el}>
                       <h2 className='text-center'>นกพัฟฟิน</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b2.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>นกพัฟฟิน เป็นนกทะเลในแถบเอเชียมีลักษณะเด่น คือ มีจะงอยปากสีสดใสในช่วงฤดูผสมพันธุ์ เป็นนกทะเลผิวน้ำที่หาอาหารด้วยการดำน้ำเป็นหลัก สืบสายพันธุ์ในฝูงขนาดใหญ่บนหน้าผาชายฝั่งทะเลหรือเกาะ โดยการทำรังในรอยแยกในหมู่หินหรือในโพรงดิน ที่ผิวดินเป็นดินร่วน</p>
                    </div>

                    <div className='col-12 birds' ref={el => b.current[2] = el}>
                       <h2 className='text-center'>นกสการ์เล็ตมาคอร์</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b3.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>ขนบนตัวส่วนใหญ่มีสีแดงจัด ขนใต้หางและขนปลายปีกมีสีฟ้า ส่วนขนแถวถัดเข้ามาจากปลายปีกจะมีสีเหลืองเป็นแถบ แก้มทั้ง 2 ข้างเป็นผิวหนังสีขาวครีมไม่มีลาย ที่เด่นชัดเห็นเพียงเป็นเส้นจาง ๆ ปากบนมีสีกระดูก (สี horn) ปากล่างมีสีเทาดำ วงตาสีเหลือง พบในเม็กซิโก โคลัมเบีย เปรู โบลิเวีย และบราซิล</p>
                    </div>

                    <div className='col-12 birds' ref={el => b.current[3] = el}>
                       <h2 className='text-center'>นกปีกเพลิงโบฮีเมียน</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b4.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>สวยสง่า มาดผู้ดีสุดๆ ก็เจ้าตัวนี้แหละ “นกปีกเพลิงโบฮีเมียน” ด้วยสีน้ำตาลที่ไล่เฉดสีไปจนกลายเป็นสีเทาบนลำตัว ดูแล้วเหมือนผ้ากำมะหยี่ กับปีกที่มีขอบสีขาว แต้มด้วยขนสีแดงและเหลืองดูแล้วคล้ายกับเปลวเพลิง ไหนจะหงอนบริเวณหัวที่โดดเด่นอีก สวยเบอร์สุดเลยค่ะคุณผู้ชม เราจะพบนกชนิดนี้ได้ในทวีปอเมริกาเหนือและเเถบยูเรเซีย ไปจนถึงในอลาสก้า อาหารโปรดของพวกมันคือแมลงและผลเบอร์รี่ค่ะ</p>
                    </div>

                    <div className='col-12 birds' ref={el => b.current[4] = el}>
                       <h2 className='text-center'>นกไก่ฟ้าสีทอง</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b5.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>ไก่ฟ้าสีทอง ตัวผู้จะมีหลายสี (5 สี) แต่ถ้าเป็นสีทองส่วนของอกจะมีสีแดง ส่วนหลังมีสีเหลืองและปีกมีสีน้ำเงิน นัยน์ตาจะเป็นวงแหวนนสีน้ำเงิน สำหรับตัวเมียจะมีสีน้ำตาลพื้นธรรมดา นัยน์ตาไม่มีวงแหวน เมื่อเจริญเติบโตเต็มที่จะมีน้ำหนักตัวประมาณ 500-700 กรัม มีรูปร่างป้อม และไม่มีหงอน</p>
                    </div>

                    <div className='col-12 birds' ref={el => b.current[5] = el}>
                       <h2 className='text-center'>นกฟลามิงโก</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b6.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>นกฟลามิงโก ได้ชื่อว่าเป็นนกที่ไม่มีประสาทรับกลิ่น และเป็นนกที่ส่งเสียงดังตลอดเวลา ซึ่งลูกนกแม้แต่อยู่ในไข่ก็ยังส่งเสียงร้องแล้ว ซึ่งพ่อแม่นกจะจดจำลูกของตัวเองได้จากเสียงร้องอันนี้ นกฟลามิงโกยังเป็นนกที่ได้ชื่อว่าเป็นนกที่มีขนสีชมพู จนได้รับชื่อว่า "นกฟลามิงโกสีชมพู" ซึ่งขนของนกฟลามิงโกนั้นจะแตกต่างกันออกไปตามแต่ละชนิดตั้งแต่สีชมพูซีดจนถึงสีแดงเลือดหมูหรือแดงเข้ม</p>
                    </div>

                    <div className='col-12 birds' ref={el => b.current[6] = el}>
                       <h2 className='text-center'>นกยูง</h2>
                       <img className='item img-fluid d-block mx-auto mt-3'  src={'./picture/b7.jpg'} alt="nothing"/>
                       <p className='mt-4' style={{fontSize:'24px'}}>นกยูง เป็นสัตว์ปีกจำพวกไก่ฟ้าขนาดใหญ่ที่สุดในวงศ์เดียวกันนี้ มีจุดเด่นคือรักเดียวใจเดียวมีคู่แค่ตัวไปตลอดชีวิต หากตัวใดตัวนึงตาย อีกก็จัม่องตามไปด้วย เพศผู้มีขนหางยาวที่มีสีสันสวยงาม ที่เมื่อแผ่ขยายออกเพื่ออวดเพศเมียจะมีความสวยงามเป็นอย่างยิ่ง ที่เรียกว่า "รำแพน"</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )    
}