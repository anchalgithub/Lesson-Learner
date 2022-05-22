import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class StoryG2 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 2 Stories', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Text style = {styles.textBox}> Cats and Their Coats </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>1. Activate students’ prior knowledge about big cats and their physical features.
Discuss with students what they think of when they hear “big cats.” Ask: What pictures come to mind? What are some types of big cats that you can think of? Elicit from students that big cats include lions, tigers, leopards, cheetahs, and other large predatory cats. Show students the first three websites, which are National Geographic photo gallery images of lions, tigers, and leopards. Ask: What types of big cats are these? How do you know? As each image is shown, prompt students to describe the specific physical characteristics of each cat, including the color and pattern of their different coats. For example, ask: What color is the cat’s coat? Are there any patterns on its coat? Does it have any patterns on its face? Elicit from students that lions are slightly smaller than tigers and have a mostly solid, light brown coat. Males also have manes that can be colors from light to dark brown, almost black. Tigers are the largest of the big cats. They are reddish tan with dark stripes. They are white on their underside and have white spots above each eye. Leopards are smaller than lions and tigers and are light brown with distinct dark spots.

 

2. Have students identify big cats and their roars.

As a class, have students explore the remaining three websites, which are each big cat’s National Geographic Animals page, and practice correctly identifying the animals. Also have students try to predict and make the roaring sound of each big cat. Then play the audio recording of each from its page and see if students’ predictions were correct. Play each recording again and see if they can tell a difference between the roar of the lion, tiger, and leopard.

3. Have students identify and distinguish between the different types of big cat habitats.
Explain to students that a habitat is the environment where an animal lives throughout the year or for shorter periods of time. For example, the habitat of a whale shark is the open ocean; the habitat of a prairie dog is the prairie. Ask: Where do big cats live? What is their habitat like? Do they all live in the same type of habitat? Elicit from students that most big cats live throughout parts of Africa and Asia, and their habitats can be very different. Since their habitats are different, big cats look different and use different strategies to survive. View each big cat’s National Geographic Animals page again and point out the geographic range of each featured big cat (lion, tiger, leopard). Then revisit the National Geographic photo gallery images of each big cat and ask students to describe the habitats they see. Have students correctly identify the habitat images as savanna (grasslands with few trees and large, flat areas of grasses) or forest (habitats filled with trees and underbrush). On the left side of a sheet of paper, have students list the terms savanna and forest. On the right side, have students list the terms lion, tiger, and leopard.

4. Have students recall which big cat lives in each of the habitats described.
Tell students that they will now recall which big cat lives in each of the habitats described. Ask: What does the term camouflage mean? Elicit from students that many animals use camouflage to help them blend in to their surrounding habitat, or environment. Ask: Have you ever heard of the term camouflage? Why would an animal need to blend in to its environment? Elicit from students that camouflage helps protect animals from predators and other threats. It also helps them blend in and go undetected as they hunt. Students may be familiar with camouflage used by hunters or people in the military. In pairs or small groups, have students use their papers from Step 3 and draw a line to match which big cat (lion, tiger, or leopard) lives in each of the different habitats (savanna or forest). Encourage them to recall the big cats’ coat colors and patterns to guide them in selecting the correct habitat. Have students view the National Geographic photo gallery images again. Discuss student answers and whether or not they correctly matched the habitats to the big cats. Explain that Africa’s lions live in the grasses of the savanna; African leopards live in the tall grasses and trees of the savanna; and Asian tigers inhabit forests. Explain that the solid, light brown coat of the lion acts as camouflage and helps it hide in the dry, low-lying grasses of the African savanna. The tiger’s reddish-tan tone and dark stripes help it hide in Asia’s shadowy forest. The leopard’s light coat with dark spots helps it hide in the tall grasses and trees of the African savanna. Discuss that both lions and leopards live in savanna habitat but, unlike lions, leopards can climb and live in trees.

5. Have students draw coats that act as camouflage in their chosen habitat.
Have students review what they learned about the coats of big cats and how coats help big cats survive in different habitats. Remind students that the color and pattern of big cats’ coats acts as camouflage and helps them blend in to the habitats in which they live. This helps protect animals and helps them hunt. Tell students to imagine the habitat of one of their favorite places. They can think about their favorite vacation spot, an activity they like to do, or where they go to have fun with their friends or family. Tell them to imagine playing a game of hide-and-seek in that place. They need to design a coat of camouflage that they can wear to hide in the habitat of that place. Provide a few examples, such as a gray, striped coat to wear while they sit on the couch and watch television, or a blue, wavy-patterned coat to wear while swimming in the ocean. Tell students their drawing must include color and pattern and that they should be ready to describe the texture of their coats. On the board, model how to draw a simplified coat (or t-shirt) shape. Have students copy the coat shape onto their own paper. Give students time to think about and color their coats. Then have them share their designs with their classmates. They must describe their place (habitat) and explain how their coat’s color, pattern, and texture (camouflage) will help them hide in their place.</Text>



<View> 
<Text style = {{fontSize:17, marginLeft:50, marginTop:5850, fontFamily : 'times new roman'}}>  Remain tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade2')}}> 
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