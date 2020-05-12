import React from "react"
import {Segment} from "semantic-ui-react"

const Form = ({initialValues, handleSubmit, onSubmit, children}) => {
    const btnText = `${initialValues ? 'Обновить' : 'Создать'}`
    return (
        <Segment>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='ui form error'
            >
                {children}
                <button className='ui primary button'>{btnText}</button>
            </form>
        </Segment>
    )
}

export default Form