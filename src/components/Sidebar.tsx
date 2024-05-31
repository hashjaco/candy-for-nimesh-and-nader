import {CSSProperties} from "react";

interface SidebarProps {
    options: { label: string, icon: string }[]
}

const styles: Record<string, CSSProperties> = {
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

const Sidebar = ({options}: SidebarProps) => {
    return (
        <div id="sidebar" style={styles.sidebar}>
            <ul style={styles.menu}>
                {options.map((option, index) => (
                    <li key={index} style={styles.menuItem}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;