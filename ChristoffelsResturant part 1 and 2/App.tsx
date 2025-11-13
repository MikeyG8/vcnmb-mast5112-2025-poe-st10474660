import React, { useState } from "react"; {/*(The IIE, 2025)*/}
import {StyleSheet, Text, View, FlatList, TextInput, ScrollView,TouchableOpacity,} from "react-native"; {/*(The IIE, 2025)*/}
import { Picker } from "@react-native-picker/picker"; {/*This is the import for the picker*/} {/*(React Native, 2025)*/}
{/*This is the end of all my imports*/}

{/*(The IIE, 2025)*/}
const UserItem = ({ dish, price, description, course, onDelete }) => ( 
  <View style={styles.item}> 
    <Text style={styles.name}>Dish: {dish}</Text> {/*This outputs the dish name*/}
    <Text style={styles.price}>Price: R{price}</Text> {/*This outputs the dish price*/}
    <Text style={styles.description}>Description: {description}</Text> {/*This outputs the description of the dish*/}
    <Text style={styles.course}>Course: {course}</Text> {/*This outputs the course name*/}
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}> {/*This is the delete button for the chef and user to delete the dishes*/}
      <Text style={styles.btnText}>Delete</Text> {/*This outputs the delete button*/}
    </TouchableOpacity>
  </View>
); 
{/*(The IIE, 2025)*/}

