import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return <View style={{
    flex: 1,
  alignItems: "center", }}>
    {/* Welcome And Image Section */}
<View style={{marginTop: 150, alignItems: "center"}}>
  <Text style={{fontSize: 35, fontWeight: "bold"}}>Welcome!</Text>
  <Text style={{color: "#7C7C7C" }}>Sign in or create a new account</Text>
<Image
  source={require("./assets/Frame.png")}
/>

</View>

    {/* Sign In And Sign Up Section */}
  </View>
}

export default App

