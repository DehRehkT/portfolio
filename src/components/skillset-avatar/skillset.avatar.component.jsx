import React from 'react';
import { Col } from "react-bootstrap";

import './skillset.avatar.styles.css';

import webDev from './skillset-avatar-imgs/web-development.png';
import industrialAutomation from './skillset-avatar-imgs/industrial-automation.jpg';
import embeddedSystems from './skillset-avatar-imgs/embedded-systems.png';
import cybersecurity from './skillset-avatar-imgs/cybersecurity.jpg';

function SkillSetAvatar() {
  return(
   <div className='skill-set-div'>
      <Col sm={12} md={6} lg={3} className='skill-set-col'>
        <img 
          className="skillset-avatar-img" 
          src={webDev} 
          alt="skillset avatar_img" 
        />
        <p className='skill-set-desc'> Web Development </p>
      </Col>
      <Col sm={12} md={6} lg={3} className='skill-set-col'>
        <img 
          className="skillset-avatar-img" 
          src={industrialAutomation} 
          alt="skillset avatar_img" 
        />
        <p className='skill-set-desc'> Industrial Automation </p>
      </Col>
      <Col sm={12} md={6} lg={3} className='skill-set-col'>
        <img 
          className="skillset-avatar-img" 
          src={embeddedSystems} 
          alt="skillset avatar_img" 
        />
        <p className='skill-set-desc'> Embedded Systems </p>
      </Col>
      <Col sm={12} md={6} lg={3} className='skill-set-col'>
        <img 
          className="skillset-avatar-img" 
          src={cybersecurity} 
          alt="skillset avatar_img" 
        />
        <p className='skill-set-desc'> Cybersecurity </p>
      </Col>     
    </div>
  );
}

export default SkillSetAvatar;