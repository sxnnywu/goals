// IMPORTS
import { StyleSheet, View, Text, Pressable } from 'react-native';

// COMPONENT
function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                style={({pressed}) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.id)}
            >
            <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View >        
    )}
export default GoalItem;

// STYLES
const styles = StyleSheet.create({

    // goal item
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },

    // goal text
    goalText: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
    },

    // ios pressed item
    pressedItem: {
        opacity: 0.5,
    }
})