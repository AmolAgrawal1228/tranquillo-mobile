import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Alert,
} from "react-native";

function PersonalizedPlanQScreen(r) {
  console.log(r);
  // r2 = r.parse();
  // console.log(r2);
  return (
    <View>
      <Text>Personalized Plan: </Text>
      {/* <Text>{JSON.stringify(r.route.params.data)}</Text> */}
      {/* <Text>{JSON.stringify(r.route.params.name)}</Text> */}
    </View>
  );
}

export default PersonalizedPlanQScreen;
