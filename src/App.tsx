import {useMemo, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import NewNote from "./components/NewNote.tsx";
import {useLocalStorage} from "./useLocalStorage.ts";
import {v4 as uuidV4} from "uuid";
import {NoteList} from "./components/NoteList.tsx";
import {NoteLayout} from "./components/NoteLayout.tsx";
import {Note} from "./components/Note.tsx";

export type Note = {
    id: string
} & NoteData

export type RawNote = {
    id:string
} & RawNoteData

export type RawNoteData = {
    title: string
    markdown: string
    tagIds: string[]
}

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
    const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
    const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

    const notesWithTags = useMemo(() => {
        return notes.map(note => {
            return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
        })
    }, [notes, tags])
    
    function onCreateNote({tags, ...data}: NoteData) {
        setNotes(prevNotes => {
            return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }]
        })
    }
    
    function addTag(tag: Tag) {
        setTags(prev => [...prev, tag])
    }

    return (
          <Container className={'my-4'}>
              <Routes>
                  <Route path="/" element={<NoteList availableTags={tags} notes={notesWithTags} />}></Route>
                  <Route path="/new" element={<NewNote onSubmit={onCreateNote}
                  onAddTag={addTag} availableTags={tags}   />}></Route>
                  <Route path="/:id" element={<NoteLayout notes={notesWithTags}/>}>
                      <Route index element={<Note/>}></Route>
                      <Route path={'edit'} element={<h1>Edit</h1>}></Route>
                  </Route>
                  <Route path={'*'} element={<Navigate to={'/'}/>}></Route>
              </Routes>
          </Container>

    )
}

export default App
