import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Slot } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { Cache } from 'react-native-cache';
import cache from '@/src/utils/cache';

//Temporario:
// Inicializando cache para o GetStarted
// const cache = new Cache({
//     namespace: 'getStartedCache',
//     policy: {
//         maxEntries: 100,
//         stdTTL: 20 //tempo de vida
//     },
//     backend: AsyncStorage
// })
// cache.clearAll()

// Apenas para controle de visualização da tela de getStarted
// Apenas para AsyncStorage, pois guarda as keys permanentemente no dispositvo
// const SHOW_GET_STARTED = true;

export default function Layout() {

    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                // const hasSeenGetStarted = await AsyncStorage.getItem('hasSeenGetStarted');
                const hasSeenGetStarted = await cache.get('hasSeenGetStarted')
                                                    // undefined for cache and null for asyncstorage
                setIsFirstLaunch(hasSeenGetStarted === undefined || hasSeenGetStarted ===  null);

                console.log(`Has seen GetStarted: ${hasSeenGetStarted}`);

            } catch (e) {
                console.error(e);
            }
        }

        checkFirstLaunch();
    }, []);

    useEffect(() => {
        if (isFirstLaunch !== null) {
            if (isFirstLaunch === false /*&& !SHOW_GET_STARTED*/) {
                router.replace('/(tabs)'); // Navega para a página Home
            } else if (isFirstLaunch === true /*|| SHOW_GET_STARTED*/) {
                router.replace('../getStarted'); // Navega para a página GetStarted
            }
        }
    }, [isFirstLaunch]);

    // if (isFirstLaunch === null) {
    //     return null
    // }

    return (
        <Slot />
    )
}