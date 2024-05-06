import { useState } from "react";

export const AddCategory = ( {onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if ( inputValue.trim().length <= 1 ) return
        
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} className="mt-5 mb-4">
            <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
};
