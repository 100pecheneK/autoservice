import copyArray from "lodash-es/_copyArray"


export default function makeMeFio(data) {
    console.log('data', data)
    const newData = copyArray(data).map(client => {
        const fio = client.first_name &&
            client.last_name &&
            client.generic_name &&
            `${client.first_name} ${client.last_name} ${client.generic_name}`

        const c = {
            id: client.id,
            fio: fio,
        }
        delete client['first_name']
        delete client['last_name']
        delete client['generic_name']
        return {
            ...c,
            ...client
        }
    })
    console.log('newData', newData)
    return newData
}