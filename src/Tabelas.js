import React, {Component}from 'react';
import {View, StyleSheet, Text}  from 'react-native';
import { Table, TableWrapper,  Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

export default class Tabelas extends Component{
    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['Time', 'Pts', 'Jogos', 'V', 'SG'],
            DataTable: 
            [
                ['AT-MG', '27', '12', '9','11'],
                ['INTER', '22', '13', '6','8'],
                ['PALM', '22', '12', '4','6']

            ]}
        
    }

    render(){
        const state = this.state;

        return(
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                    <Row data={state.HeadTable} style={styles.container} textStyle={styles.tableText} />
                    <Row data={state.DataTable} textStyle={styles.tableText} />
                </Table>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    tableText: {
        color: '#000'
    }
})