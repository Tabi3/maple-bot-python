import { Component } from 'react'
import { Link } from 'react-router-dom'

let myStyle = {
    "--title": '"TestPage"',
}
class TestPage extends Component {

    

    render() {
        return (
            <>
                <div class="main-test" style={myStyle}></div>
                <div>

                    <h1>Test Page<br /></h1>
                    <ul>
                        {['/test', '/AskWolframAlpha', '/navbar', '/login'].map(
                            (link, index) => <li>{ }<Link to={link}>{index}</Link></li>
                        )}
                    </ul>
                </div>
            </>)

    }
};

export default TestPage