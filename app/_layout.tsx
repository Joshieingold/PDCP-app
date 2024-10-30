   // app/(tabs)/_layout.tsx
   import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
   import { NavigationContainer } from '@react-navigation/native';
   import { Ionicons } from '@expo/vector-icons'; 

   import Journal from './Journal'; 
   import Calandar from './Calander';
   import Home from './index'; 
   import Character from './Character';
   import Battle from './Battle';

   const Tab = createBottomTabNavigator();

   export default function RootLayout() {
     return (
       <NavigationContainer independent={true}>
         <Tab.Navigator
           screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
               let iconName;

               if (route.name === 'Journal') {
                 iconName = focused ? 'book' : 'book-outline'; 
               } else if (route.name === 'Calandar') {
                 iconName = focused ? 'calendar' : 'calendar-outline';
               } else if (route.name === 'Home') { // Or 'home' if renamed
                 iconName = focused ? 'home' : 'home-outline';
               } else if (route.name === 'Character') {
                 iconName = focused ? 'person' : 'person-outline';
               } else if (route.name === 'Battle') {
                 iconName = focused ? 'flash' : 'flash-outline';
               }

               return <Ionicons name={"chevron-up-outline"} size={size} color={color} />;
             },
             tabBarActiveTintColor: 'tomato', // Customize colors
             tabBarInactiveTintColor: 'gray',
           })}
         >
           <Tab.Screen name="Journal" component={Journal} options={{headerShown: false}}/>
           <Tab.Screen name="Calandar" component={Calandar} options={{headerShown: false}}/>
           <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/> 
           <Tab.Screen name="Character" component={Character} options={{headerShown: false}}/>
           <Tab.Screen name="Battle" component={Battle} options={{headerShown: false}}/>
         </Tab.Navigator>
       </NavigationContainer>
     );
   }
