// app/plant-detail.tsx
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

type Params = { id?: string };

export default function PlantDetail() {
    const { id } = useLocalSearchParams<Params>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>식물 상세</Text>
            <Text>선택된 식물 ID: {id ?? "-"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8
    }
});
