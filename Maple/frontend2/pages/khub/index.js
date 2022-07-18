import NavBar from "../navbar.js"
import styles from "../../styles/sidebar.module.css"
import KhubCard from "../../MyComponents/KhubCard.js"
import wolfram_styles from "../../styles/wolfram-alpha.module.css"
import cardStyles from "../../styles/Khub/KhubCard.module.css"
import { useState } from "react"

export default function KhubHome({ li }) {
    const img = "https://media.istockphoto.com/videos/abstract-background-holographic-gradient-futuristic-3d-rendering-video-id1159788522?s=640x640"
    const lnk = "https://www.youtube.com/watch?v=wF5jQPZRAjg&list=RDGMEMYH9CUrFO7CfLJpaD7UR85w&index=3"

    let renderCards = () => {
        return <>{li.home.map(i => <KhubCard key={i.title} img_src={i.img} name={i.title} description={i.description} href={i.link} authors={i.advisers} />)}</>
    }

    return <>
        <NavBar />
        <div className={styles['main-test']} style={{ '--title': '"PSHS Knowledge hub"' }} />
        <div className={styles.main}>
            <div className={wolfram_styles.container} style={{ justifyContent: 'center' }}>
                <div className={cardStyles.cardsContainer}>
                    <div style={{ width: '100%', height: '3rem', marginBottom: '2rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ marginRight: '2rem' }}>
                            <path d="M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z"></path>
                        </svg>
                        Courses
                    </div>
                    <div className={cardStyles.cards}>
                        {renderCards()}
                        <KhubCard img_src={img} name="Random C418 Song" description="Its Nice" href={lnk}
                            authors={[{
                                profile: 'none', name: 'c418',
                                pfp: 'https://yt3.ggpht.com/ytc/AKedOLTsfRbieVuIoewtJFWCL-HlUXNJfOn2-5RUgjotKQ=s176-c-k-c0x00ffffff-no-rj-mo'
                            }]} />
                    </div>
                    <hr style={{ border: '0px solid', width: '100%', backgroundImage: 'linear-gradient(45deg, #F62336, #FF6611)', height: '5px', marginTop: "2rem" }} />

                </div>

            </div>
        </div>

    </>
}

export let getServerSideProps = async (context) => {
    let getNewSession = async (ctx) => {
        let res = await fetch('http://localhost:5000/flask/khub-login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login: [undefined]})
        })
        let data = await res.json()
        console.log(data.cookie.value)
        return data.cookie.value
    }
    let _cookies = context.req.headers.cookie.split(';')
    let cookies = {}
    for (let i = 0; i < _cookies.length; i++) {
        console.log(_cookies)
        let j = _cookies[i].indexOf('=')
        cookies[_cookies[i].slice(0, j)] = _cookies[i].slice(j+1)
    }

    let getCourses = async (Session) => {
        return await fetch("http://localhost:5000/flask/khub", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 'cookie': { 'name': 'MoodleSession', 'value': Session } })
        })
    }
    let req = await getCourses(cookies['MoodleSession'])
    let data
    try {
        data = await req.json()
    } catch (err) {
        let session = await getNewSession()
        context.res.setHeader('set-cookie', `MoodleSession=${session}`)
        req = await getCourses(session)
        data = await req.json()
    }

    return {
        props: { li: data }
    }
}