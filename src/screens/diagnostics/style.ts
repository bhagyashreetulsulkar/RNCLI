import {StyleSheet} from 'react-native'
import dimensions from '../../utility/dimensions'
const style = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingVertical:dimensions.viewHeight(16),
        paddingHorizontal:dimensions.viewWidth(16),
        position: "absolute",
        width: dimensions.viewWidth(345),
        height:dimensions.viewHeight(306) ,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
    },

    // container:{
    //     display: "flex",
    //     alignItems: "flex-start",
    //     alignContent:"space-around",
    //     paddingVertical:dimensions.viewHeight(16),
    //     paddingHorizontal:dimensions.viewWidth(16),
    //     position: "absolute",
    //     width: dimensions.viewWidth(345),
    //     height:dimensions.viewHeight(138) ,
    //     backgroundColor: "#EBC2AF",
    //     borderRadius: 24,    
    //     flex:1
    // },

    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: {width:dimensions.viewWidth(34), height: dimensions.viewHeight(13)},
        shadowOpacity: 0.88,
        shadowRadius: 16,
      },

    elevation: {
        elevation: 16,
        shadowColor: '#000000',
      },
    
    headingText:{
        width: dimensions.viewWidth(220),
        height: dimensions.viewHeight(28),
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: 24,
        lineHeight: dimensions.viewHeight(28),
        letterSpacing:-0.48,//enum to px doubt
        color: "#141414",
        //doubt 
         order: 0, flexGrow: 0,
      },

    reloadIcon:{
        position: "absolute",
        left: dimensions.viewWidth(8.33),
        right: dimensions.viewWidth(8.33),
        top: dimensions.viewHeight(12.48),
        bottom: dimensions.viewHeight(12.47),
        background: "#0A2885",     
      },

    uptodateText:{
        width: dimensions.viewWidth(80),
        height: dimensions.viewHeight(24),        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: dimensions.viewHeight(24),
        display: "flex",
        alignItems: "center",
        letterSpacing: -0.08,
        color: "#0A2885",
        //flex: "none",
        order: 1,
        flexGrow: 0,
        },

      deviceText:{ 
        width: dimensions.viewWidth(217),
        height: dimensions.viewHeight(20),      
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: dimensions.viewHeight(20),
        letterSpacing:-0.08,
        color: "#141414",
        //flex: none
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        },

      deviceSubText:{
        width: dimensions.viewWidth(217),
        height: dimensions.viewHeight(20), 
        //fontFamily: 'JioType',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: dimensions.viewHeight(20),
        letterSpacing: -0.08,
        color:"#000000a6",
        //flex: none,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        },

      ModelName:{
        width: dimensions.viewWidth(273),
        height: dimensions.viewHeight(20),
        //fontFamily: 'JioType',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight:dimensions.viewHeight(20),
        letterSpacing: -0.08,
        color: "#141414",
        //flex: none,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        },

      FeaturesText:{
        width: dimensions.viewWidth(128.5),
        height: dimensions.viewHeight(20),
       // font-family: 'JioType',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: dimensions.viewHeight(20) ,
        letterSpacing:-0.08 ,
        color: "#141414",
        //flex: none,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
       },
      
      buttonText:{
        width: dimensions.viewWidth(94),
        height: dimensions.viewHeight(24),
        //font-family: 'JioType',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: dimensions.viewHeight(24),
        display: "flex",
        alignItems: "center",
        letterSpacing: -0.08 ,
        color: "#0A2885",
        //flex: none,
        order: 1,
        flexGrow: 0,
      },

      buttonContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        paddingVertical:dimensions.viewHeight(16),
        paddingHorizontal:dimensions.viewWidth(16),
        width: dimensions.viewWidth(315),
        height:dimensions.viewHeight(30) ,
        borderRadius: 24,
        borderWidth:1,
        borderColor:"#00000033",
       
    },
        
})
export default style