import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {increment, decrement, signIn, signOut} from './src/actions';

export const App = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
       <Button title="+" onPress={ () => dispatch(increment())}/>
       <Button title="-" onPress={ () => dispatch(decrement())}/>
       <Button title="sign in" onPress={ () => dispatch(signIn())}/>
       <Button title="sign out" onPress={ () => dispatch(signOut())}/>
       <Text>Counter {counter}</Text>
       {isLogged ? <Text>logged in text</Text> : <Text>not logged in text</Text>}
      </SafeAreaView>
  );
};