import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class StoryG1 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 1 Stories', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Image style ={{width :320,height:300,marginTop:1, marginLeft:2}} source ={require ('../assets/cat.jpg')}/>
<Text style = {styles.textBox}> Big Cats : Case Study </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>Lions, tigers, and other big cats occupy a special place in the human imagination as beautiful, graceful, and dangerous. But these top predators have more to fear from humans than humans do from them. Many of these once-prolific species are endangered from poaching, territory loss, and climate change. Learn about these vital creatures through the resources in this collection.</Text>



<View> 
<Text style = {{fontSize:17, marginLeft:15, marginTop:150, fontFamily : 'times new roman'}}>  As of right now, there not many articles in this category but remain tuned for new topics. </Text>
</View>

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