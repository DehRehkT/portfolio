import SkillSetAvatar from './components/skillset-avatar/skillset.avatar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='about-me-heading'> Hello, I'm Derek </h1>
      <p className='my-title'> 
        I am an Automation Engineer.
      </p>
      <br/>             
      <p className='about-me-text'>
        I work for a Fortune 500 automotive manufacturing company as an Automation Engineer with over 8 years experience. My primary professional (9-5) work
        is focused on Industrial Control Systems (Wonderware System Platform, PLCs, Automated Laser Measuring Systems, Industrial 
        Networking - TCP and Profibus and Server Administration (VMWare ESXi).       
      </p>
      <br/> 
      <p className='about-me-text'>
        I also build embedded systems, desktop and web applications. I can program in C, C++, Visual Basic, Java, JavaScript and Python. 
      </p> 
      <SkillSetAvatar /> 
      <div className="copyright">
        <p className="copyright-text"> © 2022 </p> 
      </div>
          
    </div>
  );
}

export default App;
