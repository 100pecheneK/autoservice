
import React, {useState} from "react"
import InputMask from 'react-input-mask'
import DatePicker from "react-datepicker"
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css"

import _ from 'lodash'
import {Dropdown, Search} from "semantic-ui-react"


export const phoneNumberField = ({input, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <InputMask {...input} mask="+7 (999) 999-99-99"/>
        {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
)


export const hiddenFieldError = ({meta: {error}}) => (
    <div className='field'>
        <input type='hidden'/>
        {error && <div className='ui red message'>{error}</div>}
    </div>
)

export const hiddenField = ({value}) => (
    <div className='field'>
        <input type='hidden' value={value}/>
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

export const renderTextField = ({input, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <textarea {...input} autoComplete='off'/>
        {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
)

export const renderEmailField = ({input, type, label, meta: {touched, error}}) => (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} type={type} onKeyPress={e => {
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
                {options.map((option, i) => {
                    const optionKeys = Object.keys(option)
                    const optionData = {
                        value: option[optionKeys[0]],
                        title: option[optionKeys[1]]
                    }

                    return (
                        <option value={optionData.value} key={optionData.value}>
                            {optionData.title}
                        </option>
                    )
                })}
            </select>
            {touched && error && (
                <span className='ui pointing red basic label'>{error}</span>
            )}
        </div>
    )
}

export const renderSearchField = ({options, change, placeholder=''}) => {
    const stateOptions = _.map(options.reverse(), (opt, index) => {
        const optionKeys = Object.keys(opt)
        const optionData = {
            value: opt[optionKeys[0]],
            title: opt[optionKeys[1]]
        }
        return {
            key: optionData.value,
            text: optionData.title,
            value: optionData.value
        }
    })
    return (
        <Dropdown placeholder={placeholder}
                  onChange={(e, {value})=>change(value)}
                  clearable search selection
                  options={stateOptions}

        />
    )
}
export const renderDatePicker = ({
                                     input: {onChange, value}, label, meta: {touched, error}
                                 }) => {
    const selected = value ? new Date(value) : null
    return (
        <div className='field'>
            <label>{label}</label>
            <DatePicker
                locale="ru"
                onChange={date => {
                    const val = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
                    onChange(val)
                }}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                selected={selected}
            />
            {touched && error && (
                <span className='ui pointing red basic label'>{error}</span>
            )}
        </div>
    )
}