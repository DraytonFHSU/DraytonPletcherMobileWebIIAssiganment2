import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import Card from "../shared/Card/Card";

export default function TaskList({taskList}) {
    // done
    const list = () => {
        return taskList.map((task) => {
            return (
                <Card key={task.id}>
                    <Image style={styles.image} source={task.image} />
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{task.title}</Text>
                        <Text style={styles.title}>{task.description}</Text>
                    </View>
                </Card>
            )
        })
    };
    return <ScrollView style={styles.container}>{list()}</ScrollView>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 100,
    },
    secondContainer: {
        padding: 20,
        paddingTop: 100,
    },
    image:{
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 7,
    },
    description: {
        fontWeight: 'bold',
        marginBottom: 7,
    }
})