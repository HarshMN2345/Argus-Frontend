import { Stack } from "expo-router";
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react"; // Import or define the InitialLayout component
import { StatusBar } from "expo-status-bar";
const InitialLayout=()=>{
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown:true}}/>
    </Stack>
  )
}
const RootLayoutNav=()=>{
  return(
    <ActionSheetProvider>
      <StatusBar style="light"/>
      <GestureHandlerRootView style={{flex:1}}>
      <InitialLayout/>
      </GestureHandlerRootView>
    </ActionSheetProvider>
  )
}