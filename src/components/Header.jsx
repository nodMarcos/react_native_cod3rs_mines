import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default props => {
  return(
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity style={styles.flagButton} onPress={props.onFlagPress}>
          <Flag bigger/>
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={props.onNewGame} 
      >
        <Text style={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#eee'
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginRight: 20,
  },
  button: {
    padding: 5,
    
    backgroundColor: '#999',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ddd',
  }

})