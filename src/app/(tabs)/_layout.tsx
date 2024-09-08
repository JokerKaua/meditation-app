import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Slot } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function Layout() {

    // Apenas para controle de visualização da tela de getStarted
    const SHOW_GET_STARTED = false;

    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const hasSeenGetStarted = await AsyncStorage.getItem('hasSeenGetStarted');
                setIsFirstLaunch(hasSeenGetStarted === null);
            } catch (e) {
                console.error(e);
            }
        }

        checkFirstLaunch()
    }, []);

    useEffect(() => {
        if (isFirstLaunch === false && !SHOW_GET_STARTED) {
            router.replace('/(tabs)'); // Navega para a página Home
        } else if (isFirstLaunch === true || SHOW_GET_STARTED) {
            router.replace('../getStarted'); // Navega para a página GetStarted
        }
    }, [isFirstLaunch]);

    return (
        <Slot />
    )
}