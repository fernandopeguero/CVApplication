import { useState } from "react";
import arrowUp from "./assets/up-arrow.svg";
import downArrow from "./assets/down-arrow.svg";
import workHistory from "./assets/work_history.svg";

const Education = ({state, setState}) => {

    const [expanded, setExpanded] = useState(false);



    return(
        <div className="card">
            <div className="title" onClick={() => setExpanded(!expanded)}>
                <img className="section_logo" src={workHistory} alt="" />
                <h2>Education</h2>
                <img className="toggler" src={expanded ? downArrow : arrowUp} alt=""/>             
            </div>

            {expanded && (

                <>
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" value={state.school} onChange={(e) => setState({...state, school: e.target.value })}/>

                    <label htmlFor="degree">Degree/Certificates</label>
                    <input type="text" id="degree" value={state.degree} onChange={(e) => setState({...state, degree: e.target.value})}/>

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


export default Education;