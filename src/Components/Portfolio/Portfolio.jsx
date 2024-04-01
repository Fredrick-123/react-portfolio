
import { fadeIn , staggerContainer} from '../../utils/motion';
import css from './Portfolio.module.scss';
import {motion} from 'framer-motion';
const Portfolio = () => {
  return (
    <motion.section variants={staggerContainer}  initial="hidden" whileInView="show" viewport={{once: false , amount: 0.25 }}    className={`paddings ${css.Wrapper}`}>
      <a className='anchor' id='portfolio'></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
         <div className={`flexCenter ${css.heading}`}>
            <div>
            <span className='primaryText '>My Latest Works</span>
            <p className='secondaryText' style={{ marginTop: "10px"}}>Perfect solution for digital experience</p>
            </div>
            <span className='primaryText '>
                <button>Explore More Works</button>
             
                </span> 

            
         </div>

         
           

                {/*images*/}

             <div className={`flexCenter ${css.showCase}`} >
                    <motion.img  variants={fadeIn("up","tween",0.4, 0.6)} src="./showCase1.png" alt="project" />
                    <motion.img  variants={fadeIn("up","tween",0.8, 0.8)} src="./showCase2.png" alt="project"  />
                    <motion.img  variants={fadeIn("up","tween",1.2, 1)} src="./showCase3.png" alt="project"  />

                </div>

      </div>
     

    </motion.section>
  )
}

export default Portfolio