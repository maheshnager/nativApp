import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { Products } from "../Common/Products";
import MyPoductItem from "../Common/MyPoductItem";

export default function Main() {
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [slippersList, setSlippersList] = useState([]);
  //   console.log("..", tshirtList);

  useEffect(() => {
    // console.log("Main", Products);

    let tempCategoryList = [];
    Products?.map((item) => {
      tempCategoryList.push(item.category);
    });

    setCategoryList(tempCategoryList);

    // Set individual category data
    setTshirtList(Products[0].data); // T-shirt list
    setSlippersList(Products[1].data); // House Slippers list
    setShirtsList(Products[2].data); // Shirts list
    setJeansList(Products[3].data); // Jeans list
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <Image
          source={require("../../Images/banner.png")}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "cover",
            borderRadius: 10,
            alignItems: "center",
            marginTop: 0,
          }}
        />
        {/* categoert List */}
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList} // Array of category names
            keyExtractor={(item, index) => index.toString()} // Add a keyExtractor for FlatList
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#000" }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* T shirt List-1 */}
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          New T Shirts
        </Text>

        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tshirtList} // Array of category names
            keyExtractor={(item, index) => index.toString()} // Add a keyExtractor for FlatList
            renderItem={({ item }) => {
              return <MyPoductItem item={item} />;
            }}
          />
        </View>

        {/* Slipers List -2 */}
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          New Slipers
        </Text>

        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slippersList} // Array of category names
            keyExtractor={(item, index) => index.toString()} // Add a keyExtractor for FlatList
            renderItem={({ item }) => {
              return <MyPoductItem item={item} />;
            }}
          />
        </View>

        {/* Jeans List-3 */}
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          New Jeans
        </Text>

        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jeansList} // Array of category names
            keyExtractor={(item, index) => index.toString()} // Add a keyExtractor for FlatList
            renderItem={({ item }) => {
              return <MyPoductItem item={item} />;
            }}
          />
        </View>
        {/* Shirts List-4 */}
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          New Shirts
        </Text>

        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shirtsList} // Array of category names
            keyExtractor={(item, index) => index.toString()} // Add a keyExtractor for FlatList
            renderItem={({ item }) => {
              return <MyPoductItem item={item} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
