import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    //a.state.name, a.state.class used in <About />.
    const s1 = {
        "name": "Kaif",
        "class": "5b"
    }

    const [state, setState] = useState(s1);

    //update() called in <About />.
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Saif",
                "class": "10b"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;