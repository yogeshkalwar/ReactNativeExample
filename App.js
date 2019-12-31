import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isGoalVisible, setIsGoalVisible] = useState(false);
  
  console.log(courseGoals);
  
  const addGoalHandler = enteredGoal => {
    setIsGoalVisible(false);
    setCourseGoals(currentGoals => [...currentGoals, {key:Math.random().toString(), value:enteredGoal}]);
  }
  const deleteGoalHandler = key => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== key);
    });
  }
  const cancelGoalEntered = () => {
    setIsGoalVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsGoalVisible(true)}/>
      <GoalInput visible={isGoalVisible} onAddGoal={addGoalHandler} cancel={cancelGoalEntered} />
      <FlatList 
        keyExtractor={(item, index ) => item.key}
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} onDeleteGoal={deleteGoalHandler.bind(this, itemData.item.key)}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  }
});