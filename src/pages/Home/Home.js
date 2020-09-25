import React, {Fragment} from "react";
import Form from "../../Components/Form/Form";
import Notes from "../../Components/Notes/Notes";

export const Home = () => {
    const notes = new Array
        (5)
        .fill('') /* Заполняем пустой строкой */
        .map((_, i) => ({id: i, title: `Запись ${i+1}`}))

    return (
        <Fragment>
            <Form/>
            <hr/>
            <Notes notes={notes}/>
        </Fragment>
    )
}