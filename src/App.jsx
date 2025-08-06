
import './App.css'
import Header  from './Header'
import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Resume from './Resume'
import { useState } from 'react'

function App() {

    const [profile, setProfile] = useState({
        name: "John Doe",
        profession:"Liberal Arts",
        phone: "555-555-5555",
        email: "Example@gmail.com",
        portfolio: "mysite.com",
        github: "https://github.com/example",
        linkedin: "https://linkedin.com/myprofile"
    })

    const [education, setEducation] = useState({
        school: "",
        degree: "",
        from: "",
        to: ""
    })

    const [experience, setExperience] = useState({
        company:"",
        position: "",
        from:"",
        to: ""
    })
    

  return (
    <>
    <Header />
    <div className="container">
      
      <div >
        
        <Profile state={profile} setState={setProfile} />
        <Education state={education} setState={setEducation} />
        <Experience state={experience} setState={setExperience} />
        <Projects />
      </div>  
      <Resume profile={profile}/>
    </div>
    </>
  )
}

export default App
