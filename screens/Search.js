import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { ScrollView } from "react-native-virtualized-view";

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar barStyle={'light-content'}
        />
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        // marginTop: vw(4),
        width: '100%',
        height: vw(26),
        zIndex: 1, }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginLeft: '7%'}}>Danh mục</Text>
        <Searchbar
            placeholder="Tìm kiếm"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ height: vw(12), width: '86%', alignSelf: 'center', marginVertical: vw(3) }}
        />
      </View>

      {/* Content goes here */}
      <ScrollView>
        <View style={{marginTop: vw(28), flexDirection: 'row', width: '86%', alignSelf: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#EB5900',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>ngoại ngữ</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://wiseenglish.edu.vn/wp-content/uploads/2022/01/CAMBRIDGE-IELTS-17.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#FC4972',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>tham khảo</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://book.sachgiai.com/uploads/book/nhung-bai-van-mau-12-tap-1/nhung-bai-van-mau-12-tap-1-0.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#12B546',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>kĩ năng sống</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/34/27/af/0721511cfad05122e0ec3334e8ea4353.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#E4AD87',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>ngoại ngữ</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://toplist.vn/images/800px/hack-nao-1500-tu-tieng-anh-266984.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>luật pháp</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://www.nxbctqg.org.vn/img_data/images/408963891739_dau-thau.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#EB5900',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#FC4972',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#12B546',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#E4AD87',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          
        </View>
      </ScrollView>


   
          
    </View>

        {/* </View>
        <View style={{ marginTop: 27, left: 25 }}>
          <Text style={{ color: "#ffffff", fontWeight: "600" }}>Category</Text>
        </View>

        <View style={{ marginTop: 26, flexDirection: "row" }}>
          <View style={{ left: 25 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 35 }}>
            <TouchableOpacity
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Showing")}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>
        </View> */}

    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  CategoryCard: {
    width: vw(40),
    height: vw(50),
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  CategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CategoryImages: {
    width: '65%',
    height: '65%',
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    
  }
})
export default Search;

// const styles = StyleSheet.create({
//   card: {
//     width: vw(40),
//     height: vw(40),
//     backgroundColor: "white",
//     borderColor: "#cccccc",
//     borderWidth: 1,
//     borderRadius: 6,

//   },
//   images: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 6,
//   },
// });