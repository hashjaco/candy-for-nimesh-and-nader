const styles = {
    navigation: {
        display: "flex",
        alignItems: "center"
    },
    nav: {
        display: "flex",
        listStyleType: "none",
    },
    navMenu: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyleType: "none",
        gap: 100,
        fontSize: 20,
    },
    whiteText: {
        color: "#fff",
    },

}

const Navigation = () => {
    return <div id="navigation" style={styles.navigation}>
        <nav style={styles.nav}>
            <ul style={styles.navMenu}>
                <li><a style={styles.whiteText} href="#">Home</a></li>
                <li><a style={styles.whiteText} href="#">About</a></li>
                <li><a style={styles.whiteText} href="#">Contact</a></li>
            </ul>

        </nav>
    </div>
}

export default Navigation;