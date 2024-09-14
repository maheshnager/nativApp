import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 0.1,
        borderBottomColor: "#8e8e8e",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
          marginLeft: 20,
        }}
      >
        MyNative
      </Text>
      <TouchableOpacity
        style={{
          marginRight: 15,
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          height: 40,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
