import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

class DashboardCOmponent extends Component {

    render() {
        const { tableData } = this.props
        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title >Age</DataTable.Title>
                    <DataTable.Title >Gender</DataTable.Title>
                    <DataTable.Title >Email</DataTable.Title>
                    <DataTable.Title >Phone No</DataTable.Title>
                </DataTable.Header>
                {
                    tableData.map(item => {
                        return (
                            <DataTable.Row>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell >{item.age}</DataTable.Cell>
                                <DataTable.Cell >{item.gender}</DataTable.Cell>
                                <DataTable.Cell >{item.email}</DataTable.Cell>
                                <DataTable.Cell >{item.phoneNo}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                }

            </DataTable>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '40%',
        marginTop: 20
    }
})

export default DashboardCOmponent;