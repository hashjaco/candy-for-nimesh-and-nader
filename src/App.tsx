import Header from "./components/Header.tsx";
import {CSSProperties} from "react";

const styles: Record<string, CSSProperties> = {
    flexCentered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    app: {
        display: "flex",
        flexFlow: "column nowrap",
        width: "100vw",
        height: "100vh",
        backgroundColor: `rgb(0, 0, 0, .4)`,
        opacity: 0.7,
        boxSizing: "border-box",
        padding: 5,
    },
    content: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(0, 0, 0, .2)",
        boxSizing: "border-box",
    },
    sidebar: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        width: '30%',
        minWidth: 150,
        maxWidth: 200,
        height: "100%",
        boxSizing: "border-box",
        padding: 5,
        backgroundColor: "rgb(0, 0, 0, .2)",
        left: 0,
        top: 0,
    },

    menu: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        listStyleType: "none",
        padding: "5px 1px",
        width: "100%",
    },
    menuItem: {
        padding: "5px 10px",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: "rgb(0, 0, 0, .4)",
        color: "#fff",
        cursor: "pointer",
        transition: "background-color .3s",
        boxSizing: "border-box",
    }
}

const sidebarOptions = [
    {label: "Home", icon: "home"},
    {label: "Something", icon: "something"},
    {label: "Something else", icon: "something-else"},
]

const App = () => {
    return (
        <div style={styles.app}>
            <Header/>
            <div id="content" style={styles.content}>
                <div id="sidebar" style={styles.sidebar}>
                    <ul style={styles.menu}>
                        {sidebarOptions.map((option, index) => (
                            <li key={index} style={styles.menuItem}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App
