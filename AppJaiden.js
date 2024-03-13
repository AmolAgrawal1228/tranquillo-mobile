import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Alert,Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { w, h } = Dimensions.get('window');

console.log(w);

function P(int,percent) {
  percent = percent/100
  return(int*percent)
}

function HomeScreen({ navigation }) {

  return(
    <View style={[styles.container,{flexDirection: 'column',}]}>
      <Text style={[styles.title , {flex: 10}]}>
        Settings
      </Text>
      <Text style={[{flex:20}, styles.settingButtons]}>
        Profile
      </Text>
      <Text style={{flex:15}}>__________</Text>
    </View>

  )

}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tranquillo" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#fff",
    alignItems: "right",
    justifyContent: "center",
    paddingLeft: 50,
    textAlign: "left",
    fontSize: 120,
  },
  header: {
    textAlign: "left",
    // color: "#fff",
    // textAlignVertical: "top",
    paddingTop: 50,
    paddingLeft: 20,
    // paddingBottom: 0,
    fontSize: 45,
  },
  name: {
    textAlign: "left",
    // color: "#fff",
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 30,
  },
  tagline: {
    textAlign: "left",
    // color: "#fff",
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    textAlign: "left",
    // color: "#fff",
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 20,
    width: 350,
  },
  title: {
    justifyContent: '',
    fontSize: P(50,15),
  },
  settingButtons: {
    fontSize: 20,
  }
});

export default App;