// app/+not-found.tsx
import React from 'react';
import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page Not Found</Text>
    </View>
  );
}
