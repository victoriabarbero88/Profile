import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render (){
    return(
      <div className='App'>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portofolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    )
  }
}
export default App;