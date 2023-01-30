import { useState, useEffect } from 'react'
import './App.css'
function App() {
    const [quoteText, setquoteText] = useState("")
    const getQuteText = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                let randomNum = Math.floor(Math.random()*data.length)
                setquoteText(data[randomNum])
            });
    }
    useEffect(() => {
        getQuteText()
    },[])
    return (
        <div className="App">
            <div className='content'>
                <h2>{quoteText.title}</h2>
                <p>{quoteText.body}</p>
            </div>
            <button onClick={getQuteText}>Get Quote</button>
        </div>
    )

}
export default App
