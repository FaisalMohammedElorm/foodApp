import { View, Text , Image} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
    <View style={{marginTop:300, marginLeft:100, }}>
      {/*Image section starts here*/}
      <Image
  source={require("./assets/Map.png")}
/>

    {/*Image section ends here*/}
    </View>
    <View style={{marginLeft: 110, marginTop: 25}}>
      {/**Text Area Starts Here */}
<Text style={{fontSize: 30, fontWeight:"bold", alignItems:"center"}}>Select Location</Text>
      {/**Text Area Ends Here */}
    </View>
    {/**Another Text Area Starts Here */}
    
      <View style={{marginLeft:30, marginRight:30, alignItems:"center"}}>
<Text style={{color:"#7C7C7C", fontWeight:"bold", fontSize:18}}>Let's find your next event. Stay in tune with what's happening in your area! </Text>
      </View>
      {/**Another Text Area Ends Here */}
    </View>
  )
}

export default App