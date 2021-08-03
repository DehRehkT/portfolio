import SkillSetAvatar from './components/skillset-avatar/skillset.avatar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='about-me-heading'> Hello, I'm Derek </h1>
      <p className='about-me-text'> 
        I am passionate about technology.
      </p>
      <p className='about-me-text'>
         I am currently employed as an Automation Engineer (Industrial Control Systems). <br/> I spend            
         my free time building Embedded Systems and Web Applications <br/>
        projects.        
      </p>
      <p className='about-me-text'> 
        I am experienced in the areas below & I am open to collaborative and freelance opportunities.
      </p>
      <SkillSetAvatar />      
    </div>
  );
}

export default App;
