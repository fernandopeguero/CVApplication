

const Experience = () => {

    return(
        <div className="card">
            <div className="title">
                <h2>Experience</h2>
                <i>^</i>
            </div>

            <label htmlFor="company">Company</label>
            <input type="text" id="company"/>

            <label htmlFor="position">Position</label>
            <input type="text" id="position"/>

             <label htmlFor="from_date">From</label>
            <input type="date" id="from_date" />

            <label htmlFor="to_date">To</label>
            <input type="date" id="to_date" />
        </div>
    )

}

export default Experience;