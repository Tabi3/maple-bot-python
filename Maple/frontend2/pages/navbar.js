import styles from '../styles/sidebar.module.css'

export default function NavBar(props) {
    let navitemConstructor = (href, svg_path, link_text) => {
        return (
            <li className={styles["nav-item"]}>
                <a href={href} className={styles["nav-link"]}>
                    <svg className={styles["navbar-svg"]} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        {(() => {
                            if (typeof svg_path !== "string") {
                                return svg_path.map(element => {
                                    return <path d={element} key={element}/>
                                })
                            } else {
                                return <path d={svg_path} />
                            }
                        })()}
                    </svg>
                    <span className={styles["link-text"]}>{link_text}</span>
                </a>
            </li>)
    }

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M2 7v1l11 4 9-4V7L11 4z"></path><path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path></svg>
    let navItems = () => {
        let hrefs = ['/', '/Wolfram-Alpha', '/Maple-Bot', '/khub', '/dashboard']
        let link_texts = ["Home", "Calculator", "Maple Bot", "Khub", "Menu"]
        let svg_paths = [
            "M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z",
            "M6 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm3-3H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-6h2v6zm0-8h-2V9h2v2zM6 4h12v3H6V4z",
            "m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z",
            ["M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z", "M2 7v1l11 4 9-4V7L11 4z"],
            "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
        ]


        return <ul className={styles["navbar-nav"]}>{([0, 1, 2, 3, 4]).map(i => navitemConstructor(hrefs[i], svg_paths[i], link_texts[i]))}</ul>
    }


    return (
        <nav className={styles.navbar}>
            <img src="https://i.pinimg.com/originals/16/2f/22/162f2252116e12165daae9a0d03c689e.gif" alt="Banner" />
            {navItems()}
        </nav>);
}