import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field';
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions';
import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.welcome}>iniciando o Mines</Text>
        <Text style={styles.instruction}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>        
  
      </View>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    alignItems: 'center',
    backgroundColor:'#aaa'
  }
});
