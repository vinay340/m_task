import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import DashboardComponent from '../component/DashboardComponent'
import tableData from '../utils/EmployeeList'

class DashboardContainer extends Component {

    constructor(props){
        super(props)
            this.state = {

            }
            console.log(tableData)
        
    }
    render() {
        return (
            <View style= {styles.container}>
                <DashboardComponent tableData={tableData.user}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#fff'
    }
})

export default DashboardContainer;