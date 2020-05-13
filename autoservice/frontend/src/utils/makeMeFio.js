export default function makeMeFio(data) {
    return data.map(mainClient => {
        const client = Object.assign({}, mainClient)
        const fio = client.first_name &&
            client.last_name &&
            client.generic_name &&
            `${client.first_name} ${client.last_name} ${client.generic_name}`
        const c = {
            id: client.id,
            fio: fio,
        }
        delete client.first_name
        delete client.last_name
        delete client.generic_name
        return {
            ...c,
            ...client
        }
    })
}