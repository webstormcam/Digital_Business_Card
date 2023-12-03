import email from "./assets/Mail.png"
import linkedIn from "./assets/linkedin.png"

function Body(){
    return (
       <main className="main-area">
            <div className="top-words">
                <h1>Mario Mario</h1>
                <h2>Executive Plumber</h2>
                <p><a target="_blank" href="https://www.nintendo.com/">www.nintendo.com</a></p>
            </div>
            <div className="buttons">
                <a className="button email" href="#" target="_blank"><img className="icon" src={email} alt="Email Icon" /><p>Email</p></a>
                <a className="button linkedin" href="https://www.linkedin.com/in/cameron-chandler-222947197/" target="_blank"><img className="icon" src={linkedIn} alt="Linkedin Icon" /><p>Linkedin</p></a>
            </div>
            <div className="text-place">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
       </main>
    )
}

export default Body