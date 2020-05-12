import {Button, Icon, Label, Menu, Table} from "semantic-ui-react"
import React from "react"

const TableExample = ({fields, data, rowClickHandler, deleteHandler}) => {

    const items = data.reverse().map(item => {
        const row_data = Object.entries(item)

        const row = row_data.map((field, i) => {
            const key = Number(`${row_data[0][1]}.${i}`)
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
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left'/>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right'/>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default TableExample