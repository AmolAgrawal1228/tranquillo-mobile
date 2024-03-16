import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

function Shop({ navigation }) {
  const shopBackground = {
    uri: 'https://i.pinimg.com/736x/d0/08/d5/d008d578f8bee36bd2e7b4dbd2831ad2.jpg',
  };

  return (
    <ImageBackground source = {shopBackground} resizeMode = 'cover' style = {{flex:1}}>
      <View style = {{flex:8, justifyContent: 'flex-end'}}>
        <Text style = {styles.title}>Shop</Text>
      </View>
      <View style = {{flex:2}}/>
      <View style = {{flex:19,flexDirection: 'row'}}>
        <View style = {{flex:1}}>
          <TouchableOpacity style = {styles.shopItem}>
            <Text style = {styles.shopText}>Streak Freeze X1</Text>
            <Image style = {styles.shopImage} source = {{uri: 'https://i.postimg.cc/DZKpPwqQ/Untitled-design.png'}}/>
          </TouchableOpacity>
        </View>
        <View style = {{flex:1}}>
          <TouchableOpacity style = {styles.shopItem}>
            <Text style = {styles.shopText}>X2 Points Multiplier</Text>
            <Image style = {styles.shopImage} source = {{uri: 'https://i.postimg.cc/cLBcGBY3/Untitled-design-1.png'}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{flex:19,flexDirection: 'row'}}>
        <View style = {{flex:1}}>
          <TouchableOpacity style = {styles.shopItem}>
            <Text style = {styles.shopText}>Wellness Wealth</Text>
            <Image style = {styles.shopImage} source = {{uri: 'https://i.postimg.cc/WzV3Vg0D/Untitled-design-2.png'}}/>
          </TouchableOpacity>
        </View>
        <View style = {{flex:1}}>
          <TouchableOpacity style = {styles.shopItem}>
            <Text style = {styles.shopText}>Character Upgrades</Text>
            <Image style = {{width: 120,height: 110,alignSelf: 'center',}} source = {{uri: 'https://i.postimg.cc/d12s53gJ/Untitled-design-3.png'}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{flex:7, flexDirection: 'row'}}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    textAlign: 'center',
    justifyContent: 'flex-end',
    fontSize: 50, 
    fontFamily: 'GillSans-SemiBoldItalic'
  },

  shopItem: {
    width: 150,
    height: 170,
    backgroundColor: '#edebeb',
    borderRadius: 20,
    alignSelf: 'center',
    borderWidth: 0.4,
  },

  shopText: {
    alignSelf: 'center',
    padding: 10,
  },

  shopImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },

  pageSliderText: {
    alignSelf: 'center',
    
  },

  pageSlider: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 99,
    height: 95,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0.8,
    borderBottomWidth: 0,
    borderTopColor: '0278F5',
    backgroundColor: '#edebeb'
  },
});

export default Shop;