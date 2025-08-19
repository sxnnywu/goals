// IMPORTS
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

// COMPONENT
export default function App() {

  // state variables
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  // start add goal handler
  function startAddGoalHandler() {
    setModalVisible(true);
  }

  // end add goal handler
  function endAddGoalHandler() {
    setModalVisible(false);
  }

  // add goal handler
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  // delete goal handler
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>

      {/* modal button */}
      <Button 
        title='Add New Goal' 
        color="#a065ec" 
        onPress={startAddGoalHandler}
      />

      {/* goal input */}
      {modalVisible && 
        <GoalInput 
          onAddGoal={addGoalHandler} 
          visible={modalVisible}
          onCancel={endAddGoalHandler}
        />
      }

      {/* list of goals */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text} 
                onDeleteItem={deleteGoalHandler} 
                id={itemData.item.id}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

// STYLES
const styles = StyleSheet.create({

  // App container
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  // Goals container
  goalsContainer: {
    flex: 5
  },
});
