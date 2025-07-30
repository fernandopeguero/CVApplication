import { useState } from "react";
import arrowUp from "./assets/up-arrow.svg";
import downArrow from "./assets/down-arrow.svg";
import workHistory from "./assets/work_history.svg";

const Education = () => {

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
                    <input type="text" id="school" />

                    <label htmlFor="degree">Degree/Certificates</label>
                    <input type="text" id="degree" />

                    <label htmlFor="from_date">From</label>
                    <input type="date" id="from_date" />

                    <label htmlFor="to_date">To</label>
                    <input type="date" id="to_date" />
                </>
            )}


        </div>
    )
}


export default Education;