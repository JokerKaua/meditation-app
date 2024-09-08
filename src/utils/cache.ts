import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cache = new Cache({
    backend: AsyncStorage,
    namespace: 'cache',
    policy: {
        maxEntries: 1000,
        stdTTL: 600 //segundos
    }
})

export default cache;
