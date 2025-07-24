import { useState } from "react";

const Profile = () => {

    const [state, setState] = useState({
        name: "",
        phone: "",
        email: "",
        portfolio: "",
        github: "",
        linkedin: ""
    })

    return(
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={state.name}  onChange={ (e) => { setState({...state, name: e.target.value}) }}/>

             <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" value={state.phone} onChange={ (e) => { setState({...state, phone: e.target.value}) }} />

             <label htmlFor="email">Email</label>
            <input type="text" id="email" value={state.email} onChange={ (e) => { setState({...state, email: e.target.value})}}  />

             <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio"  value={state.portfolio} onChange={(e) => {setState({...state, portfolio: e.target.value})}} />

             <label htmlFor="github">Github</label>
            <input type="text" id="github"   value={state.github} onChange={(e) => {setState({...state, github: e.target.value})}}/>

             <label htmlFor="linkedin">Name</label>
            <input type="text" id="linkedin" value={state.linkedin} onChange={(e) => {setState({...state, linkedin: e.target.value})}} />
        </div>
    )
}

export default Profile;