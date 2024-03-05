import { View, Text, Image , SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={{flex:1 , marginLeft: 20, marginRight: 20}}>
      {/* Header section */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <AntDesign style={{marginRight: 80}} name="arrowleft" size={34} color="black" />
        <Text style={{fontSize: 30, fontWeight: "bold", alignItems:"center"}}>Create new account</Text>
      </View>
     
      {/* Form section */}
      <View>
        {/* Full Name  */}
        <View style={{marginTop: 150}}>
          <Text style={{fontSize:15}}>Full Name</Text>
          <TextInput style={{borderBottomWidth: 2, borderBottomColor: "gray", marginTop: 10, padding: 20, borderRadius: 20}}
            placeholder="Enter your name"
          />
        </View>
        {/* Email address */}
        <View>
        <Text style={{marginTop:50, fontSize:15}}>Email address</Text>
          <TextInput style={{borderBottomWidth: 2, borderBottomColor: "gray", marginTop: 10, padding: 20, borderRadius: 20,}}
            placeholder="Enter your email address"
          />
        </View>
        {/*Create Password */}
        <View>
        <Text style={{marginTop:50, fontSize:15}}>Create Password</Text>
          <TextInput style={{borderBottomWidth: 2, borderBottomColor: "gray", marginTop: 10, padding: 20, borderRadius: 20,}}
            placeholder="Enter your password"
          />
        </View>
        {/**Repeat Password */}
        <View>
        <Text style={{marginTop:50, fontSize:15}}>Repeat Password</Text>
          <TextInput style={{borderBottomWidth: 2, borderBottomColor: "gray", marginTop: 10, padding: 20, borderRadius: 20,}}
            placeholder="Confirm your password"
          />
        </View>

      </View>

      {/* Button section */}
      <View>
  {/* Sign In Button */}
  <TouchableOpacity style={{
    backgroundColor: "#0DCDAA", 
    padding: 10, 
    
    alignItems: "center",
    borderRadius: 10,
    width: 400,
    
    marginTop: 100
    }}>
    <Text style ={{color:"white", fontWeight: "bold"}}>Sign Up</Text>
  </TouchableOpacity>


</View>
    </SafeAreaView>
  )
}

export default App
