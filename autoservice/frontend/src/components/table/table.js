import {Button, Icon, Label, Menu, Table} from "semantic-ui-react"
import React from "react"
import copyArray from "lodash-es/_copyArray"

const TableExample = ({fields, data, userId = null, rowClickHandler, deleteHandler}) => {
    const newData = copyArray(data)
    const items = newData.reverse().map(item => {
        const row_data = Object.entries(item)


        const row = row_data.map((field, j) => {
            const key = Number(`${row_data[0][1]}.${j}`)

            if (j === 0 && field[1] === userId){
                return (
                    <Table.Cell key={key}><Label ribbon>{field[1]}</Label></Table.Cell>
                )
            }

            return (
                <Table.Cell key={key}>{field[1]}</Table.Cell>
            )
        })

        return (
            <Table.Row key={row_data[0][1]}>
                {row}
                <Table.Cell>
                    <Button.Group>
                        <Button onClick={() => rowClickHandler(row_data[0][1])}><i
                            className={'tr-action icon edit'}/></Button>
                        <Button onClick={() => deleteHandler(row_data[0][1])}><i
                            className={'tr-action icon delete'}/></Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        )
    })

    return (
        <Table celled selectable>
            <Table.Header>
                <Table.Row>
                    {fields.map((field, i) => (
                        <Table.HeaderCell key={i}>{field}</Table.HeaderCell>
                    ))}
                    <Table.HeaderCell width={1}>Действия</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {items}
            </Table.Body>
        </Table>
    )
}

export default TableExample