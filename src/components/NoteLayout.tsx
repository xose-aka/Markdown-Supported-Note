import {Note} from "../App.tsx";
import {Navigate, Outlet, useParams} from "react-router-dom";

type NoteLayoutProps = {
    notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps) {
    const {id} = useParams()
    const note = notes.find(n => n.id === id)

    if (note === null) return <Navigate to={'/'} replace/>

    return <Outlet context={note}/>
}