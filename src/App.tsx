import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={<h1>Hi</h1>}></Route>
    </Routes>
  )
}

export default App
