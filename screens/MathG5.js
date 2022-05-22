import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class MathG5 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 5 Math', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>

<Text style = {{
height:65,
textAlign:'center',
fontSize:17,
fontWeight: 'bold',
color:"black",
marginTop:10,
fontFamily:'Papyrus'
}}> Choose an article to read about! </Text>


<Text style = {styles.textBox}>The Importance of Sharks: You Do the Math!</Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>1. Build students' background about a basic marine food pyramid.
Display the provided Marine Ecological Pyramid diagram. Explain to students that a food pyramid shows how organisms are connected to one another in a food chain, as well as how much energy is transferred from one trophic level to the next. Tell students that they will play a game that includes a top predator (gray reef shark), an intermediate predator (black grouper), and a first-order consumer (Atlantic blue tang). Scroll through the photo gallery Organisms in a Marine Food Pyramid to show students what each of these organisms looks like. Explain to students that they will play a game that shows what happens when shark populations decrease in a coral reef ecosystem. Ask: What do you think it means to have a "balanced" ecosystem? Why is a balanced coral reef ecosystem important? Write students' responses on the board.

2. Introduce the shark math game and assign roles.
Explain to students that the game will simulate predator/prey relationships in a coral reef ecosystem. Each student will play a role as an organism. Assign 3 students to be gray reef sharks, and 27 students to be black groupers. If you have more than 30 students, have some student pairs join hands and act as one organism. Spread the 200 Atlantic blue tang fish that you cut from construction paper around the classroom floor. Explain that the black groupers will move about the classroom collecting (consuming) as many Atlantic blue tang fish as they can using only one hand and picking up just one at a time. They are to put the collected fish into an envelope. The gray reef sharks will tag and escort black groupers back to their seats. There will be six rounds, or trials, of the game. Each trial will last for 45 seconds. Ask the sharks: How many black groupers do you predict you will catch? Ask the black groupers: How many Atlantic blue tang do you predict you will catch? Write their predictions on the board.


3. Have students play Session 1 of the game.
Project the Predator/Prey Simulation worksheet on the board. Have students complete three trials, of 45 seconds each, with three sharks. At the end of each trial, record the class data on the board. Ask the gray reef sharks to provide the number of black groupers they tagged and the black groupers to provide the total number of Atlantic blue tang fish they collected.



4. Have students play Session 2 of the game.
Have students complete three more trials using only two gray reef sharks; the third shark can now become the timer. Have students repeat the data collection and record the results on the board.


5. Have students calculate averages.
Remind students that they can calculate an average by adding up the numbers and dividing by how many sets of numbers there are. Have students calculate the average number of black grouper tagged in Session 1. Then have students calculate the average number of Atlantic blue tang fish collected in Session 1. Ask students to calculate averages for Session 2.


6. Analyze the data as a class.
Refer to the data collected on the board. Ask:

What was the average number of black grouper tagged in each session? What was the average number of Atlantic blue tang fish collected in each session?
What happened to the black grouper population when the number of sharks was reduced?
What happened to the Atlantic blue tang fish population when the number of sharks was reduced?
Did the results match your prediction? Explain.
Why do you think that there were more Atlantic blue tangs after we removed a shark? What does this tell you about the importance of sharks?
Make sure students understand that with less sharks in the ecosystem there will be more black groupers; less sharks means they don't need as many black groupers to feed on. More black groupers means less Atlantic blue tang fish, because the black groupers need more food.


7. Have students make connections between shark preservation and balanced coral reef ecosystems.
Explain to students that it is estimated that at least 90% of all marine predators have already been lost from the oceans, including tuna, billfish, and sharks. Gray reef sharks affect the health of a reef by regulating the number of smaller predators like black groupers. If the gray reef sharks disappear, the smaller predators, like black grouper, take over and wipe out the primary consumers, like Atlantic blue tang. Once that happens, algae can grow unchecked and smother the reefs. Project and scroll through the Coral Reef Ecosystems photo gallery. As you look at each image, ask: Is this a healthy or unhealthy coral reef ecosystem? What clues tell you so? Then explain to students that corals are made up of both animal (polyp) and plant (algae) parts that work together to help the coral grow, survive, and build the reef structure. That's why corals are fragile and need the right, balanced, conditions to survive. The algae (plant parts) need sunlight, clear water, and nutrients; the polyps (animal parts) need food and nutrients from the algae and the surrounding water. When the coral or its surrounding environment get out of balance, the coral and all the organisms living on the reef are affected. For example, if the coral's algae or other algae grow too much because there aren't enough Atlantic blue tangs to eat the algae, the coral polyp can be smothered and die. Sharks also regulate the big parrotfish that feed on coral. When the sharks disappear, parrotfish can move in and destroy large expanses of coral reef.

8. Discuss the importance of marine predators and coral reef health.
Ask: How can humans help protect marine predators? Invite students to share their ideas. Then explain that sustainable fisheries management, the use of more selective fishing gear, and only purchasing and eating sustainable food at home and in restaurants are positive ways to help marine predators. Show students the National Geographic Seafood Decision Guide and Monterey Bay Aquarium's Seafood Watch and encourage them to use the guides to learn which types of seafood are sustainable. Ask: Why are balanced coral reef ecosystems so important? Have students revisit their ideas on the board. Discuss their ideas and then explain that coral reefs support 4,000 species of fish, 800 species of hard corals, and hundreds of other species. Coral reefs also create a barrier between the land and the sea and absorb wave energy and prevent land erosion. People benefit from healthy coral reefs too. Important medicines are made from ocean organisms and there is potential for new medical discoveries. People who live near reefs make money from fishing and from tourism activities such as SCUBA diving, snorkeling, glass-bottom boat rides, and fishing.


9. Discuss Marine Protected Areas (MPAs).
Help students locate Medes Island Marine Reserve on a map or globe. Explain that National Geographic Explorer Enric Sala did some important research in this reserve. The Medes Islands Protected Zone covers an area of 94 hectares and is a no-take zone to allow for the recovery of marine life. In just 5-7 years time, this protected ecosystem recovered exponentially as compared to unprotected areas nearby. The biodiversity of species increased 21%, the size of the species increased 28%, the amount of species increased 166%, and the biomass increased 446%. The recovery of the Medes Islands Protected Zone helped the organisms, the habitat, and the people who benefit from the ecosystem because of tourism. Ask: Do you think that it is important to have more marine protected areas? Why or why not? </Text>




<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:7400, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade5')}}> 
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