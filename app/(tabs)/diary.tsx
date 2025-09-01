// app/(tabs)/diary.tsx
import { View, Text, StyleSheet } from "react-native";

export default function DiaryTab() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>일기 탭</Text>
			<Text>작성된 일기를 보여줄 예정입니다.</Text>
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
