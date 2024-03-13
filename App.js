import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalizedPlanQScreen from "./screens/Plan";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tranquillo" component={HomeScreen} />
        <Stack.Screen name="Questionairre" component={PersonalizedPlanQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
