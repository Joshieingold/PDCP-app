
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatBarProps {
  statValue: number;
  barColor: string;
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
});


const StatBar: React.FC<StatBarProps> = ({ statValue, barColor }) => {
  const fillWidth = `${statValue}%`;

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.fill, { width: fillWidth, backgroundColor: barColor } as any]} />
      </View>
    </View>
  );}

export default StatBar;
