import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Main from "./bottom/Main";
import Search from "./bottom/Search";
import Cart from "./bottom/Cart";
import Wishlist from "./bottom/Wishlist";
import Profile from "./bottom/Profile";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../Images/home.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../Images/search.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#000",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={require("../Images/bag.svg")}
              style={{
                width: 24,
                height: 24,
                tintColor: "#fff",
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require("../Images/heart.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../Images/user.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
