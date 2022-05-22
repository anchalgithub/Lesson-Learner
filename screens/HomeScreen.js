import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import {Header} from 'react-native-elements'

export default class HomeScreen extends React.Component{
render(){
return(
<View style = {{flex:1, backgroundColor:'turquoise'}}>
<Header backgroundColor = {'teal'} centerComponent = {{text: ' 📚Lesson Learner📚', style :{color:'white', fontSize:17, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Welcome to a brand new way to learn lessons outside of school!</Text>

<Text style = {{height:65,
textAlign:'center',
fontSize:15,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'}}>This application is for you to select your grade, a subject and then a topic to do. After completing the task, don't forget to share it with us. Teachers can also visit this app to plan for lessons in school. The best thing about this? Oh, its free! So, what are you waiting for? Join our family!  *All credits go to National Geographic! Thanks to them!* </Text>

<Text> </Text>
<Text> </Text>
<Text> </Text>

<Text style = {{fontSize:20, marginLeft:65, marginTop:100, fontFamily : 'times new roman'}}>Which grade are you in?</Text>

<View>
<TouchableOpacity style = {styles.goButton} onPress = {()=>{this.props.navigation.navigate('Grade1')}}>
<Text style = {styles.buttonText}>Grade 1</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style = {styles.goButton} onPress = {()=>{this.props.navigation.navigate('Grade2')}}>
<Text style = {styles.buttonText}>Grade 2</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style = {styles.goButton} onPress = {()=>{this.props.navigation.navigate('Grade3')}}>
<Text style = {styles.buttonText}>Grade 3</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style = {styles.goButton} onPress = {()=>{this.props.navigation.navigate('Grade4')}}>
<Text style = {styles.buttonText}>Grade 4</Text>
</TouchableOpacity>
</View>
<View>

<TouchableOpacity style = {styles.goButton} onPress = {()=>{this.props.navigation.navigate('Grade5')}}>
<Text style = {styles.buttonText}>Grade 5</Text>
</TouchableOpacity>
</View>
<View>

<TouchableOpacity style = {{width:170,
height:1,
alignSelf:'center',
padding:20,
backgroundColor:'teal',
margin:15,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2,}} onPress = {()=>{this.props.navigation.navigate('REG')}}>

<Text style = {{height:90,
alignSelf:'center',
marginTop:-10,
textAlign:'center',
fontSize:13.5,
fontWeight: 'bold',
color:"white",
width:160,
fontFamily:'Papyrus'}}>Register to Add Content</Text>
</TouchableOpacity>
</View>

<Text style = {{fontSize:17, marginTop:20, fontFamily : 'Papyrus', fontWeight:'bold', marginLeft:10, textAlign:'center',}}>Remember to share your work with us at '#LessonLearner' and '#LessonL&NationalGeo'!</Text>
<Text style = {{fontSize:15, marginTop:20, fontFamily : 'Papyrus', fontWeight:'bold', marginLeft:10, textAlign:'center',}}>*Please note that these #'s are not real. I've only put it here for fun!*</Text>
<Text style = {{fontSize:17, marginLeft:55, marginTop:20, fontFamily : 'times new roman'}}>More grades coming out soon!</Text>

</View>
)
}
}

const styles = StyleSheet.create({
goButton:{
width:150,
height:1,
alignSelf:'center',
padding:20,
backgroundColor:'#CCF2FF',
margin:15,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2,
},


buttonText:{
height:65,
alignSelf:'center',
marginTop:-10,
textAlign:'center',
fontSize:20,
color:"black",
width:135,
fontFamily:'Papyrus'
},

});