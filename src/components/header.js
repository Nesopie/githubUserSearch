import preferDark from "../assets/icon-moon.svg";
import preferLight from "../assets/icon-sun.svg";

const Header = () => {
    const setPreference = (e) => {
        const theme = document.documentElement.getAttribute("data-theme");
        const img = document.querySelector(".preferenceIcon");
        const themeText = document.querySelector(".colorPreference");
        if(theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            img.src = preferDark;
            themeText.innerText = "Dark";
        }else {
            document.documentElement.setAttribute('data-theme', 'dark');
            img.src = preferLight;
            themeText.innerText = "Light";
        }
    }

    return (
        <header>
            <div className="title">devfinder</div>
            <div className="preferenceWrapper">
                <div className="colorPreference">Light</div>
                <img onClick={setPreference} className="preferenceIcon" src={preferLight} alt="colorSchemePreferenceIcon"/>
            </div>
        </header>
    );
}

export default Header;
