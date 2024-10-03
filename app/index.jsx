import { useNavigation } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  const navigation=useNavigation()
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      navigation.replace('Home');
    }, 500);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  if (!isVisible) {
    return null; // Hide the splash after 500 ms
  }

  return (
    <View accessibilityRole={'none'} style={styles.splashContainer}>
      <ActivityIndicator accessibilityRole={'progressbar'} size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  splashText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
