import InputMask from 'react-input-mask'
import React from "react"
import Form from "../form/Form"

export const phoneNumberField = ({input, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <InputMask {...input} mask="+7 (999) 999-99-99"/>
        {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
)


export const hiddenField = ({type, meta: {error}}) => (
    <div className='field'>
        <input type={type}/>
        {error && <div className='ui red message'>{error}</div>}
    </div>
)


export const renderField = ({input, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
)
export const renderEmailField = ({input, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} onKeyPress={e => {
            if (e.key.match(/[^a-z0-9@.]/ig)) {
                e.preventDefault()
            }
        }} autoComplete='off'/>
        {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
)

export const renderSelect = ({input, label, meta: {touched, error}, options}) => {
    return (
        <div className={`field ${touched && error ? 'error' : ''}`}>
            <label>{label}</label>
            <select className='ui fluid dropdown' {...input}>
                <option/>
                {options.map(({key, value, title}, i) => (
                    <option value={value} key={i}>
                        {title}
                    </option>
                ))}
            </select>
            {touched && error && (
                <span className='ui pointing red basic label'>{error}</span>
            )}
        </div>
    )
}

