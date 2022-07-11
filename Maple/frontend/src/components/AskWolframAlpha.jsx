import React, { useState, useEffect } from 'react'
import './css/pod.css'
import WolframAPI from './WolframAPI'

let myStyle = {
    "--title": '"Wolfram Alpha"',
}

const Form = (props) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([{}])

    const sendQuery = () => {
        WolframAPI.send_query({ my_query: query })
            .then((response) => { showPods(response) })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendQuery();
        setPodsStyle({
            width: "calc(60% - 2rem)",
            padding: "2rem",
            boxShadow: "0 0 1vh rgba(0, 0, 0, 0.5)"
        })
    }

    const handleChange = (event) => {
        event.preventDefault()
        setQuery(event.target.value)
    }

    let renderPods = (x, key) => {
        if (x[key][0] === undefined) return <></>
        if (x[key][0] instanceof String || typeof x[key][0] == 'string') {
            return <><button className="PodButton">
                {key}
                <hr className="lineStyle" />
            </button>
                <div className="pod">
                    {x[key].map(i => {
                        i = i.toString()
                        return (
                            <><img src={(i.startsWith("http")) ? i : "data:image/gif;base64," + i} alt="None" /><br /></>
                        )
                    })}</div></>
        };
        return <><button className="PodButton">
            {key}
            <hr className="lineStyle" />
        </button><div className="pod">{x[key].map((i, j) => {
            return <>{i[0]}: <img src={(i[1].startsWith("http")) ? i[1] : "data:image/gif;base64," + i[1]} alt="None" /><br /></>
        })}</div></>
    }

    let showPods = (response) => {
        console.log(response)
        setData(response)
    }

    let [podsStyle, setPodsStyle] = useState({
        width: "0",
        padding: "0rem",
        boxShadow: "0 0 1vh rgba(0, 0, 0, 0.5)"
    })

    return (

        <>
            <div class="main-test" style={myStyle}></div>
            <div className="Pods" >
                <form onSubmit={handleSubmit} className="Form">
                    <label>
                        <p>{query}</p>
                        Equation:
                        <input type="text" name="order_name" defaultValue={query} onChange={handleChange} />
                        <input type="submit"></input>
                    </label>
                </form>
                <div className="PodContainer" style={podsStyle}>
                    {Object.keys(data).map((key, index) => renderPods(data, key))}
                </div>
            </div>
        </>

    )

}

export default Form;