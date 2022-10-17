import "./header.css"

const Header = () => {
    return <header className="header">
        <div id="headerLeft">
            <a href="https://goschoolbox.com/">
                <img src="https://goschoolbox.com/wp-content/uploads/2021/08/schoolbox_long_logo_white.png" alt="logo" />
            </a>
        </div>
        <div id="headerRight">
            <ul>
                <li href="https://goschoolbox.com/about/"><a>About</a></li>
                <li href="https://goschoolbox.com/team/"><a>Our Team</a></li>
                <li href="https://goschoolbox.com/contact/"><a>Contact</a></li>
                <li href="https://goschoolbox.com/all-in-one-solution/"><button>See It Live</button></li>
            </ul>
        </div>
        <div id="calculator">Calculator</div>
    </header>
}

export default Header