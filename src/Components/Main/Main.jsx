import React from 'react'

import Speakerf from '../nik-pages/Speakerf'


import FaqPage from '../../pages/questions/faqSection'
import Landing_page from '../../2025-Components/Landing_page/Landing_page'
import About from '../../2025-Components/About/About'
import Try from '../../2025-Components/Landing_page/Try'
import SideMarquee from '../../2025-Components/Side Marquee/SideMarquee'


// import Mehnat from "../jay mc/Mehnat";

const Main = () => {
    
  return (
    <div>

      <div className=' absolute top-[1031px] left-[-1059px] z-50 -rotate-90'>
        <SideMarquee />
      </div>
      
       <Landing_page/>
       <About />
        <Speakerf/>
        <FaqPage/>
       <Try/>
       <Speakerf/>
       <FaqPage/>
    
        
    
    </div>
  )
}

export default Main