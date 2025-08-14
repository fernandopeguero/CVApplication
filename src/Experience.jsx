import { useState } from "react";
import arrowUp from "./assets/up-arrow.svg";
import downArrow from "./assets/down-arrow.svg";
import libraryIcon from "./assets/library_icon.svg";

const Experience = ({state, setState}) => {

    const [expanded, setExpanded] = useState(false);

    return(
        <div className="card">
            <div className="title" onClick={() => setExpanded(!expanded)}>
                <img className="section_logo" src={libraryIcon} alt="" />
                <h2>Experience</h2>
                <img className="toggler" src={expanded ? downArrow : arrowUp} alt=""/>             
            </div>

            {expanded && (

                <>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" value={state.company} onChange={(e) => setState({...state, company: e.target.value})}/>

                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" value={state.position} onChange={(e) => setState({...state, position: e.target.value})} />

                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" value={state.location} onChange={(e) => setState({...state, location: e.target.value})} />

                    <label htmlFor="from_date">From</label>
                    <input type="text" id="from_date" value={state.from} onChange={(e) => setState({...state, from: e.target.value})}/>

                    <label htmlFor="to_date">To</label>
                    <input type="text" id="to_date" value={state.to} onChange={(e) => setState({...state, to: e.target.value})}/>
                </>
            )}

        </div>
    )

}

export default Experience;