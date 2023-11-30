import LogInBar from "../LogInBar/LogInBar"
import './NavBar.css'

const NavBar = () => {
    const logo = 'https://thumb.mt.co.kr/06/2015/09/2015092316215415842_1.jpg/dims/optimize/'
  return (
    <header>
        <div className="logoContainer">
        <h1>Kim Folk Costume</h1>
        <img className="logo" src={logo} alt="habok logo" />
        </div>
        <nav>
            <ul>
                <li>tailored</li>
                <li>rent</li>
                <li>2024 fasion now!</li>
                <li>man</li>
                <li>woman</li>
                <li>couple</li>
            </ul>
        </nav>

        <LogInBar/>
    </header>
  )
}

export default NavBar