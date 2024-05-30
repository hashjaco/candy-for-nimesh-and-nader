import UserProfileSettings from "./UserProfileSettings.tsx";
import Navigation from "./Navigation.tsx";
import Logo from "./Logo.tsx";

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#333",
        color: "#fff",
    },
}

const Header = () => {
    return <header style={styles.header}>
        <Logo/>
        <Navigation/>
        <UserProfileSettings/>
    </header>
}

export default Header;