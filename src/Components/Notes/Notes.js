import React from "react";
import s from './Notes.module.scss'

const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note =>(
                <li
                    className="list-group-item d-flex align-items-center justify-content-between"
                    key={note.id}
                >
                    <div>
                        {note.title}
                        <small className={s.date}>
                            {new Date().toLocaleDateString()}
                        </small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Notes