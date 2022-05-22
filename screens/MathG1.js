import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class MathG1 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 1 Math', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Image style ={{width :310,height:300,marginTop:1, marginLeft:2}} source ={require ('../assets/castle.jpg')}/>
<Text style = {styles.textBox}> Eilean Donan Castle </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>A castle sits on Eilean Donan, an island in Loch Duich in Scotland. </Text>



<Image style ={{width :310,height:300,marginTop:5, marginLeft:2}} source ={require ('../assets/dino.jpg')}/>
<Text style = {styles.textBox}>  Pterosaurs </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>Tapejara lived 115 million years ago, and had a wingspan of 4 meters (13 feet). Its large head and crest reached up to 87 centimeters (2.8 feet) high. Scientists suggest that Tapejara may have used the head crest as a "sail" while moving across water, while others believe its size and color helped with finding a mate. </Text>

<Text> </Text>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade1')}}> 
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
marginTop:-10,
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