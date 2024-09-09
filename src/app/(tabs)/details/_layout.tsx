import { Stack } from "expo-router";


export default function Layout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                
            }
        }}>
            <Stack.Screen name='user' options={{
                headerBackTitle: 'Custom Back',
                headerBackTitleStyle: { fontSize: 30 },
            }} />
        </Stack>
    )
}
