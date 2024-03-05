
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//todo: Understand flex direction, safeAreaView, TextInput

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
      {/**Header Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          style={{
            marginRight: 10,
          }}
          name="leftcircleo"
          size={24}
          color="black"
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Welcome Back!
        </Text>
      </View>

      {/**Form Section */}

      <View style={{ marginTop: 150 }}>
        {/**Email and TextInput */}
        <View>
          <Text style={{ color: "#7C7C7C", fontWeight: "bold", fontSize: 15 }}>
            Email address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="enter your email address"
          />
        </View>

        {/**Password and TextInput */}
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#7C7C7C", fontWeight: "bold", fontSize: 15 }}>
            Password
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="enter password"
          />
        </View>

        {/**Remember me  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#7C7C7C",
            }}
          >
            Remember me
          </Text>

          <Text>todo</Text>
        </View>
      </View>

      {/**Button Section */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0DCDAA",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

