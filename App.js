import { View, Text, Image, TouchableOpacity} from 'react-native'
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
    
<View>
  {/* Sign In Button */}
  <TouchableOpacity style={{
    backgroundColor: "#0DCDAA", 
    padding: 10, 
    
    alignItems: "center",
    borderRadius: 10,
    width: 250,
    marginTop: 100
    }}>
    <Text style ={{color:"white", fontWeight: "bold"}}>Sign In</Text>
  </TouchableOpacity>


</View>
  </View>
}

export default App

