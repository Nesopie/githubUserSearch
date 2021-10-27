import preferenceIcon from "../assets/icon-moon.svg"

const Header = () => {
    return (
        <header>
            <div className="title">devfinder</div>
            <div className="preferenceWrapper">
                <div className="colorPreference">Light</div>
                <img className="preferenceIcon" src={preferenceIcon} alt="colorSchemePreferenceIcon"/>
            </div>
        </header>
    );
}

export default Header;
