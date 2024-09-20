import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import NewNote from "./components/NewNote.tsx";

export type Note = {
    id: string
} & NoteData

export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type Tag = {
    id: string
    label: string
}

function App() {
    const [count, setCount] = useState(0)




  return (
      <Container className={'my-4'}>
          <Routes>
              <Route path="/" element={<h1>Hi</h1>}></Route>
              <Route path="/new" element={<NewNote />}></Route>
              <Route path="/:id">
                  <Route index element={<h1>Show</h1>}></Route>
                  <Route path={'edit'} element={<h1>Edit</h1>}></Route>
              </Route>
              <Route path={'*'} element={<Navigate to={'/'}/>}></Route>
          </Routes>
      </Container>

  )
}

export default App
