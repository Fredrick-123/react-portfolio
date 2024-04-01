import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import {motion} from  'framer-motion';
import { BiMenuAltRight } from "react-icons/bi";
import {getMenuStyles, headerVariants} from '../../utils/motion.js';
import useheaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const headerShadow = useheaderShadow()
  const menuRef = useRef()

  useOutsideAlerter({

    menuRef,
    setMenuOpened

  })

  return (
    <motion.div initial="hidden" whileInView="show" variants={headerVariants} viewport={{once: false , amount: 0.25}} className={`paddings ${css.wrapper}`} style={{boxShadow:headerShadow}}>
     <div className={`flexCenter innerWidth primaryText ${css.container}`}>
       
       <div className={css.name}>
       Xavier
       </div>
       
 
      <ul  style={getMenuStyles(menuOpened)} className={`flexCenter ${css.menu}`}>
        <li><a href="#experties">Services</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#people">Testmonials</a></li>
        <li className={`flexCenter  ${css.phone}`}>
          <p>+001 (415) 345 678</p>
          <BiPhoneCall size={'40px'}/>
        </li>
      </ul>
             {/*Medium and small screens*/}
      <div className={css.menuIcon}>
        <BiMenuAltRight  size={"30px"} onClick={()=> setMenuOpened((prev)=>!prev)}   ref={menuRef}/>
      </div>

     </div>
     </motion.div>
  )
}

export default Header