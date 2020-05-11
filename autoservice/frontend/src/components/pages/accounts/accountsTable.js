import React, {Component} from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

import {connect} from "react-redux"
import {getAccounts} from "../../../actions/tables"



class AccountsTable extends Component {

    componentDidMount() {
        this.props.getAccounts()
    }

    render() {
        const {rows} = this.props
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ФИО</Table.HeaderCell>
                        <Table.HeaderCell>Логин</Table.HeaderCell>
                        <Table.HeaderCell>Почта</Table.HeaderCell>
                        <Table.HeaderCell>Телефон</Table.HeaderCell>
                        <Table.HeaderCell>Статус</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {rows.map(row => {
                        return (
                            <Table.Row key={row.id}>
                                <Table.Cell>{`${row.first_name} ${row.last_name} ${row.generic_name}`}</Table.Cell>
                                <Table.Cell>{row.username}</Table.Cell>
                                <Table.Cell>{row.email}</Table.Cell>
                                <Table.Cell>{row.phone_number}</Table.Cell>
                                <Table.Cell>{row.status}</Table.Cell>
                            </Table.Row>
                        )
                    })}


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left'/>
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
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
}

const mapStateToProps = state => {
    return {
        rows: state.tablesReducer.tableData
    }
}


export default connect(mapStateToProps, {getAccounts})(AccountsTable)