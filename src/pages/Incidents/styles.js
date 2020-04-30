import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'



export default StyleSheet.create({
   container:{
       flex:1,
       paddingHorizontal :24,
       paddingTop:Constants.statusBarHeight + 20,
   },
   header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
   } ,
   headerText:{
       fontSize:15, 
       color :'#737380',       
   },
   headerTextBold:{
       fontWeight: 'bold'
   },
   title:{
       fontSize:30,
       marginBottom:16,
       marginTop:28,
       color:'#13113a'
   },
   description:{
       fontSize:16,
       lineHeight:24,
       color:'#737380'
   },
   incidentList:{
       marginTop:20
   },
   incident:{
       padding :24,
       borderRadius:8,
       backgroundColor : '#fff',
       marginBottom:10
   },
   incidentProperty:{
       fontSize:16,
       color:'#41414d',
       fontWeight:'bold'
   },
   incidentValue:{
        fontSize:14,
        color:'#737380',
        marginTop:5,
        marginBottom:14        
   },

   detailsButton:{
       flexDirection:'row',
       justifyContent:"space-between",
       alignItems : 'center'
   },

   detailsButtonText:{
    color:'#e02041',
    fontSize:15,
    fontWeight:'bold'
}




})      