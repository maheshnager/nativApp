import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MyPoductItem({ item }) {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        marginLeft: 20,
        marginBottom: 10,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "50%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          fontWeight: "600",
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingTop: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          {"₹" + item.price}
        </Text>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          {item.rating}
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            boderWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 7,
            paddingBottom: 7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          with: 40,
          height: 40,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 5,
          position: "absolute",
          top: 10,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../Images/heart.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
