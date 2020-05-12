import React, {Component} from "react"
import {Icon, Label, Menu, Table, Button} from "semantic-ui-react"
import {connect} from "react-redux"
import {deleteClient, getClients} from "../../../actions/clients"
import history from "../../../history"
import TableExample from "../../table/table"
import copyArray from "lodash-es/_copyArray"
import {makeMeFio} from "../../../utils"

class ClientsList extends Component {
    componentDidMount() {
        this.props.getClients()
    }

    rowClickHandler = id => history.push(`/clients/${id}`)
    deleteHandler = id => this.props.deleteClient(id)


    render() {
        const clients = makeMeFio(this.props.clients)
        const fields = ['id', 'ФИО', 'Номер телефона']
        return (
            <TableExample
                fields={fields}
                data={clients}
                rowClickHandler={this.rowClickHandler}
                deleteHandler={this.deleteHandler}
            />
            // <Table celled selectable>
            //     <Table.Header>
            //         <Table.Row>
            //             <Table.HeaderCell>id</Table.HeaderCell>
            //             <Table.HeaderCell>ФИО</Table.HeaderCell>
            //             <Table.HeaderCell>Номер телефона</Table.HeaderCell>
            //             <Table.HeaderCell width={1}>Действия</Table.HeaderCell>
            //         </Table.Row>
            //     </Table.Header>
            //     <Table.Body>
            //         {clients.reverse().map(({
            //                                     id,
            //                                     first_name,
            //                                     last_name,
            //                                     generic_name,
            //                                     phone_number
            //                                 }) => (
            //             <Table.Row key={id}>
            //                 <Table.Cell>{id}</Table.Cell>
            //                 <Table.Cell>{`${first_name} ${last_name} ${generic_name}`}</Table.Cell>
            //                 <Table.Cell>{phone_number}</Table.Cell>
            //                 <Table.Cell>
            //                     <Button.Group>
            //                         <Button onClick={() => this.rowClickHandler(id)}><i
            //                             className={'tr-action icon edit'}/></Button>
            //                         <Button onClick={() => this.deleteHandler(id)}><i
            //                             className={'tr-action icon delete'}/></Button>
            //                     </Button.Group>
            //                 </Table.Cell>
            //             </Table.Row>
            //         ))}
            //     </Table.Body>
            //     <Table.Footer fullWidth>
            //         <Table.Row>
            //             <Table.HeaderCell colSpan='4'>
            //                 <Menu floated='right' pagination>
            //                     <Menu.Item as='a' icon>
            //                         <Icon name='chevron left'/>
            //                     </Menu.Item>
            //                     <Menu.Item as='a'>1</Menu.Item>
            //                     <Menu.Item as='a'>2</Menu.Item>
            //                     <Menu.Item as='a'>3</Menu.Item>
            //                     <Menu.Item as='a' icon>
            //                         <Icon name='chevron right'/>
            //                     </Menu.Item>
            //                 </Menu>
            //             </Table.HeaderCell>
            //         </Table.Row>
            //     </Table.Footer>
            // </Table>
        )
    }
}

const mapStatetoProps = state => ({
    clients: Object.values(state.clients)
})

export default connect(
    mapStatetoProps,
    {getClients, deleteClient}
)(ClientsList)