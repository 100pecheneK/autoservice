import React from "react"

const Form = ({initialValues, handleSubmit, onSubmit, children}) => {
    const btnText = `${initialValues ? 'Обновить' : 'Создать'}`
    return (
        <div className='ui segment'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='ui form error'
            >
                {children}
                <button className='ui primary button'>{btnText}</button>
            </form>
        </div>
    )
}

export default Form