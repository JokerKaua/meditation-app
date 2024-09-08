import { View, Text, StyleSheet } from 'react-native';

export default function Index ({text, label}: {text: string; label:string}) {

    return(
        <View style={styles.container}>
            <Text style={styles.text} >{text}</Text>
            <Text style={styles.label} >{label}</Text>
            <View style={[styles.labelline, {width: label.length*4}]}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
        marginVertical: 18,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        // borderBottomWidth: 5,
        // borderBottomColor: '#e1bbff',
        position: 'relative'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: -10,
    },
    label: {
        fontSize: 14,
        color: '#333',  
        marginBottom: -10,
    },
    labelline: {
        position: 'absolute',
        backgroundColor: '#e1bbff',
        // width: 108,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 2,
        bottom: 0,
        right: 6,

    }
});