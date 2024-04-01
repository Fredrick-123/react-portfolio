import css from './Expertise.module.scss'
import {motion} from 'framer-motion'
import CountUp from "react-countup"
import {fadeIn, staggerContainer, textVariant } from '../../utils/motion'
import {projectExperience, WhatDoIHelp} from '../../utils/data'
const Expertise = () => {
  return (
    <motion.section  variants={staggerContainer}  initial="hidden" whileInView="show" viewport={{once: false , amount: 0.25 }} className={css.wrapper}>
       <a className='anchor' id='experties'></a>
     <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
               
             <div className={css.leftSide}>

                {
                       projectExperience.map((experience , i) =>{
                                return(
                                    <motion.div variants={fadeIn('right' , 'tween' ,(i+1)*0.7 , 1)} className={css.exp} key={i}>
                                        
                                           <div className="flexCenter"  style={{background:experience.bg}}>
                                          <experience.icon size={25} color="white"/>
                                           </div> 

                                           <div>

                                            <span className='primaryText'>
                                                {experience.name} 
                                            </span>

                                            <span className='secondaryText'>
                                                {experience.projects} projects
                                            </span>
                                               

                                           </div>
                                        
                                    </motion.div>
                                )
                          
                       })
                }

             </div>



             <motion.div variants={textVariant(0.6)} className={css.rightSide} >

                      <span className='primaryText'>What do I help?</span>

                      {
                        
                        WhatDoIHelp.map((paragraph , i) =>{
                            return <span className='secondaryText' key={i}>{paragraph}</span>
                        })


                      }

 
                      <div className={`flexCenter ${css.stats}`}> 
 
                           <div className={`flexCenter  ${css.stat}`}>
                            <span className='primaryText'>
                            <CountUp start={240} end={285} duration={20} />
                <span>+</span>
                              </span>
                            <span className='secondaryText' >Projects Completed</span>
                           </div>

                           <div className={`flexCenter  ${css.stat}`}>
                           <span className='primaryText'>
                           <CountUp start={150} end={190} duration={20} />
                <span>+</span>
                           </span>
                            <span className='secondaryText' >Happy Clients</span>
                           </div>


                           

                      </div>

             </motion.div>

     </div>

    </motion.section>
  )
}

export default Expertise