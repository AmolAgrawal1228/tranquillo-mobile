import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ navigation }) {
  const backgroundImage = {
    uri: "https://i.pinimg.com/736x/d0/08/d5/d008d578f8bee36bd2e7b4dbd2831ad2.jpg",
    // uri: "https://th.bing.com/th/id/OIP.2uQnFka_8921cFRl1X2J3QHaNI?rs=1&pid=ImgDetMain",
  };
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
    pageSlider: {
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      width: 80,
      height: 95,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderTopColor: "0278F5",
      backgroundColor: "#edebeb",
      textAlign: "center",
    },
  });
  const styleTest = {
    // flexDirection: "row",
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: 20,
    marginTop: 20,
  };

  const date = new Date();

  function pythonReq() {
    fetch("http://127.0.0.1:5000/")
      .then(function (resp) {
        // console.log(resp);
        return resp.json();
      })
      .then((resp) => {
        // console.log("data: ");
        console.log(resp.message);
        navigation.navigate("Questionairre", {
          data: resp.message,
          id: Math.floor(Math.random() * 100),
        });
      });
  }
  // console.log(date);

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View>
        <View>
          <Text style={styles.tagline}>{"\n"}Your Path to Mental Wellness</Text>
        </View>

        <Text style={styles.name}>Welcome, Johnny!</Text>
        <Text style={styles.text}>Today is {date.toDateString()}</Text>
        <View style={styleTest}>
          <Button
            onPress={pythonReq}
            title="Create a Daily Plan"
            color="#0278F5"
          />
        </View>
        <View style={styleTest}>
          <Button
            onPress={() => Alert.alert("Coming soon!")}
            title="Resources"
            color="#0278F5"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <Text style={styles.text}>
          {"\n\n\n"}If you want to conquer the anxiety of life, live in the
          moment, live in the breath.{"\n\n"} - Amit Ray
        </Text>

        {/* Placeholder until there is enough content on this page. The code below will make sure that the background stretches the entire page.  */}
        <Text>
          {
            "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
          } 
        </Text>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
