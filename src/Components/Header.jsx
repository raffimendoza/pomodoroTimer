import '../styles/header.scss'
import logo from '../images/ischool.png'
 
export function Header () {
  return (
    <header>
        <div class="container1">
            <div class="container1image"><img src={logo} alt="ischool logo" width="100px"/></div>
            <div class="container1header">
                <h2> <p>IST 263 - M002</p>
                <p> Class References, Shortcuts, Tools</p> </h2>
            </div>
        </div>
        <nav>
            <div> <a href="https://raffimendoza.github.io/ist263/project7/schedule.html" id="schedule">SCHEDULE</a></div>
            <div> <a href="https://raffimendoza.github.io/ist263/project7/index.html" id="home">HOME</a></div> 
            <div> <a href="https://raffimendoza.github.io/pomodoroTimer/" id="pomodoro"><strong>POMODORO</strong></a></div>
        </nav>
    </header>
  )
}