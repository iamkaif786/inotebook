import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "642e3e74ddab369db1a72be30",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "New Title",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        },
        {
            "_id": "643391f34014d505a1b059640",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "Shaktimaan",
            "description": "Please access the playlist 2",
            "tag": "Facebook",
            "date": "2023-04-10T04:34:59.382Z",
            "__v": 0
        },
        {
            "_id": "642e3e74ddab369db1a72be50",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "Twitter",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        },
        {
            "_id": "642e3e74ddab369db1a72be80",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "Yahoo",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        },
        {
            "_id": "642e3e74ddab369db1a72be90",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "Gmail",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        },
        {
            "_id": "642e3e74ddab369db1a72be22",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        },
        {
            "_id": "642e3e74ddab369db1a72be71",
            "user": "642ba76d93184f2df4cd8fe2",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-06T03:37:24.256Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description, tag) => {
        //TODO API Call
        console.log("Adding a new note")
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
    const deleteNote = (id) => {
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id !==id});
        setnotes(newNotes);
    }
    //Edit a Note
    const editNote = (id, title, description, tag) => {
        
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;