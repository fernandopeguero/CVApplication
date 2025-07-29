
const Profile = ({state, setState}) => {


    return(
        <div>
            <div>
                 <h2>Profile</h2>
                 <i>^</i>
            </div>
           
            <label htmlFor="name">Name</label>
            <input type="text" id="name" autoComplete="name" value={state.name}  onChange={ (e) => { setState({...state, name: e.target.value}) }}/>

             <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" autoComplete="phone" value={state.phone} onChange={ (e) => { setState({...state, phone: e.target.value}) }} />

             <label htmlFor="email">Email</label>
            <input type="text" id="email" autoComplete="email" value={state.email} onChange={ (e) => { setState({...state, email: e.target.value})}}  />

             <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio" autoComplete="portfolio" value={state.portfolio} onChange={(e) => {setState({...state, portfolio: e.target.value})}} />

             <label htmlFor="github">Github</label>
            <input type="text" id="github"  autoComplete="github"  value={state.github} onChange={(e) => {setState({...state, github: e.target.value})}}/>

             <label htmlFor="linkedin">Linkedin</label>
            <input type="text" id="linkedin" autoComplete="linkedin" value={state.linkedin} onChange={(e) => {setState({...state, linkedin: e.target.value})}} />

            <button>Add Profile</button>
        </div>
    )
}

export default Profile;