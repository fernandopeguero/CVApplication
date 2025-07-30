
import './App.css'
import Header  from './Header'
import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import { useState } from 'react'

function App() {

      const [profile, setProfile] = useState({
        name: "",
        phone: "",
        email: "",
        portfolio: "",
        github: "",
        linkedin: ""
    })


  return (
    <>  
      <Header />
      <Profile state={profile} setState={setProfile} />
      <Education />
      <Experience />
      <Projects />
    </>
  )
}

export default App
