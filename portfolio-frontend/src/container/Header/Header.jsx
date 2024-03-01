import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper';
import { HiArrowDownTray } from 'react-icons/hi2'
import CV from '../../assets/resume.pdf'
import './Header.scss';
import { TextEffect } from '../../utils/textEffect';
import { FaWhatsapp } from 'react-icons/fa';
import HeaderCard from './HeaderCard';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <h1 className="head-text badge__h1" >Hi, I'm Alex</h1>
          </div>
        </div>
        <div className='effect__div'>
          <TextEffect/>
          <p className='p-text' style={{ marginTop: '20px', color: '#fff' }}>I am not just a developer, I am a catalyst for positive change. By hiring me, you will not only finish projects on time, you will also have created digital products that users love.</p>
          <div className='header__cta'>
            <a href={CV} download className='cv__link'>
              <p className='p-text'>Download CV</p>
              <HiArrowDownTray className='cv__icon' />
            </a>
            <a href='https://wa.me/+2348136938648' target='_blank' className='cv__link'>
              <p className='p-text'>Hire me</p>
              <FaWhatsapp className='cv__icon' />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-img'
      >
        <div className='header__card'>
          <HeaderCard />
        </div>
      </motion.div>


    </div>
  )
}

export default AppWrap(Header, 'home');