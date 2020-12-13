import React from 'react';
import { View, Text } from 'react-native';

function SearchDetail({navigation}) {
    const { id, title, professor, bookmarked, subject } = navigation.state.params;
    return(
        <View>
            <Text>{title}</Text>
            <Text>{professor}</Text>
            <Text>{subject}</Text>
        </View>
    )
}

export default SearchDetail;