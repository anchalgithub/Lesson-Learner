import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class StoryG4 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 4 Stories', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>



<Text style = {styles.textBox}> Tigers 101 </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>Instead of an article/activity, we are going to be uploading a link for you to watch. Click on it and have fun!
</Text>

<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}} onPress={ ()=> Linking.openURL('https://www.nationalgeographic.org/video/tigers-101/') }>https://www.nationalgeographic.org/video/tigers-101/
</Text>


<View> 
<Text style = {{fontSize:17, marginLeft:50, marginTop:10, fontFamily : 'times new roman'}}>  Remain tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade4')}}> 
<Text style = {styles.textBox2}> Go Back </Text>
</TouchableOpacity>
</View>


</View>
)
}
}


const styles = StyleSheet.create({


button2:{
width:100,
height:30,
alignSelf:'center',
padding:20,
backgroundColor:'teal',
margin:30,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2
},

textBox:{
height:65,
alignSelf:'center',

textAlign:'center',
fontSize:15,
fontWeight: 'bold',
color:"black",
width:200,
fontFamily:'Papyrus'
},


textBox2:{
height:65,
alignSelf:'center',
marginTop:-10,
textAlign:'center',
fontSize:15,
fontWeight: 'bold',
color:"white",
width:135,
fontFamily:'Papyrus'
},
})