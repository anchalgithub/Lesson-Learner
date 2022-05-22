import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class StoryG3 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 3 Stories', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Text style = {styles.textBox}> Tiger Trouble </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>1. Build students’ background about Bengal and Siberian tigers.
Activate students’ prior knowledge about tigers. Ask: Where do tigers live? What role do they play in nature? Are there different types of tigers? Are they endangered? Display the National Geographic Wild Animals website pages for Bengal and Siberian tigers. Show students the photos and navigate the website to find additional information. Elicit from students that tigers are large mammals and top predators that live throughout Asia. Explain to students that tigers are the largest of the big cats, and all six remaining subspecies of tigers are endangered species. Bengal (Indian) tigers represent about half of the world's wild tigers. They are an icon of India and the Hindu culture. The largest population of Bengal tigers lives in the Sundarbans National Park and Tiger Reserve. The Sundarbans is one of the world’s largest tropical mangrove forests and is part of the Ganges River Delta on the Bay of Bengal. Another subspecies, the Siberian tiger, lives primarily in eastern Russia’s boreal forests. Although their population appears to be stable, it is estimated that there are only 400-500 Siberian tigers left in the wild. Siberian tigers have adapted to Russia’s boreal forests, which are dominated by evergreen trees that are characteristic of cool, northern latitudes. While the habitat of these two tiger subspecies is very different, the threats they face are quite similar.

2. Locate the geographic ranges for the Bengal and Siberian tigers.
Use the National Geographic MapMaker Interactive to locate the tiger habitats that will be described in the two videos:

Sundarbans, Bay of Bengal, India: Select “Asia” for the region, “India” for the country, and “Streets” for the map mode. Then zoom in until students see where the border between India and Bangladesh meets the Bay of Bengal.
Siberia, Eastern Russia: Select “Asia” for the region, “Russia” for the country, and “Streets” for the map mode. Then zoom in until students see the region of Siberia west of the Sea of Okhotsk.
Ask students to use the maps and what they learned in Step 1 to restate the geographic locations and habitats of the two tiger subspecies. Tell students that throughout the activity they will be asked to think about how the habitats and geography of the tigers impact their ecology, behavior, health, and conservation.

3. Introduce the National Geographic tiger videos.
Explain that students will view two videos to learn about Bengal and Siberian tigers and explore strategies and challenges involved in conserving tigers in the wild. To better understand the content of the videos, students will use a note-taking strategy that gives them certain themes to focus on while they watch. Distribute one copy of the Web graphic organizer worksheet to each student. Draw the same web graphic organizer on the board to show students where to write their themes. In the middle oval, write “Bengal Tiger.” In each of the four outer ovals, write one of the following themes: "Culture/Geography," "Conflicts," "Threats," and "Conservation." Tell students that the tiger is at the center of the web, so as they watch the videos, they should jot notes under each theme as it relates to the tiger. Make sure that students understand what each of the theme words mean. Explain that conservation is "the management of natural resources to prevent exploitation, destruction, or neglect."

4. Have students view the two tiger videos and take notes on specific themes.
Show students the National Geographic video “Tiger Prey” about Bengal tigers in India and have them complete their web graphic organizers as they watch. After viewing, have students work in pairs to compare their notes related to the four themes. If they observed similar things about one of the video’s themes, then have them draw a circle around those notes on their paper. If they observed different things, have them underline those notes. Then discuss students’ notes as a class. Ask a student volunteer from each group to share similarities and differences in their groups’ notes for each theme. Explain that when people observe videos they often notice different parts or themes. Distribute another copy of the Web Graphic Organizer worksheet and tell students to write “Siberian Tiger” in the middle oval. Have students use the same viewing strategy to organize their notes about the video. Show students the National Geographic video “Russia’s Tigers” about Siberian tigers. After viewing, have students work in pairs to compare and discuss their notes with the class as they did before.

5. Use a Venn diagram to compare and contrast Bengal and Siberian tigers.
Tell students they will use their web worksheet notes to compare and contrast Bengal and Siberian tigers based on the four focus themes they have reviewed: culture/geography, conflicts, threats, and conservation. Distribute the Venn Diagram worksheets and explain how students will use the diagram to describe similarities and differences between the two tigers. Have students work in pairs or small groups. Remind students to focus on the four themes, rather than the physical features and general ecology of the tigers. If students require assistance or additional background information, replay the videos or display the National Geographic Wild Animals website again. Have students share their Venn diagrams with the rest of the class. Discuss similarities and differences between the animals and address any misconceptions students might have.

 

6. Have students write a conservation-themed acrostic poem about tigers.
Ask students to think about what they have learned during the activity. Tell them that they will write a conservation-themed acrostic poem about one of the two tiger subspecies. Explain that an acrostic poem is one that uses letters in a topic word to begin each line of the poem. Write an example on the board. For example, if the topic word is “DOG,” then an acrostic poem could be: Line 1: Dependable friend; Line 2: Obeys me most of the time; Line 3: Going to the park to play. Explain to students that they should use the word “TIGER” for their topic word, but they can select one of the tigers (Bengal or Siberian) to write about. They should also make sure that their poems reflect what they learned about the four themes in the videos: culture/geography, conflicts, threats, and conservation. Have students share their poems with the rest of the class. If time allows, have students color their poems and turn them into a classroom display.

7. Explain how students can find out more about tigers and other endangered big cats.
At the end of the activity, encourage students to access National Geographic’s Big Cats Initiative website. Explain that the site includes videos, images, and articles that will teach them more about the strategies and challenges involved in conserving big cat populations throughout the world.</Text>



<View> 
<Text style = {{fontSize:17, marginLeft:50, marginTop:6850, fontFamily : 'times new roman'}}>  Remain tuned for new topics. </Text>
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