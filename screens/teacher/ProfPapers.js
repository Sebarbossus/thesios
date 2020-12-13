import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ProfPapers() {
    return (
        <View style={styles.container}>
            <Text>Arbeiten</Text>
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

export default ProfPapers;