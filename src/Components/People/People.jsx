import css from './People.module.scss';
import { footerVariants, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';
import { comments, sliderSettings } from '../../utils/data';
import Slider from "react-slick";
const People = () => {
  return (
    <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`paddings ${css.Wrapper}`}>
      <a className='anchor' id='people'></a>
      <motion.div variants={footerVariants} className={`yPaddings innerWidth  ${css.container}`}>
        <div className={`flexCenter  ${css.heading}`}>
          <span className='primaryText'>
            People talk about us
          </span>
          <p className='secondaryText' style={{ marginTop: "2rem" }}> I got a job that was in accordance with the salary and the field of work</p>
          <p className='secondaryText' >The process of submiting an application was quite cosy</p>
        </div>

        <div className={`yPaddings  ${css.comments}`}>
          < Slider   {...sliderSettings} className={css.slider}>
            {
              comments.map((comment, i) => {
                return (

                  <div className={`flexCenter  ${css.comment}`}>

                    <img src={comment.img} alt="commet" />

                    <p className='secondaryText' >{comment.comment}</p>

                    <div className={css.line}></div>

                    <div className={css.bio}>
                      <span className='primaryText'>{comment.name}</span>
                      <span>{comment.post}</span>
                    </div>

                  </div>

                )
              })
            }
          </ Slider >
        </div>
      </motion.div>

    </motion.section>

  )
}

export default People