const styles = {
    logo: {
        width: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-evenly"
    },
}
const Logo = () => {
    return <div id="logo" style={styles.logo}>
        <img src="/doodoomuffin.jpeg" alt="logo" style={styles.logo}/>
    </div>
}

export default Logo;