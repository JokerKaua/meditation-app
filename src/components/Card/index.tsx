import { Pressable, StyleSheet, Text } from 'react-native';

interface CardProps {
    title: string;
    label: string
}

export default function Card ({ title, label }: CardProps) {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.label} >{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#eeeeff',
        padding: 16,
    },
    title: {
        color: '#000',
        fontSize: 20, 
        position: 'absolute',
        bottom: 32,
        marginLeft: 16,
    },
    label: {
        color: '#888',
        width: '100%',
        fontSize: 11,
        position: 'absolute',
        bottom: 12,
        marginLeft: 16,
    }
});