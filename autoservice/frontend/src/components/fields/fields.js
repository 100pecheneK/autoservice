import InputMask from 'react-input-mask'
import React from "react"

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



