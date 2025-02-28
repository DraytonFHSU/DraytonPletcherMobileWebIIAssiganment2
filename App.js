import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header/Header';
import Profile from './app/components/Profile/Profile';
import MyButton from './app/components/MyButton/MyButton';

export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>
      <Profile name = {"Drayton Pletcher"} />
      <MyButton></MyButton>

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
