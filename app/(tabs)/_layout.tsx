// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerTitleAlign: "center" }}>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="diary" options={{ title: "Diary" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}
