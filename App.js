import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {date : new Date()}
    }

    relogio(){
      this.setState({
        date : new Date()
      });
  }

  componentDidMount(){
    this.TimerID = setInterval(() => this.relogio(1000));
  }

  componentWillUnmount(){
    clearInterval(this.TimerID);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.p}>{this.state.date.toLocaleTimeString()}</Text>
        </View>
      </View>

    )
  }

}
// export default function App () {
//   return (
//     <View style={styles.container}>
//       <Text>ello, world!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    color: '#00F7FF',
    fontSize: 50, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});
