import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial)

    //Get all Notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            },
        });
        const json = await response.json();
        console.log(json);

        setnotes(json);

    }
    //Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            },
            body: JSON.stringify({title, description, tag})
        });
        const note = {
            "_id": "642e3e74ddab369db1a72be70",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        };
        setnotes(notes.concat(note))
    }
    //Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            }
        });
        const json =  response.json();
        console.log(json);
        //Logic to edit in client
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setnotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            },
            body: JSON.stringify({title, description, tag})
        });
        // eslint-disable-next-line
        const json =  response.json();
        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;