import SkillSetAvatar from './components/skillset-avatar/skillset.avatar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='about-me-heading'> Hello, I'm Derek </h1>
      <p className='about-me-text'> 
        I am a Software & Electronics Engineer.
      </p>
      <br/>             
      <p className='about-me-text'>
        I work on Industrial Control Systems (PLC and SCADA), Embedded Systems, Web and Desktop Applications.<br/>
      </p>   

      <SkillSetAvatar />      
    </div>
  );
}

export default App;
