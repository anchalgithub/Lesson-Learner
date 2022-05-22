import React from 'react';
import {Text, View, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid, TouchableOpacity, Alert} from 'react-native'
import {Header} from 'react-native-elements'
import db from '../config'

export default class REG extends React.Component{

constructor(props){
super(props);
this.state={
  firstName: '',
  secondName :'',
  email: '',
  writeText: '',
  type:'',
}
}

submitStory = () => {
db.collection ("info").add({
firstName: this.state.firstName,
secondName: this.state.secondName,
email: this.state.email,
phoneNo: this.state. phoneNo,
type : this.state.type
})
this.setState({
firstName: '',
secondName : '',
email: '',
phoneNo: '',
type :''
})
alert("Your registration has been received! We will contact you within 48 hours with more details on how uploading on 'Lesson Learner' will work! Welcome to the family👪")
}

render(){
return(
<View style = {{flex:1, backgroundColor:'white'}}>
<Header backgroundColor = {'teal'} centerComponent = {{text: 'Register', style :{color:'white', fontSize:25, fontFamily: 'Papyrus'}}}/>

<Text> </Text>

<KeyboardAvoidingView style = {styles.container} /*This is a prop*/behavior= "padding" enabled/>

<TextInput style={styles.inputBox} placeholder="First Name"   onChangeText= {(text)=>{ this.setState({firstName: text})}} value={this.state.firstName} />
<TextInput style={styles.inputBox} placeholder="Last Name"   onChangeText= {(text)=>{ this.setState({secondName: text})}} value={this.state.secondName} />
<TextInput style={styles.inputBox2} placeholder="Email" onChangeText= {(text)=>{ this.setState({email: text})}} value={this.state.email}/>
<TextInput style={styles.inputBox3}  placeholder="Phone Number" onChangeText= {(text)=>{ this.setState({phoneNo: text})}} value={this.state.phoneNo}/>
<TextInput style={styles.inputBox3}  placeholder="Type of Content" onChangeText= {(text)=>{ this.setState({type: text})}} value={this.state.type}/>

<TouchableOpacity onPress = {this.submitStory}>
<Text style = {styles.subMit}>Submit!</Text>
</TouchableOpacity>


<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('HomeScreen')}}> 
<Text style = {styles.textBox2}> Go Back </Text>
</TouchableOpacity>
</View>
</View>
)
}
}


const styles = StyleSheet.create({

inputBox:{
width: 330,
height: 40,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
borderBottomColor:'teal'
},

inputBox2:{
width: 330,
height: 40,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
borderBottomColor:'teal'
 },

inputBox3:{
width: 330,
height: 40,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
marginTop:20,
borderBottomColor:'teal'
},

subMit:{
textAlign: 'center',
color: 'white',
fontWeight: 'bold',
fontFamily:'Papyrus',
justifyContent: 'center',
alignSelf: 'center',
backgroundColor: 'teal',
width: 100,
height: 40,
fontSize:20
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

})
