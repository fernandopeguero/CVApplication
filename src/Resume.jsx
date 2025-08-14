

const Resume = ({profile, education, experience}) => {

    return (
        <div className="resume_holder">
            <section className="header_section">
                <h1 className="title">{profile.name}</h1>
                <h2 className="profession">{profile.profession}</h2>

                <div className="contact_info">
                    <p>{profile.phone}</p>
                    <p>{profile.email}</p>
                    <a herf={profile.portfolio}>Portfolio</a>
                    <a href={profile.linkedin}>LinkedIn</a>
                    <a href={profile.github}>Github</a>
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
                    <h3>{education.school}</h3>
                    <div className="sub_section">


                    <div className="details">

                    <div>
                        <h4>{education.degree}</h4>
                        <h5>{education.location}</h5>

                    </div>
                        <span>{education.from} - {education.to}</span>
                    </div>
                </div>
                </div>
            </section>

            <section className="experience_section">
                <h2>Work Experience</h2>

                <div className="sub_section">
                    <h3>{experience.company}</h3>
                <div className="details">
                    <div>
                        <h3>{experience.position}</h3>
                        <h4>{experience.location}</h4>
                    </div>
                    <span>{experience.from} - {experience.to}</span>
                </div>
                </div>
            </section>

            <section className="project_section">
                <h2>Projects</h2>

                <div className="projects sub_section">
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