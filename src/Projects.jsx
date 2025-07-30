import projectIcon from "./assets/project.svg";
import { useState } from "react";
import arrowUp from "./assets/up-arrow.svg";
import downArrow from "./assets/down-arrow.svg";

const Projects = () => {

    const [expanded, setExpanded] = useState(false);

    return(
        <div className="card">
            <div className="title" onClick={() => setExpanded(!expanded)}>
                <img className="section_logo" src={projectIcon} alt="" />
                <h2>Projects</h2>
                <img className="toggler" src={expanded ? downArrow : arrowUp} alt=""/>             
            </div>

            {expanded && (
                <>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />

                    <label htmlFor="link">Link</label>
                    <input type="url" />
                </>
            )}


            
        </div>
    )

}


export default Projects;