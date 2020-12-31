import React from 'react';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Constants from './constants';

const Game = () => {
  let engine = null;

  return (
    <View>
      <GameEngine ref={(ref) => { engine = ref; }}
        style={[{ width: Constants.MAX_WIDTH, height: Constants.MAX_HEIGHT, backgroundColor: 'red', flex: null }]}>
      </GameEngine>    
      </View>
  );
}


export default Game;
