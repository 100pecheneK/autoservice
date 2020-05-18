export default function validators(formValues, fields) {
    const errors = {}
    const errorMsg = 'Это поле обязательно'
    fields.forEach(field => {
        switch (field) {
            case 'status':
                if (!formValues.status) {
                    errors.status = 'Выберите статус пользователя'
                }
                break
            case 'phone_number':
                if (!formValues.phone_number) {
                    errors.phone_number = 'Это поле обязательно'
                } else if (formValues.phone_number.match(/_/ig)) {
                    errors.phone_number = 'Введите номер телефона польностью'
                }
                break
            case 'password':
                if (!formValues.password) {
                    errors.password = 'Это поле обязателньо'
                } else if (formValues.password.length < 4) {
                    errors.password = 'Не меньше 4 символов'
                }
                break
            default:
                if (!formValues[field]) {
                    errors[field] = errorMsg
                }
        }
    })
    return errors
}