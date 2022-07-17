import NavBar from "../navbar"
import styles from '../../styles/sidebar.module.css'
import wolfram_styles from '../../styles/wolfram-alpha.module.css'
import { createRef, useState } from "react"
import { useRouter } from "next/router"


export default function Wolfram_page(props) {

    let router = useRouter()
    let myRef = createRef();

    let startBot = (event) => {
        fetch("http://localhost:5000/flask/start-bot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 'a': 'a' })
        }).then(x => {
            console.log(x)
            if (x.status === 200) {
                myRef.current.style.borderColor = '#9ED36A'
                myRef.current.innerHTML = '<p style="margin: 1rem">success</p>'
                return
            }
            myRef.current.style.borderColor = '#801336'
            myRef.current.innerHTML = '<p style="margin: 1rem">fail</p>'
        })
    }

    let stopBot = () => {
        fetch("http://localhost:5000/flask/stop-bot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 'a': 'a' })
        }).then(x => {
            console.log(x)
            if (x.status === 200) {
                myRef.current.style.borderColor = '#9ED36A'
                myRef.current.innerHTML = '<p style="margin: 1rem">success</p>'
                return
            }
            myRef.current.style.borderColor = '#801336'
            myRef.current.innerHTML = '<p style="margin: 1rem">fail</p>'

        })
    }

    return <>
        <NavBar />
        <div className={styles['main-test']} style={{ '--title': '"Bot Page"' }} />
        <div className={styles.main} style={{ height: '100%' }}>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(15, 1fr)", height: '100%' }}>
                <button onClick={startBot}>Start Bot</button>
                <button onClick={stopBot}>Stop Bot</button>
                <div ref={myRef} style={{ 
                        transition: 'all 0.2s ease-out', 
                        textAlign: 'left', 
                        borderLeft: '2px solid', 
                        boxShadow: '0rem 0 1rem 0 rgba(0, 0, 0, 0.2)',
                    }}><p style={{ margin: '1rem' }}>Press Start</p></div>
            </div>

        </div>
    </>
}