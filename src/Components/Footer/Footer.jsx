import css from './Footer.module.scss';
import { footerVariants, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
   <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`paddings ${css.Wrapper}`}>
     <motion.div variants={footerVariants}  className={`yPaddings innerWidth flexCenter  ${css.container}`}>

    <div className={css.left}>
        <span className="primaryText">Let's make something<br/>
amazing together.</span>

    <span className="primaryText">
        Start by <a href='mailto:xavierdevelopes@gmail.com'>Saying Hi</a>
    </span>


    </div>


    <div className={css.right}>
        <div className={css.info}>
            <span className='primaryText'>Information</span>
            <p className='secondaryText'> 145 New York , FL 5467 , USA</p>

        </div>

     <div className={ css.menu}>
        <li>Services</li>
        <li>Works</li>
        <li>Notes</li>
        <li>Experience</li>

     </div>

    </div>

     </motion.div>
   </motion.section>
  )
}

export default Footer