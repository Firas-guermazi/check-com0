import React from 'react';
import './App.css';
import Adress from './Adress';
import Fullname from './component/Fullname';
import Introduction from './component/Introduction';

import Pic from './autunm.jfif';
import Github from './github.jpg';
import Youtube from './youtube.jfif';
import ProfilePhoto from './component/profilePhoto';

const App = () => (
    <div className="container"> 
  <div>
    <img src={Pic}/>
  </div>
       <div>
         <Fullname/>
         <Introduction/>
         <Adress/>
         <ProfilePhoto/>
         
       </div>
       <div className="Social">
         <a href="https://github.com/aymen-brahmi/check">
        <img className="git" src={Github}/>
    
         </a>
         <a href="https://youtube.com">
        <img className='youtube' src={Youtube}/>
    
         </a>
        
       </div>
      </div>
    )
    

export default App;
