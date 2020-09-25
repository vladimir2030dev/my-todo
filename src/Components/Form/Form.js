import React, {useState, useContext} from "react";

const Form = () => {

    const [value, setValue] = useState('')

    return (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => }
                />
            </div>
        </form>
    )
}

export default Form