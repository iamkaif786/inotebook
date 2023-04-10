import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "642e3e74ddab369db1a72be5",
          "user": "642ba76d93184f2df4cd8fe2",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-04-06T03:37:24.256Z",
          "__v": 0
        },
        {
          "_id": "643391f34014d505a1b05964",
          "user": "642ba76d93184f2df4cd8fe2",
          "title": "New Note",
          "description": "Please access the playlist 2",
          "tag": "YouTube",
          "date": "2023-04-10T04:34:59.382Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;