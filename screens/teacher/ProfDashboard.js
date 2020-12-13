import React from 'react';
import { Card } from '../../components';
import { StyleSheet, View, Text } from 'react-native';

export default class ProfDashboard extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text>Willkommen, Professor!</Text>
                </View>
                <View style={styles.container}>
                    <Card navigation={navigation} pressAction="Interests" text="Interessen"/>
                    <Card navigation={navigation} pressAction="ProfPapers" text="Meine Arbeiten"/>
                    <Card navigation={navigation} pressAction="SecondReviewer" text="Zweitbetreuer suchen"/>
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