// app/(tabs)/profile.tsx
import { View, Text, StyleSheet } from "react-native";

export default function ProfileTab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>프로필 탭</Text>
            <Text>닉네임/알림 설정 등을 배치할 예정입니다.</Text>
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
