import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function SecondReviewer() {
    return (
        <View style={styles.container}>
            <Text>Zweitbetreuer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SecondReviewer;