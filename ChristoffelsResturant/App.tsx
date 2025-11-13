import React, { useState } from "react"; // (The IIE, 2025).
import {View,Text,TextInput,Button,TouchableOpacity,FlatList,ScrollView,StyleSheet,SafeAreaView,} from "react-native"; // (The IIE, 2025).
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// This is the import for the app for the view, text, textinput, buttons, touchableopacity for the buttons,flatlist, scrollview and stylesheet components for this application. // (React Native/ Meta Platforms Inc, 2025).
type Dish = { // This identifies the type of dish. // (React Native/ Meta Platforms Inc, 2025).
name: string; // This outputs the name of each dish. // (React Native/ Meta Platforms Inc, 2025).
description: string; // This outputs the description for each dish. // (React Native/ Meta Platforms Inc, 2025).
course: "Starter" | "Main" | "Dessert"; // This outputs each dish in their respective categories. // (React Native/ Meta Platforms Inc, 2025).
price: number; // This outputs the price for each of the dishes. // (React Native/ Meta Platforms Inc, 2025).
};

const Stack = createNativeStackNavigator();

const RestaurantApp = () => { // This is the start of the app // (React Native/ Meta Platforms Inc, 2025).
const [dishes, setDishes] = useState<Dish[]>([ // This is the section that outputs the menu when the user firsts opens the app. // (React Native/ Meta Platforms Inc, 2025).
// This section is to output the name,description and price of the Starters. // (React Native/ Meta Platforms Inc, 2025).
{ name: "Mushrooms and white sauce", description: "Delicious mushrooms in a creamy tasty white sauce.", course: "Starter", price: 44 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Smoked salmon with prawns", description: "Smokey salmon made in a pan & served with juicy & delicious prawns.", course: "Starter", price: 56 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Butternut soup", description: "Smooth butternut soup with a little bit of nutmeg.", course: "Starter", price: 24 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Garlic bread", description: "Crispy bread that is served with delicious garlic spread.", course: "Starter", price: 22 }, // (React Native/ Meta Platforms Inc, 2025).
// (React Native/ Meta Platforms Inc, 2025).
// This section is to output the name,description and price of the Main courses.
{ name: "Macaroni & cheese", description: "Classic baked macaroni covered in a rich, creamy cheddar cheese sauce.", course: "Main", price: 110 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Ribs with onion rings", description: "Juicy ribs served with a side of well fried onion rings.", course: "Main", price: 289 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Portuguese Pizza", description: "Pizza straight from the Lisbon, variety of toppings to choose from.", course: "Main", price: 120 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Beef Stroganoff", description: "Salted beef strips sauced in creamy mushroom sauce served with rice. ", course: "Main", price: 89 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Lasagne", description: "Layers of pasta, mince, and white sauce with a layer of cheese baked to crispy perfection.", course: "Main", price: 52 }, // (React Native/ Meta Platforms Inc, 2025).
// (React Native/ Meta Platforms Inc, 2025).

// This section is to output the name,description and price of the Desserts.
{ name: "Ice-cream", description: "Three scoops of ice cream flavours to choose from- Chocolate, Vanilla, Strawberry, Bubblegum.", course: "Dessert", price: 18 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Malva pudding", description: "A well known South African moist & sponge pudding served with creamy custard.", course: "Dessert", price: 25 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Chocolate cake", description: "A Rich choclate cake served with alot of frosting.", course: "Dessert", price: 35 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Strawberry gelato", description: "A italian gelato made perfectly with freshly grown strawberries.", course: "Dessert", price: 28 }, // (React Native/ Meta Platforms Inc, 2025).
{ name: "Tiramisu", description: "A classic Italian dessert that comes with ladyfingers and a delicious mascarpone sauce.", course: "Dessert", price: 30 }, // (React Native/ Meta Platforms Inc, 2025).
]); // (React Native/ Meta Platforms Inc, 2025).

// (React.Dev/ Meta Platforms Inc, 2025).
const [newDish, setNewDish] = useState<Partial<Dish>>({}); //This is the add the variable to the component. // (React.Dev/ Meta Platforms Inc, 2025).
const [filter, setFilter] = useState<{ Starter: boolean; Main: boolean; Dessert: boolean }>({ //This is the list of components that the variable will be added to. // (React.Dev/ Meta Platforms Inc, 2025).
Starter: false, // This will always start at false. // (React.Dev/ Meta Platforms Inc, 2025).
Main: false, // This will always start at false. // (React.Dev/ Meta Platforms Inc, 2025).
Dessert: false, // This will always start at false. // (React.Dev/ Meta Platforms Inc, 2025).
});


// (React.Dev/ Meta Platforms Inc, 2025).
const handleAddDish = () => { // This is a if statement that shows the dish name.description and price to the user. // (React.Dev/ Meta Platforms Inc, 2025).
if (newDish.name && newDish.course && newDish.price) { //This outputs the dish name, dish description and dish price// (React.Dev/ Meta Platforms Inc, 2025).
setDishes([...dishes, newDish as Dish]); // This creates an array to output those valuse. // (React.Dev/ Meta Platforms Inc, 2025).
setNewDish({}); // THis is the new array even tho it looks empty, there is information inside it that has been passed over. // (React.Dev/ Meta Platforms Inc, 2025).
}
};

// (React.Dev/ Meta Platforms Inc, 2025).
const filteredDishes = dishes.filter((dish) => { // (React.Dev/ Meta Platforms Inc, 2025).
if (!filter.Starter && !filter.Main && !filter.Dessert) return true; // (React.Dev/ Meta Platforms Inc, 2025).
return filter[dish.course]; // (React.Dev/ Meta Platforms Inc, 2025).
});

// (React.Dev/ Meta Platforms Inc, 2025).
const renderDish = ({ item }: { item: Dish }) => ( // (React.Dev/ Meta Platforms Inc, 2025).
<>
<Text style={styles.menuItem}> {/*(The IIE, 2025).*/}
{item.name} -R{item.price} {/*(The IIE, 2025).*/}
</Text> {/*(The IIE, 2025).*/}
<Text style={styles.menuDescription}> {/*(The IIE, 2025).*/}
{item.description ? item.description : "No description available"} {/*(The IIE, 2025).*/}
</Text> {/*(The IIE, 2025).*/}
</>
);

// (The IIE, 2025).
return (
<SafeAreaView style={styles.container}> {/*(The IIE, 2025).*/}
<ScrollView style={styles.scroll}> {/*(The IIE, 2025).*/}
{/* This is the menu section that outputs what is on the menu for the chef to check the course, description of the course and price accurately*/}
<Text style={styles.title}>Christoffel's Restaurant</Text> // (The IIE, 2025).
// (The IIE, 2025).
<Text style={styles.sectionTitle}>Starters</Text> {/*(The IIE, 2025).*/}
<FlatList // (The IIE, 2025).
data={filteredDishes.filter((d) => d.course === "Starter")} // (The IIE, 2025).
renderItem={renderDish} // (The IIE, 2025).
keyExtractor={(item) => item.name} // (The IIE, 2025).
scrollEnabled={false} // (The IIE, 2025).
/>
{/*(The IIE, 2025).*/}
<Text style={styles.sectionTitle}>Main Courses</Text> {/*(The IIE, 2025).*/}
<FlatList // (The IIE, 2025).
data={filteredDishes.filter((d) => d.course === "Main")} // (The IIE, 2025).
renderItem={renderDish} // (The IIE, 2025).
keyExtractor={(item) => item.name} // (The IIE, 2025).
scrollEnabled={false} // (The IIE, 2025).
/>

<Text style={styles.sectionTitle}>Desserts</Text> {/*(The IIE, 2025).*/}
<FlatList // (The IIE, 2025).
data={filteredDishes.filter((d) => d.course === "Dessert")} // (React.Dev/ Meta Platforms Inc, 2025)
renderItem={renderDish} // (React.Dev/ Meta Platforms Inc, 2025)
keyExtractor={(item) => item.name} // (React.Dev/ Meta Platforms Inc, 2025)
scrollEnabled={false} // (React.Dev/ Meta Platforms Inc, 2025)
/>

{/* This is to add the dish section of the application */}
<View style={styles.section}> {/*(The IIE, 2025).*/}
<Text style={styles.subtitle}>Add Dish</Text> {/*(The IIE, 2025).*/}

<Text>Dish name:</Text>{/*(The IIE, 2025).*/}
<TextInput // (The IIE, 2025).
style={styles.input} // (The IIE, 2025).
value={newDish.name || ""} // (React.Dev/ Meta Platforms Inc, 2025)
onChangeText={(text) => setNewDish({ ...newDish, name: text })} // (React.Dev/ Meta Platforms Inc, 2025)
/>

<Text>Dish description:</Text> {/*(The IIE, 2025).*/}
<TextInput
style={styles.input}
value={newDish.description || ""} // (React.Dev/ Meta Platforms Inc, 2025)
onChangeText={(text) => setNewDish({ ...newDish, description: text })} // (React.Dev/ Meta Platforms Inc, 2025)
/>

<Text>Course:</Text> {/*(The IIE, 2025).*/}
<View style={styles.row}> {/*(The IIE, 2025).*/}
{(["Starter", "Main", "Dessert"] as const).map((c) => ( // (React.Dev/ Meta Platforms Inc, 2025)
<TouchableOpacity key={c} style={[styles.courseButton, newDish.course === c && styles.courseSelected, // (React.Dev/ Meta Platforms Inc, 2025)
]}onPress={() => setNewDish({ ...newDish, course: c })} > // (React.Dev/ Meta Platforms Inc, 2025).
<Text>{c}</Text>
{/*(React.Dev/ Meta Platforms Inc, 2025).*/}
</TouchableOpacity>
))}


</View> {/*(The IIE, 2025).*/}
<Text>Price:</Text> {/*(The IIE, 2025).*/}
<TextInput style={styles.input} // (The IIE, 2025).
keyboardType="numeric" value={newDish.price ? String(newDish.price) : ""} onChangeText={(text) => setNewDish({ ...newDish, price: Number(text) })} /> // (React.Dev/ Meta Platforms Inc, 2025)
<Button title="Add Dish" onPress={handleAddDish} /> {/*(The IIE, 2025).*/}
</View> {/*(The IIE, 2025).*/}

{/* This is the filter section for the courses where the user can filter each course.*/}
<View style={styles.section}> {/*(The IIE, 2025).*/}
<Text style={styles.subtitle}>Filter Dishes</Text> {/*(The IIE, 2025).*/}
{(["Starter", "Main", "Dessert"] as const).map((c) => ( // (React Native/ Meta Platforms Inc, 2025).
<TouchableOpacity // (The IIE, 2025).
key={c} onPress={() => setFilter({ ...filter, [c]: !filter[c] })} style={styles.filterOption} > // (React Native/ Meta Platforms Inc, 2025).
<Text> {/* (React Native/ Meta Platforms Inc, 2025).*/}
{c} ({filter[c] ? "✓" : " "}) {/* (React Native/ Meta Platforms Inc, 2025).*/}
</Text> {/* (React Native/ Meta Platforms Inc, 2025).*/}
</TouchableOpacity> // (The IIE, 2025).
))}

<Button title="Clear Filter" onPress={() => setFilter({ Starter: false, Main: false, Dessert: false })} /> // This is the button used to clear the filter by course.
{/* (React Native/ Meta Platforms Inc, 2025).*/}
</View> // This the end of the view component. {/*(The IIE, 2025).*/}.
</ScrollView> // This is the end of the scrollview component. {/*(The IIE, 2025).*/}
</SafeAreaView> // This is the end of the safe area view component. // (The IIE, 2025).
);
};
// (The IIE, 2025).
export default RestaurantApp; // (The IIE, 2025).
// This is the stylesheet for all the react native components for this app. // (The IIE, 2025).
const styles = StyleSheet.create({ // This creates the stylesheet. // (The IIE, 2025).
container: { // This is the container with all the information inside for the app. // (The IIE, 2025).
flex: 1, // This creates a flex and its size is 1. // (The IIE, 2025).
backgroundColor: "#5a7fa3", // This is the background colour of the application. // (The IIE, 2025).
},

scroll: { // This is the scrollview feature of the app. // This allows the user to scroll on the app. // (The IIE, 2025).
padding: 20, // This sets the padding to 20 for scrollview feature of the app. // This adds padding and its value is 20. // (The IIE, 2025).
},

title: { //This is the title of the app. // (The IIE, 2025).
fontSize: 23, //This sets the font size to 23 for the title of the app. // (The IIE, 2025).
fontWeight: "bold", //This sets the font weight for the title of the app. // (The IIE, 2025).
color: "#fff", //This sets the color of the title for the app. // (The IIE, 2025).
marginBottom: 10, //This sets the bottom margin to 10 for the title. // (The IIE, 2025).
},

subtitle: { // This is the subtitle of the app that is used in the filter dish section. // (The IIE, 2025).
fontSize: 20, //This sets the font size to 20 for the subtitle of the app. // (The IIE, 2025).
fontWeight: "bold", //This sets the font weight gor the subtitle of the app. // (The IIE, 2025).
color: "#fff", //This sets the color of the subtitle for the app.// (The IIE, 2025).
marginBottom: 8, //This sets the bottom margin to 8 for the subtitle. // (The IIE, 2025).
},

sectionTitle: { //This is the section title of the app and it puts each course into its respective category. // (The IIE, 2025).
fontSize: 18, //This sets the fontsize. // (The IIE, 2025).
color: "#fff", //This sets the color of the text. // (The IIE, 2025).
marginTop: 15, //This sets the margintop to 15. // (The IIE, 2025).
marginBottom: 5, //This sets the marginbottom to 5. // (The IIE, 2025).
},

section: { //This is the section that puts each page into 3 different parts for app. // (The IIE, 2025).
marginTop: 25, //This sets the margintop to 25 for each section. // (The IIE, 2025).
paddingVertical: 10, //This sets the padding vertical to 10 for each section. // (The IIE, 2025).
borderTopWidth: 1, //This sets the top border width to 1 for each section. // (The IIE, 2025).
borderTopColor: "#f5dfdfff", //This sets the top border color for each section. // (The IIE, 2025).
},

menuItem: { //This is to style the menu item name, description and price. // (The IIE, 2025).
fontSize: 16, //This sets the font size to 16 for the menu item. // (The IIE, 2025).
color: "#fff", //This sets the color for the menu item. // (The IIE, 2025).
marginBottom: 4, //This sets the bottom margin to 4 for the menu item. // (The IIE, 2025).
},

input: { //This is styling for all the inputs in the app. // (The IIE, 2025).
borderWidth: 1, //This sets the width of the border to 1 for the inputs. // (The IIE, 2025).
borderColor: "#ccc", //This sets the color of the border for the inputs. // (The IIE, 2025).
borderRadius: 6, //This sets the border radius to 6 for the inputs. // (The IIE, 2025).
backgroundColor: "#fff", //This sets the background color for the inputs. // (The IIE, 2025).
padding: 8, //This sets the padding to 8 for the inputs. // (The IIE, 2025).
marginVertical: 5, //This sets the marginvertical to 5 for the inputs. // (The IIE, 2025).

},

row: { //This is the styling used to style the input boxes of the app. // (The IIE, 2025).
flexDirection: "row", //This sets the flexboxes to row. // (The IIE, 2025).
marginVertical: 5, //This sets the margin vertical to 5 for the row flexboxes. // (The IIE, 2025).
},

courseButton: { //This is the styling for the choose course button. // (The IIE, 2025).
backgroundColor: "#ddd", // This sets the background color of the choose course button. // (The IIE, 2025).
padding: 8, // This sets the padding to 8 for the choose course button. // (The IIE, 2025).
borderRadius: 8, // This setsthe border radius to 8 for the choose course button. // (The IIE, 2025).
marginRight: 5, // This sets the marginright of the choose course button to 5. // (The IIE, 2025).
},

courseSelected: { //This is the styling for the course selected by the user. // (The IIE, 2025).
backgroundColor: "#a0d1ff" // This sets the background color for the selected course. // (The IIE, 2025).
},

filterOption: { //This is the filtering section to filter by each dish. // (The IIE, 2025).
padding: 10, //This sets the padding to 10 for the filter by dish section. // (The IIE, 2025).
backgroundColor: "#f8f5f5ff", //This sets the background color of filter by dish section. // (The IIE, 2025).
borderRadius: 6, //This sets the border radius to 6 for the filter by dish section input. // (The IIE, 2025).
marginVertical: 4, //This sets the margin vertical to 4 for the filter by dish section. // (The IIE, 2025).
},

menuDescription: { //This is the description for all the items on the menu. // (The IIE, 2025).
fontSize: 14, //This sets the font size to 14 for the description. // (The IIE, 2025).
color: "#f3f5f7ff", //This sets the color for the description. // (The IIE, 2025).
fontStyle: "italic", //This sets the font style for the description. // (The IIE, 2025).
marginBottom: 8, //This sets the margin bottom to 8 for the description. // (The IIE, 2025).
},


});

// IIE
// React.dev
// React Native