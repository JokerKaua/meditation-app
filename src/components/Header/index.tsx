import { EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <EvilIcons name='user' size={40} color={'#e1bbff'} onPress={() => router.navigate('./details/user')} />
            <Text style={styles.text} > Hello! Welcome back!</Text>
            <EvilIcons name='navicon' size={40} color={'#e1bbff'} onPress={() => router.navigate('./details/settings')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});