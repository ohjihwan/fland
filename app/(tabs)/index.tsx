// app/(tabs)/index.tsx
import { View, Text, StyleSheet, Button, Alert, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

type Plant = { id: string; name: string };

export default function Home() {
    const router = useRouter();

    const handlePress = () => {
        Alert.alert("버튼 클릭!", "정상적으로 동작합니다 🌱");
    };

    const plants: Plant[] = [
        { id: "1", name: "몬스테라" },
        { id: "2", name: "스킨답서스" },
        { id: "3", name: "산세베리아" }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌱 플랜드</Text>
            <Text>내 식물 목록</Text>

            <FlatList
                data={plants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => router.push(`/plant-detail?id=${encodeURIComponent(item.id)}`)}
                        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                    >
                        <Text style={styles.item}>• {item.name}</Text>
                    </Pressable>
                )}
                style={{ marginTop: 20, alignSelf: "stretch" }}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />

            <View style={{ marginTop: 20 }}>
                <Button title="눌러보세요" onPress={handlePress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12
    },
    item: {
        fontSize: 18,
        paddingVertical: 8
    }
});