{/*(The IIE, 2025)*/}
{/*This is what will output the dish name, price and description to the user*/}
export default function App() {
  const [users, setUsers] = useState([
    { id: "1", dish: "Mushrooms with white sauce", price: 44, description: "Delicious mushrooms with spicy pepper sauce", course: "Starters" },
    { id: "2", dish: "Smoked salmon with prawns", price: 56, description: "Smokey salmon served with juicy prawns", course: "Starters" },
    { id: "3", dish: "Butternut soup ", price: 24, description: "Delicious blended butternut with fresh cream", course: "Starters" },
    { id: "4", dish: "Garlic bread", price: 22, description: "Toasted bread with melted garlic butter", course: "Starters" },

    { id: "5", dish: "Macaroni & cheese", price: 110, description: "Melted Cheese & macaroni", course: "Main Course" },
    { id: "6", dish: "Ribs, chips with onion rings", price: 289, description: "Juicy ribs, with chips spiced in chips spice with fried onion rings", course: "Main Course" },
    { id: "7", dish: "Portuguese pizza ", price: 120, description: "Pizza straight from lisbon portugal, induced with peparoni and pineapple", course: "Main Course" },
    { id: "8", dish: "Beef stroganoff  ", price: 89, description: "Beef mushroom stew and beef stock sauce", course: "Main Course" },
    { id: "9", dish: "Lasagne", price: 52, description: "Mince and layers of cheese", course: "Main Course" }, 

    { id: "10", dish: "Ice-cream", price: 18, description: "Delcious flavors for a sunny day : bubblegum, chocolate, vanilla and rum and raisin", course: "Dessert" },
    { id: "11", dish: "Malva pudding", price: 25, description: "A sweet sticky baked dessert with a soft,caramelized and spongy texture", course: "Dessert" },
    { id: "12", dish: "Chocolate cake ", price: 35, description: "Delicious chocolate cake with many layers of sponge", course: "Dessert" },
    { id: "12", dish: "Strawberry gelato", price: 28, description: "Dense and creamy italian style frozen dessert bursing with sweet flavor of real strawberries", course: "Dessert" },
    { id: "12", dish: "Tiramisu", price: 30, description: "Italian style dessert with coffee based ladyfingers and a rich creamy mixture of cheese eggs and sugar", course: "Dessert" },

  ]);
{/*(The IIE, 2025)*/}
  //  This adds the new dish inputs
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
{/*(The IIE, 2025)*/}
  // This is adding the new dish
  const addDish = () => {
    if (!dish.trim() || !price.trim() || !description.trim()) return;
{/*(The IIE, 2025)*/}
    const newDish = {
      id: (users.length + 1).toString(),
      dish,
      price: parseFloat(price),
      description,
      course,
    };
{/*(The IIE, 2025)*/}
    setUsers([...users, newDish]);
    setDish("");
    setPrice("");
    setDescription("");
    setCourse("");
  };
{/*(The IIE, 2025)*/}
  // This is to delete the dish.
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
   const totalItems = users.length;
   {/*(The IIE, 2025)*/}
   // This is the start of my whole app.
  return (
  <View style={styles.container}>
    <ScrollView style={styles.scroll}>
      {/*This is my heading of my app*/}
     <Text style={styles.title}> Christoffel's Resturant</Text>
    <View> 
      {/*This will output the menu to the user for Starters, Mains and Desserts*/}
    <Text style={styles.menuText}>Starters</Text> {/*This is starters*/}
       <Text style={styles.menulistText}>Mushrooms and white sauce  R44</Text>
       <Text style={styles.menulistText}>Smoked salmon with prawns  R56</Text>
       <Text style={styles.menulistText}>Butternut soup                            R24</Text>
       <Text style={styles.menulistText}>Garlic bread                                  R22</Text>
       

      <Text style={styles.menuText}>Mains</Text> {/*This is mains*/}
      <Text style={styles.menulistText}>Macaroni & cheese                     R110 </Text>
      <Text style={styles.menulistText}>Ribs, chips with onion rings     R289</Text>
      <Text style={styles.menulistText}>Portuguese pizza                        R120</Text> 
      <Text style={styles.menulistText}>Beef stroganoff                           R89</Text> 
      <Text style={styles.menulistText}>Lasagne                                        R52</Text>

      <Text style={styles.menuText}>Desserts</Text> {/*This is the desserts*/}
      <Text style={styles.menulistText}>Ice-cream                                     R18</Text>
      <Text style={styles.menulistText}>Malva pudding                            R25</Text>
      <Text style={styles.menulistText}>Chocolate cake                           R35</Text>
      <Text style={styles.menulistText}>Strawberry gelato                       R28</Text>
      <Text style={styles.menulistText}>Tiramisu                                       R30</Text>
  </View>    
      {/*This will add all new dish inputs */} {/*(The IIE, 2025)*/}
      <Text style={styles.title}> Add item to Menu</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={dish}
        onChangeText={setDish}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.pickerContainer}> {/*(The IIE, 2025)*/}
        <Picker
        selectedValue={course}
        onValueChange={(itemValue)  => setCourse(itemValue)}
        style={styles.picker}
        >
          {/*(NPMJS, 2025)*/}
          {/*This is for the picker / drop down menu*/}
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Staters" value="Staters" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>
      {/*(React Native, 2025)*/}
          {/*Code for the add dish button*/}
      <TouchableOpacity style={styles.addButton} onPress={addDish}>
        <Text style={styles.btnText}>Add Dish</Text>
      </TouchableOpacity>
     
     {/*(React Native, 2025)*/}
      {/* Outputs the meals that will be prepared for that day or night */}
      <Text style={styles.title}>Meals Prepared</Text>
      {/*Start of the flatlist*/}
      {/*(The IIE, 2025)*/} {/*(React Native, 2025)*/}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserItem
            dish={item.dish}
            price={item.price}
            description={item.description}
            course={item.course}
            onDelete={() => deleteUser(item.id)}
          />
        )} 
      />
      {/*This will output the total number of items*/} {/*(The IIE, 2025)*/}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Items: {totalItems}</Text>
      </View>
      </ScrollView>
   </View>
   
  );
}
{/*(The IIE, 2025)*/} 
{/*This is the stylesheet for all my code*/}
const styles = StyleSheet.create({
  // This is the styling i used for my container.
  container: {  // (The IIE, 2025).
    flex: 1, 
    backgroundColor: "#3b8abeff", 
    paddingTop: 50, 
    paddingHorizontal: 20 
  },
// This is the styling i used for my title text.
  title: { // (The IIE, 2025).
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: "#0e0d0dff", 
    marginBottom: 15 
  },
  // This is the styling for my inputs.
  input: { // (The IIE, 2025).
    borderWidth: 1,
    borderColor: "#fdfbfbff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f3f3f3ff",
  },
  // This is styling for the item
  item: { // (The IIE, 2025).
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f7e8e8ff",
  },
  // This styling is for the name
  name: {  // (The IIE, 2025).
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333" 
  },
// This styling is for the price
  price: {  // (The IIE, 2025).
    fontSize: 16, 
    color: "#444" 
  },
// This styling is for the decription
  description: {  // (The IIE, 2025).
    fontSize: 15, 
    color: "#555" 
  },
// This styling is for the course
  course: {  // (The IIE, 2025).
    fontSize: 15, 
    color: "#555" 
  },
// This is for the delete button
  deleteButton: { // (The IIE, 2025).
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  // This styling is for the add button
  addButton: {// (The IIE, 2025).
    backgroundColor: "#050505ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
// This is for the picker container used inside my code
  pickerContainer: { // (The IIE, 2025).
    borderWidth:1,
    borderColor: "#faf6f6ff",
    borderRadius: 5,
    marginBottom: 10,
    color: "white",
    backgroundColor: "#f9f9f9",
  },
// This is used for the picker i have imported and used in my app for a drop down menu
  picker: { // (The IIE, 2025).
    height :50,
    width: "100%",
     backgroundColor: "#f9f9f9",
  },
// This is for the item text
  Item:{ // (The IIE, 2025).
 backgroundColor: "black",
   borderWidth:1,
    borderColor: "#aaa",
    padding: 15,
    borderRadius: 8,

  },
// This is for the total number of items
  totalContainer:{ // (The IIE, 2025).
    marginTop: 15,
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",

  },
  // This sstyling is for the output to show how many items there are
  totalText:{ // (The IIE, 2025).
    fontSize:18,
    fontWeight: "bold",
    color: "#0d0d0eff",
  },
// This is styling for my scroll feature
  scroll: { // (The IIE, 2025).
    padding: 20,
  },
// This styles the text for my button
  btnText: {  // (The IIE, 2025).
    color: "white", 
    fontWeight: "bold" 
  },
// This styles the text that shows each course name
  menulistText: { // (The IIE, 2025).
    justifyContent:"space-evenly",
    alignSelf:'baseline',
    textAlign: 'center',
    fontSize: 14,
  },
// This styles the text that outputs the dish name, price and description at the top of the app like a menu.
  menuText: { // (The IIE, 2025).
    marginTop:'auto',
    alignSelf:'baseline',
    fontSize: 17,
    fontWeight:'bold',

  },
});

// Reference List:
// The Independent Institute of Education, 2025. MAST5112 Module outline. Unpublished module manual. 
// NPM Inc, 2025. Package/ @react native picker / picker. Available at: <https://www.npmjs.com/package/@react-native-picker/picker> [Accessed: 20 August 2025]. 
// React Native, 2025. Docs - The Basics. Available at: <https://reactnative.dev/docs/getting-started> [Accessed: 20 August 2025]. 