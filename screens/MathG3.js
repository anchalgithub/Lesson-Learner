import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class MathG3 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 3 Math', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Text style = {styles.textBox}>Size Me Up—to a Blue Whale!
 </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>1. Introduce the size and weight of a blue whale.
Project the graphic Extreme Measures on the board. Invite volunteers to describe what the graphic shows. Then read aloud the caption. Ask: How does comparing a blue whale to an everyday object like a bus help you understand its size?

 

2. Have students research and record the length of six ocean organisms.
Distribute a copy of the worksheet Size Me Up—to Ocean Animals! to each student. Divide the class into six small groups. Scroll through the organisms in the Marine Organisms photo gallery. Have each group use library resources to research the size (length) and interesting facts about one of the animals on their charts. Then have groups fill in column 2 in the worksheet (metric measurements) and share their findings with the class.

 

3. Ask students to convert measurements and compare their bodies to the length of marine organisms.
Tell the class that since they have one measurement for each organism’s length, they can convert their findings into English, metric system, and/or “Unifix” units using conversions listed in the worksheet key. Explain that a “Unifix” is an unconventional unit of measurement. One Unifix Cube equals one inch; therefore, one foot equals twelve Unifix Cubes. For example, 94 feet is the equivalent of 1,128 Unifix Cubes (94 x 12). After students have completed their conversions and written them in their charts, have them collect data on themselves. Ask students to use measuring tape to find parts of their bodies that are comparable in length to the length of the organisms they just researched. For example, a student could measure his or her pinky finger at two inches long and note that it is a similar size to an Antarctic krill.

 

4. Discuss students' discoveries about the marine organisms’ lengths.
Ask: How many gulper eels does it take to equal the length of one African pompano? How many viperfish to equal a blue whale? Which animal was about the same length as your body? Encourage students to share facts they have learned about these ocean animals and their sizes. Record the data on the board. Discuss students' findings and results.

 

5. Have students compare their combined lengths to the length of a blue whale.
Instruct students to lay head to foot in a straight line across the length of the classroom floor. Use a tape measure to determine the length of the group. Write the length on the board. Then ask: Is our class longer or shorter than a blue whale? What are some other things that compare in size to a blue whale? A particular vehicle? A part of the school building? Wrap up the activity with a discussion of the following questions: How does your body compare in size to ocean animals? What does that tell you about the size of the ocean?</Text>




<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:2490, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade3')}}> 
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