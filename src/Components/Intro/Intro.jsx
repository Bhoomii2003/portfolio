import React, { useContext } from 'react'
import './Intro.css'
import Github from'../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import yellow from '../../img/yellow.png';
import Vector1 from '../../img/Vector1.png';
import Bhoomi from '../../img/Bhoomi.png.png';
import thumpup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'
const Intro = () => {
  const transition= {duration:2, type:'spring'}
  const theme= useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode? 'white':" "}}>Hy! I Am </span>
          <span>Bhoomi Agarwal </span>
          <span>I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Bhoomii2003">
          <img src={Github} alt=""/>
          </a>
          <a href='https://www.linkedin.com/in/bhoomi-agarwal-067697228/'>
          <img src={LinkedIn} alt=""/>
          </a>
          
          <img src={Instagram} alt=""/>
        </div>
      </div>
      <div className="i-right">
      <img src={Vector1} alt="" />
        <img src={yellow} alt=""/>
        <img src={Bhoomi} alt=""/>
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt=" "/>

        <motion.div 
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}

        style={{top:'-4%',left:'68%'}}
        className='floating-div'
        >
          <FloatingDiv image={crown} txt1='Web'txt2='Developer'/>
        </motion.div>

        <motion.div 
        initial={{left:'9rem', top:'18rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}

        
        
        style={{top:'18rem' ,left:"0rem"}}
        className='floating-div'>
         <FloatingDiv image={thumpup} txt1='Best design' txt2="Award"/>
        </motion.div>
        <div className='blur'style={{background:"rgb(236 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF',  top: "17rem",width:'21rem',height:'11rem' , left: '-9rem'}}></div>

        
      </div>

    </div>
  )
}

export default Intro
