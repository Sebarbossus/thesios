import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const PROFS = [
    {
        id: 1,
        name: "Prof. Dr. Thomas Jäschke",
        email: "thomas.jaeschke@iubh-fernstudium.de",
        subject: "informatik",
        interests: ["KI", "Maschinelles Lernen", "Data Science", "Data Engineering"]
    },
    {
        id: 2,
        name: "Prof. Dr. Melina Schwarzberger",
        email: "melina.schwarzberger@iubh-fernstudium.de",
        subject: "psychologie",
        interests: ["NLP", "Neurotransmissionen", "Immanuel Kant"]
    },
    {
        id: 3,
        name: "Prof. Dr. Bogus Malik",
        email: "bogus.malik@iubh-fernstudium.de",
        subject: "biologie",
        interests: ["Zellenreproduktion", "Virologie", "Osmose", "Pflanzkunde"]
    },
    {
        id: 4,
        name: "Prof. Dr. Esmee Van Megen",
        email: "esmee.vanmegen@iubh-fernstudium.de",
        subject: "medizin",
        interests: ["Muskelbildung", "Hautkrankheiten", "Urologie"]
    }
];

function Profs(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View>
                {
                    PROFS.map((prof, i) => (
                    <ListItem key={i} bottomDivider onPress={()=> {navigation.navigate("ProfDetail", prof)}}>
                        <ListItem.Content>
                            <ListItem.Title>{prof.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    list: {
        flex: 1,
        flexDirection: "column",
    },
    item: {
        padding: 10,
        borderWidth: 3,
        borderColor: "#000"
    }
});

export default Profs;