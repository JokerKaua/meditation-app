import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

export default function getStarted() {

    const floatingAnim = useRef(new Animated.Value(0)).current

    const handleGetStarted = async () => {
        try {
            await AsyncStorage.setItem('hasSeenGetStarted', 'true');
            router.replace('/(tabs)')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatingAnim, {
                    toValue: -6, // Move para cima
                    duration: 2000,
                    useNativeDriver: true,

                }),
                Animated.timing(floatingAnim, {
                    toValue: 0, // Move para baixo
                    duration: 2000,
                    useNativeDriver: true,

                })
            ])
        ).start()

    }, [floatingAnim])

    return (
        <View style={styles.container}>
            <Animated.Image
                resizeMode='center'
                style={[styles.image, { transform: [{ translateY: floatingAnim }] }]}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2906/2906496.png" }}
            />

            <Text style={styles.titleText}>Time to meditate</Text>
            <Text style={styles.label}> Take a breath and ease your mind!</Text>

            <Pressable style={styles.button} onPress={handleGetStarted}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#202030' }}> Let's get started </Text>
                <Ionicons name="arrow-forward" size={24} color={'#abf'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fbfbff',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    image: {
        height: 220,
        width: 220,
        margin: 5,
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginTop: 50
    },
    label: {
        width: 260,
        textAlign: 'center',
        fontSize: 20,
        color: '#aaa',
        marginTop: 10,
    },
    button: {
        width: '85%',
        height: 50,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        alignItems: 'center',
        margin: 5,
        position: 'absolute',
        bottom: 30,
        borderRadius: 15,
        shadowRadius: 2,
        shadowColor: '#47479e',
        shadowOffset: { width: 0, height: 0 },
        elevation: 24 //Para android
    }
});