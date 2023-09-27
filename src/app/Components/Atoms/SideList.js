import React, { useState } from 'react';
import Image from 'next/image';

export default function SideList({ icon, text}) {
 



  return (
    <div className="sidebar-list">

      <div className="icon-container" >
        <Image src={icon} alt={text} />
              </div>
      <div className='iconText'> 
      <p>{text}</p>
       </div>
  
    </div>
    
   
  );
}
