/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router/'
import NavBar from '../navbar';
import styles from '../../styles/sidebar.module.css'
import wolfram_styles from '../../styles/wolfram-alpha.module.css'
import { useState } from 'react';

export default function WolframApi({ result }) {

    const router = useRouter();
    const { my_query } = router.query;
    let [query, setQuery] = useState('')

    let handleChange = (event) => {
        event.preventDefault()
        setQuery(event.target.value)
    }

    let handleForm = (event) => {
        event.preventDefault()
        console.log(wolfram_styles)
        console.log(query)
        router.push(`${query}`)
    }

    let handlePod = (event) => {
        event.preventDefault()
        let panel = event.target.nextElementSibling
        if (panel.style.maxHeight !== '0px') {
            event.target.classList.remove(wolfram_styles['expanded'])
            panel.style.maxHeight = 0
        } else {
            event.target.classList.add(wolfram_styles['expanded'])
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }

    let renderPods = (x, key) => {
        if (x[key][0] === undefined) return <></>
        if (x[key][0] instanceof String || typeof x[key][0] == 'string') {
            return <div>
                <button className={wolfram_styles["PodButton"]} onClick={handlePod}>
                    {key}
                </button>
                <div className={wolfram_styles['pod']} style={{maxHeight: '0px'}}>
                    {x[key].map(i => {
                        i = i.toString()
                        return (
                            <>
                                <img
                                    src={(i.startsWith("http")) ? i : "data:image/gif;base64," + i}
                                    alt="None"
                                /><br />
                            </>
                        )
                    })}
                </div>
            </div>
        };
        return <div>
            <button className={wolfram_styles["PodButton"]} onClick={handlePod}>
                {key}
            </button>
            <div className={wolfram_styles['pod']} style={{maxHeight: '0px'}}>
                {x[key].map((i, j) => {
                    return <>{i[0]}:
                        <img
                            src={(i[1].startsWith("http")) ? i[1] : "data:image/gif;base64," + i[1]}
                            alt="None"
                        />
                        <br />
                    </>
                })}</div></div>
    }

    return (
        <>
            <NavBar />
            <div className={styles['main-test']} style={{ '--title': `"${my_query}"` }}>{my_query}</div>
            <div className={styles.main} style={{ height: '100%' }}>
                <div className={wolfram_styles.container}>
                    <form onSubmit={handleForm} method="POST" className={wolfram_styles['wolfram-form']} style={{ height: 'auto' }}>
                        <div style={{ display: "grid", gridTemplateColumns: '1fr 31fr' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                                <path d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zm8.12-7.078L12 19.798V4.667l7.565 10.087z"></path>
                            </svg>
                            <label htmlFor="query">Ask Wolfram Alpha</label>
                        </div>

                        <div className={wolfram_styles['search-bar']}>
                            <input name="query" defaultValue={query} onChange={handleChange} className={wolfram_styles['search-field']} placeholder="x^2" />
                            <button type="submit" className={wolfram_styles["submit-form"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: "rgba(0, 0, 0, 1)", filter: "invert(100)" }}>
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                    <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={wolfram_styles['pods']}>
                            {Object.keys(result).map((key, index) => renderPods(result, key))}
                        </div>
                        <hr style={{ border: '0px solid', width: '100%', backgroundImage: 'linear-gradient(45deg, #F62336, #FF6611)', height: '5px', marginTop: "auto" }} />
                    </form>

                </div>

            </div>

        </>
    )
}

export async function getServerSideProps({ params }) {
    console.log(params)
    const req = await fetch("http://localhost:5000/flask/wolfram_query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    })

    const data = await req.json()

    return {
        props: { result: data }
    }
}   