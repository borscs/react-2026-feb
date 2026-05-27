import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import {Ionicons} from "@expo/vector-icons";
import {GlobalStyles} from "./constants/styles";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function ExpensesOverView(){
  return (
   <BottomTabs.Navigator
     screenOptions={({navigation})=>({
       headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
       headerTintColor: '#fff',
       tabBarActiveTintColor: GlobalStyles.colors.accent500,
       tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
       headerRight: ({ tintColor}) => (
         <IconButton icon="add"
                     color={tintColor} size={24}
                     onPress={() => navigation.navigate('ManageExpense')} />
         
       )})}
   >
    
    <BottomTabs.Screen
      name="RecentExpenses"
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        headerTitleAlign: 'center',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name={'hourglass'} size={size} color={color} />
        ),
      }}
    />
     <BottomTabs.Screen
       name="AllExpenses"
       component={AllExpenses}
       options={{
         title: 'All Expenses',
         tabBarLabel: 'All',
         tabBarIcon: ({color, size}) => (
           <Ionicons name={'calendar'} size={size} color={color} />
         ),
       }}
     />
   </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpensesOverView}
            options={{
              headerShown: false,
              animation: 'slide_from_bottom',
          }}
          />
          <Stack.Screen
            name={"ManageExpense"}
            component={ManageExpense}
            options={{
              animation: 'fade'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
