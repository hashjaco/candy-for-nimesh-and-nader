import {CSSProperties, useEffect, useState} from "react";
import {Sidebar, Header} from "./components";
import rd3 from "react-d3-library";

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
        gap: 5,
    },
    insights: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgb(0, 0, 0, .2)",
        boxSizing: "border-box",
        padding: 5,
    }

}

const initialInsights = [
    {
        title: "Bitcoin",
        content: "Bitcoin is a digital currency that was created in January 2009. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto. The identity of the person or persons who created the technology is still a mystery. Bitcoin offers the promise of lower transaction fees than traditional online payment mechanisms and is operated by a decentralized authority, unlike government-issued currencies."
    },
    {
        title: "Ethereum",
        content: "Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, fraud or third party interference. These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property."
    },
    {
        title: "Ripple",
        content: "Ripple is a digital payment protocol that operates a peer-to-peer, decentralized platform. It enables money to be transferred anywhere in the world instantly and securely, for very low fees. Ripple is used by companies such as UniCredit, UBS and Santander."
    },
    {
        title: "Litecoin",
        content: "Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins."
    },
    {
        title: "Bitcoin Cash",
        content: "Bitcoin Cash is a cryptocurrency that is a fork of Bitcoin. Bitcoin Cash is a spin-off or altcoin that was created in 2017. In 2018 Bitcoin Cash subsequently split into two cryptocurrencies: Bitcoin Cash, and Bitcoin SV. Bitcoin Cash is sometimes also referred to as Bcash."
    }
]

const Insights = () => {
    const [insights, setInsights] = useState(initialInsights);

    useEffect(() => {
        const fetchInsights = async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const data = await response.json();
            const filteredInsights = data.slice(0, 10)
            setInsights(filteredInsights)

        }

        fetchInsights().then(() => {
            console.log("Insights fetched");
        }).catch(e => e);
    }, []);
    return (
        <div style={styles.insights}>
            {insights.map((insight: any, index: number) => (
                <div key={index} style={{width: 200, height: 200, padding: 5, boxSizing: "border-box"}}>
                    <h2>{insight.name}</h2>
                    <p>{insight.rank}</p>
                </div>
            ))}
        </div>
    )
}


const App = () => {
    const sidebarOptions = [
        {label: "Home", icon: "home"},
        {label: "Something", icon: "something"},
        {label: "Something else", icon: "something-else"},
    ]

    return (
        <div style={styles.app}>
            <Header/>
            <div id="content" style={styles.content}>
                <Sidebar options={sidebarOptions}/>
                <Insights />
            </div>
        </div>
    )
}

export default App
