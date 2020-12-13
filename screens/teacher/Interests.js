import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Interests() {
    return (
        <View style={styles.container}>
            <Text>Interests</Text>
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

export default Interests;