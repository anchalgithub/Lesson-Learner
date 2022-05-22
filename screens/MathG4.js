import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class MathG4 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 4 Math', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Text style = {styles.textBox}>Save the Plankton, Breathe Freely</Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>1. Discuss Earth’s oxygen resources.
Ask: Where does the oxygen we breathe come from? Explain to students that rainforests are responsible for roughly one-third (28%) of the Earth’s oxygen but most (70%) of the oxygen in the atmosphere is produced by marine plants. The remaining 2 percent of Earth’s oxygen comes from other sources. The ocean produces oxygen through the plants (phytoplankton, kelp, and algal plankton) that live in it. These plants produce oxygen as a byproduct of photosynthesis, a process which converts carbon dioxide and sunlight into sugars the organism can use for energy. One type of phytoplankton, Prochlorococcus, releases countless tons of oxygen into the atmosphere. It is so small that millions can fit in a drop of water. Prochlorococcus has achieved fame as perhaps the most abundant photosynthetic organism on the planet. Dr. Sylvia A. Earle, a National Geographic Explorer, has estimated that Prochlorococcus provides the oxygen for one in every five breaths we take.

2. Have students collect and analyze data.
Distribute a copy of the worksheet Breath Calculations to each student. Then divide students into small groups of three to measure and record the number of breaths taken in 30 seconds. Ask them to assign roles: timer, breather, and data recorder. After all groups have collected and recorded their data, have students independently calculate how many breaths they take in one minute, one hour, and one day. Finally, have students calculate the number of breaths that come from the phytoplankton, Prochlorococcus.

3. Discuss the importance of phytoplankton and ways humans can positively influence phytoplankton levels and overall ocean health.
Explain to students that phytoplankton form the base of the marine food web. The health of all organisms in the ocean is connected to the health of phytoplankton. Use the provided Carbon Cycle illustration and information in the Background & Vocabulary tab of this activity to build students' content knowledge about phytoplankton's role in oxygen production and the carbon cycle. Ask: Why is it important that we protect our oceans and the plankton that live in them? What are some ways we can protect the ocean? Explain to students that they can help protect plankton by decreasing pollution, using less energy, urging individuals and companies to stop destroying habitat on land and in the ocean, and encouraging others to stop overharvesting ocean wildlife. An important part of saving the ocean is working together and educating others about why it is important.

4. Have students create a t-shirt or bumper sticker.
Have students create a t-shirt or a bumper sticker to increase public awareness about the problem with their own ocean health outreach slogan; for example, Save the Phytoplankton—Breathe More Air!</Text>




<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:2690, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
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
button:{
width:300,
height:30,
alignSelf:'center',
padding:20,
backgroundColor:'#B5EFF1',
margin:30,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2
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