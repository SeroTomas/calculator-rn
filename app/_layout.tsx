import { View } from 'react-native';

import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) null;
  return (
    <View style={globalStyles.backGround}>
      <Slot />
      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout;

