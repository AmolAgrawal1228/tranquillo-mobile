import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Shop from "./screens/shop";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
        <Tab.Screen name="Tranquillo" component={HomeScreen}/>
        <Tab.Screen name="Shop" component={Shop}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
