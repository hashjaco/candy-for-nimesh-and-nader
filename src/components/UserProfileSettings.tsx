const styles = {
    whiteText: {
        color: "#fff",
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        marginLeft: 'auto',
    },
    flexCentered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}

const UserProfileSettings = () => {
    return <div id="user-profile-settings" style={styles.flexCentered}>
        <div id="avatar" style={styles.flexCentered}>
            <img style={styles.avatar} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                 alt="avatar"/>
        </div>
    </div>
}

export default UserProfileSettings;