import React from 'react';
import { Card } from '../../components';
import { StyleSheet, View, Text } from 'react-native';

export default class StudentDashboard extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text>Willkommen, Student!</Text>
                </View>
                <View style={styles.container}>
                    <Card navigation={navigation} pressAction="SearchMask" text="Themen suchen"/>
                    <Card navigation={navigation} pressAction="Profs" text="Betreuer suchen"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});