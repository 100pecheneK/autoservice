import copyArray from "lodash-es/_copyArray"

export default function makeMeFio(data) {
    const newData = copyArray(data)
    return newData.map(client => {
        const c = {
            id: client.id,
            fio: `${client.first_name} ${client.last_name} ${client.generic_name}`,
        }
        delete client['first_name']
        delete client['last_name']
        delete client['generic_name']
        return {
            ...c,
            ...client
        }
    })
}