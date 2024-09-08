import { Pressable, StyleSheet, Text } from 'react-native';

interface CardProps {
    title: string;
    label: string
}

export default function Index({ title, label }: CardProps) {
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
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eeeeff',
        padding: 8,
    },
    title: {
        color: '#000',
        fontSize: 20,
        position: 'absolute',
        bottom: 24,
        marginLeft: 12,
    },
    label: {
        color: '#888',
        width: '100%',
        fontSize: 11,
        position: 'absolute',
        bottom: 6,
        marginLeft: 12,
    }
});