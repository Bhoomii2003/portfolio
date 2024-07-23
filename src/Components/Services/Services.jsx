import React, { useContext } from 'react';
import './Services.css';
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../Services/Bhoomi resume.pdf';
import { themeContext } from '../../Context';
import { motion, spring } from 'framer-motion';

const Services = () => {
  const transition = { duration: 1, type: spring };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          ipsum is simply dummy text of printing
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        
        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div 
          whileInView={{ left: '14rem' }}
          initial={{ left: '25rem' }}
          transition={transition}
          className="card-container"
        >
          <Card
            emoji={heartemoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe, Adobe XD'}
          />
        </motion.div>
        <motion.div 
          whileInView={{ left: '-4rem' }}
          initial={{ left: '-15rem' }}
          transition={transition}
          className="card-container"
          style={{ top: "12rem" }}
        >
          <Card
            emoji={glasses}
            heading={'Developer'}
            detail={'HTML, CSS, JavaScript, React, Java, python'}
          />
        </motion.div>
        <motion.div 
          whileInView={{ left: '12rem' }}
          initial={{ left: '0rem' }}
          transition={transition}
          className="card-container"
          style={{ top: '19rem' }}
        >
          <Card
            emoji={humble}
            heading={'UI/UX'}
            detail={'Lorem ipsum dummy text usually appears in sections where we need some placeholder text'}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
}

export default Services;
