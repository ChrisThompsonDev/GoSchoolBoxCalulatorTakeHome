import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div id="headerLeft">
                <a href="https://goschoolbox.com/">
                    <img src="https://goschoolbox.com/wp-content/uploads/2021/08/schoolbox_long_logo_white.png" alt="logo" />
                </a>
            </div>
            <div id="headerRight">
                <ul>
                    <li><a href="https://goschoolbox.com/about/">About</a></li>
                    <li><a href="https://goschoolbox.com/team/">Our Team</a></li>
                    <li><a href="https://goschoolbox.com/contact/">Contact</a></li>
                    <li><a href="https://goschoolbox.com/all-in-one-solution/" className="headerButton">See It Live</a></li>
                </ul>
            </div>
            <div id="calculator">Calculator</div>
        </header>
    )
    
}

export default Header