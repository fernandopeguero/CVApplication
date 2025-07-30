

const Education = () => {

    return(
        <div className="card">
            <div>
                <h2>Education</h2>
                <i>^</i>
            </div>
            <label htmlFor="school">School</label>
            <input type="text" id="school" />

            <label htmlFor="degree">Degree/Certificates</label>
            <input type="text" id="degree" />

            <label htmlFor="from_date">From</label>
            <input type="date" id="from_date" />

            <label htmlFor="to_date">To</label>
            <input type="date" id="to_date" />

        </div>
    )
}


export default Education;