import { useState } from "react";
import arrowUp from "./assets/up-arrow.svg";
import downArrow from "./assets/down-arrow.svg";
import libraryIcon from "./assets/library_icon.svg";

const Experience = () => {

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
                    <input type="text" id="company"/>

                    <label htmlFor="position">Position</label>
                    <input type="text" id="position"/>

                    <label htmlFor="from_date">From</label>
                    <input type="date" id="from_date" />

                    <label htmlFor="to_date">To</label>
                    <input type="date" id="to_date" />
                </>
            )}

        </div>
    )

}

export default Experience;