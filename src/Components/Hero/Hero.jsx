import React from 'react'
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';
import css from '../Hero/Hero.module.scss'
import { fadeIn, slideIn ,staggerContainer } from '../../utils/motion'

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div variants={staggerContainer}  initial="hidden" whileInView="show" viewport={{once: false , amount: 0.25 }} className={`innerWidth ${css.container}`}>

                <div className={css.upperElements}> <motion.span variants={fadeIn("right" , "tween" , 0.2 , 1)} className='primaryText'>
                     Hey There,<br/>
                     <Typewriter
  options={{
    strings: [' I am Xavier', 'A visual designer'],
    autoStart: true,
    loop: true,
  }}
/>
                    </motion.span> 
                    <motion.span variants={fadeIn("left" , "tween" , 0.4 , 1)}  className='secondaryText'>I design beautiful simple<br />
                        things, And I love what i do</motion.span> </div>

                <div className={css.lowerElements}>

                <motion.div  variants={fadeIn("left" , "tween" , 0.3 , 1)} className={css.person}>
                           < motion.img src="./person.png" alt="person" variants={slideIn("up",'tween' ,0.5, 1.3 ,)} />
                          </motion.div>
                    
                    <div className={css.experience}>
                        <div className='primaryText'>10</div>
                        <div className='secondaryText'>
                            <div >Years</div>
                            <div>Experience</div>
                        </div>
                    </div>
 
                       

                    <div className={css.certificate}>
                        <img src="./certificate.png" alt="certificate" />
                         <span className='secondaryText'>CERTIFIED PROFESSIONAL</span>
                         <span className='secondaryText'>UI/UX DESIGNER</span>
                    </div>

                </div>

            </motion.div>
        </section>
    )
}

export default Hero