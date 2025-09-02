// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

if (typeof global.setImmediate === 'undefined') {
    // @ts-ignore
    global.setImmediate = (fn: (...a:any[]) => void, ...a:any[]) => setTimeout(fn, 0, ...a);
}

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerTitleAlign: "center" }}>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="diary" options={{ title: "Diary" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}
