import React from 'react';
import { Block, Text } from '../../components';
import { Tile } from 'react-native-elements';

export default class Browse extends React.Component {
    render() {
        return(
            <Block>
                <Text h3 center>Willkommen, Student!</Text>
                <Tile
                    title="Themen und Betreuer suchen"
                    icon={{ name: 'play-circle', type: 'font-awesome' }}
                    contentContainerStyle={{ height: 20 }}
                    ></Tile>
            </Block>
        )
    }
}