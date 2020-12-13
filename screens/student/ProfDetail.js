import React from 'react';
import { View, Text } from 'react-native';

function ProfDetail({navigation}) {
    const { id, name, email, subject, interests } = navigation.state.params;
    return(
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{subject}</Text>
            <Text>Interessen:</Text>
            {
                interests.map((interest, idx) => {
                    return(<Text key={idx}>{interest}</Text>)
                })
            }
        </View>
    )
}

export default ProfDetail;