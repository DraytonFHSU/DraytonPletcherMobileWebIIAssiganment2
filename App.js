import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './app/components/Header/Header';
import Profile from './app/components/Profile/Profile';
import MyButton from './app/components/MyButton/MyButton';
import TaskList from './app/components/Task/TaskList';
import TaskData from './app/components/Task/TaskData'
import Task from './app/components/Task/Task'

export default function App() {
  const [taskList, setTaskList] = useState(TaskData);
  return (
    <View style={styles.container}>
{/* done */}
      <Header></Header>
      <Profile name = {"Drayton Pletcher"} />
      <MyButton></MyButton>
      <Task/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
