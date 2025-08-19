// IMPORTS
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image
} from 'react-native';
import { useState } from 'react';

// COMPONENT
function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    // goal input handler
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    // add goal handler
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                
                {/* image */}
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />

                {/* text input */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                
                {/* button container */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel" 
                            onPress={props.onCancel} 
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
                    </View>
                </View>

            </View>
        </Modal>
    )
};

export default GoalInput;

// STYLES
const styles = StyleSheet.create({

    // input container
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#311b6b',
    },

    // image
    image: {
        width: 100,
        height: 100,
        margin: 20
    },

    // text input  
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },

    // button container
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },

    // button
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});

