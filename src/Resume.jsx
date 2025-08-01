

const Resume = () => {

    return (
        <div className="resume_holder">
            <section className="header_section">
                <h1>Name</h1>
                <h2>Profession</h2>

                <div>
                    <p>Phone Number: 555-555-5555</p>
                    <p>exampleEmail@gmail.com</p>
                    <a href="#">LinkedIn</a>
                    <a href="#">Github</a>
                </div>
            </section>

            <section className="about_me_section"> 
                <h2 className="title">About Me</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo adipisci distinctio, magnam natus ut aliquid consequuntur atque earum dicta nobis accusamus molestias tempora minima quae quasi quod esse maxime!
                </p>
            </section>
            <section className="education_section">
                <h2 className="title">Education</h2>

                <div>
                    <h3>High School</h3>

                    <div>
                        <p>Bronx, New york</p>
                        <span>2012-2014</span>
                    </div>
                </div>
            </section>

            <section className="experience_section">
                <h2>Work Experience</h2>

                <div>
                    <div>
                        <h3>Job title</h3>
                        <h4>Bronx, New york</h4>
                    </div>
                    <p>2012-present</p>
                </div>
            </section>

            <section className="project_section">
                <h2>Projects</h2>

                <div className="projects">
                    <article>
                        <h3>Project Title</h3>
                        <h4>city, State</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae adipisci cupiditate placeat, ipsum odit ab similique perspiciatis accusamus doloremque earum debitis porro, ipsam voluptatem! Nam cumque perferendis quia quos?</p>
                    </article>
                </div>
            </section>
        </div>
    )
}


export default Resume;