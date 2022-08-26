import React from 'react'
import {View,Text,Button} from 'react-native'
import style from './style'

const Diagnostics = () => {
  return (
   
    <View style={[style.container, style.shadowProp]}>

        <View style={{flexDirection:'row',flex:1}}>
          <Text style={style.headingText}>Diagnostics</Text>
          <Text>icon</Text>
          <Text style={style.uptodateText}>up to date</Text>
        </View>

        <View style={{flexDirection:'row',flex:1}}>
          <Text>icon</Text>
          <View style={{flexDirection:'column'}}>
            <Text style={style.deviceText}>Device</Text>
            <Text style={style.deviceSubText}>No advisories available</Text>
          </View>
          <Text>icon</Text>
        </View>

        <View style={{flexDirection:'row',flex:1}}>
          <Text>icon</Text>
          <Text style={style.ModelName}>Samsung Galaxy S10</Text>
        </View>

        <View style={{flexDirection:'row',flex:1}}>

          <View style={{flexDirection:'row',flex:1}}>
            <Text>Icon</Text>
            <Text style={style.FeaturesText}>VoLTE</Text>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
            <Text>Icon</Text>
            <Text style={style.FeaturesText}>4G</Text>
          </View>

        </View>

        <View style={{flexDirection:'row',flex:1}}>

          <View style={{flexDirection:'row',flex:1}}>
            <Text>Icon</Text>
            <Text style={style.FeaturesText}>WifiCalling</Text>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
            <Text>Icon</Text>
            <Text style={style.FeaturesText}>GPS</Text>
          </View>

        </View>

        <View style={style.buttonContainer}>
          <Text style={style.buttonText}>View Details</Text>
        </View>
        


    </View>
 
    
   
  )
}
export default Diagnostics

