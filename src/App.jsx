
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
        name: "",
        profession:"",
        phone: "",
        email: "",
        portfolio: "",
        github: "",
        linkedin: ""
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
    <div>
      <div>
        <Header />
        <Profile state={profile} setState={setProfile} />
        <Education state={education} setState={setEducation} />
        <Experience state={experience} setState={setExperience} />
        <Projects />
      </div>  
      <Resume />
    </div>
  )
}

export default App
