import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const AVAILABLE_PAPERS = [
    {
        id: 1,
        title: "Software engineering in einer agilen Umgebung",
        professor: "Prof.Dr. Thomas Jäschke",
        bookmarked: false,
        subject: "informatik"
    },
    {
        id: 2,
        title: "Milbenbildung auf Frischwasserbrunnen der Eifel-Region",
        professor: "Prof. Dr. Hans-Dietrich Werner",
        bookmarked: false,
        subject: "biologie"
    },
    {
        id: 3,
        title: "Atomwaffen-Consulting für Dummies",
        professor: "Prof.Dr. Walter Lewin",
        bookmarked: false,
        subject: "physik"
    },
    {
        id: 4,
        title: "Auswirkung von Phenophtalanyn bei psychisch gestörten Patienten",
        professor: "Prof.Dr.med. Matthias Hillbruck",
        bookmarked: false,
        subject: "medizin"
    }
];



function SearchMask(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View>
                {
                    AVAILABLE_PAPERS.map((paper, i) => (
                    <ListItem key={i} bottomDivider onPress={()=> {navigation.navigate("SearchDetail", paper)}}>
                        <ListItem.Content>
                            <ListItem.Title>{paper.title}</ListItem.Title>
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

export default SearchMask;