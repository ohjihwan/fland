// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

export default function Home() {
	// ...기존 코드 유지 (router, plants 등)

	const [activeIndex, setActiveIndex] = useState(0);
	const slides = [
		{ key: '1', label: 'Hello Carousel', bg: '#9DD6EB' },
		{ key: '2', label: 'Beautiful', bg: '#97CAE5' },
		{ key: '3', label: 'And simple', bg: '#92BBD9' },
	];

	return (
		<View style={styles.container}>
			{/* ...상단 타이틀 등 기존 */}
			
			<View style={styles.swiperBox}>
				<Carousel
					loop
					width={width - 32} // 좌우 padding 고려(컨테이너 padding:16)
					height={250}
					data={slides}
					scrollAnimationDuration={700}
					onSnapToItem={(index) => setActiveIndex(index)}
					renderItem={({ item }) => (
						<View style={[styles.slide, { backgroundColor: item.bg }]}>
							<Text style={styles.textBox}>{item.label}</Text>
						</View>
					)}
				/>
				{/* ✅ 커스텀 인디케이터 */}
				<View style={styles.dots}>
					{slides.map((_, i) => (
						<View
							key={i}
							style={[styles.dot, i === activeIndex && styles.dotActive]}
						/>
					))}
				</View>
			</View>

			{/* ...FlatList, 버튼 등 기존 */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: '#f0f0f0',
		padding: 16,
	},
	swiperBox: {
		height: 250,
		alignSelf: 'stretch',
		marginTop: 12,
		marginBottom: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	slide: {
		flex: 1,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textBox: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold',
	},
	dots: {
		position: 'absolute',
		bottom: 8,
		flexDirection: 'row',
		gap: 6,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#cfcfcf',
	},
	dotActive: {
		backgroundColor: '#333',
	},
});
