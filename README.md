## ST10474660
### Changelog
- Created my new expo app and added final touches with all the code for the 3 screens inside with all the imports, final comments and refernces.
- added app to new repo.
- Updated code for chefs app and all its components with buttons and text inputs.
- Created a readme file
- Added changelog.
- Added changelog to read me file.
----------------------------------------------------------------------------------------------------------------------------------------
  ## CODE FOR MY APP.TSX
  // This is the imports for the app
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
import React, { useState } from "react"; // This is the import for react. // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
import {View, Text, Button, FlatList, StyleSheet, SafeAreaView, TextInput, Alert, } from "react-native"; // This is the imports for for my app components. // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
import { NavigationContainer } from "@react-navigation/native"; // This is the import for react navigation. // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
import { Picker } from "@react-native-picker/picker"; // This is the import for react picker. // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).

// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This outputs the type of dish by using name, price, description and course.
type Dish = {
  name: string;
  price: string;
  description: string; 
  course: "Starter" | "Main" | "Dessert";
};
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is the stack that is used to define the screen the buttons will take the user to
type RootStackParamList = {
  Home: undefined;
  AddDish: { addDish: (dish: Dish) => void };
  FilterDish: { dishes: Dish[] };
};
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This creates the navigation stack.
const Stack = createNativeStackNavigator<RootStackParamList>();
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is the start of the home screen.
const HomeScreen = ({ navigation }: any) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
  // Adds a dish to the list
  const addDish = (dish: Dish) => {
    setDishes([...dishes, dish]);
  };
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
  // This clears all the the dishes on the homescreen that was inputed.
  const clearDishes = () => {
    if (dishes.length === 0) {
      Alert.alert("No dishes to clear!");
      return;
    }
    Alert.alert(
      "Confirm Clear",
      "Are you sure you want to clear all dishes?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear All", style: "destructive", onPress: () => setDishes([]) },
      ]
    );
  };
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
  // This is the start of the home screen.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Dishes</Text>

      {/* This outputs the total number of dishes to the user */}
      <Text style={styles.totalText}>Total Dishes: {dishes.length}</Text>

      {/* This outputs the dishes as a list with name, price, decription and course name */}
      <FlatList
        data={dishes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>{item.course}</Text>
            <Text>R{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No dishes added yet.</Text>
        }
      />

      {/* This is the buttons for the add dish screen and filter dishes screen */}
      <View style={styles.buttonRow}>
        <Button
          title="Add Dish"
          onPress={() => navigation.navigate("AddDish", { addDish })}/>

        <Button
          title="Filter Dishes"
          onPress={() => navigation.navigate("FilterDish", { dishes })}/>
      </View>

      {/* This is the code for the clear all dishes button on the home screen */}
      <View style={styles.clearButtonContainer}>
        <Button title="Clear All Dishes" color="#181616ff" onPress={clearDishes} />
      </View>
    </SafeAreaView>
  );
};
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is the start of the add dish screen.
const AddDishScreen = ({ route, navigation }: any) => {
  const { addDish } = route.params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState<"Starter" | "Main" | "Dessert">("Starter");
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
  // This is the start of the return for the add dish screen
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>
      {/*This is the input for the Name on the add dish screen*/}
      <View style={styles.inputBox}>
        <Text>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      {/*This is the input for the price on the add dish screen*/}
      <View style={styles.inputBox}>
        <Text>Price (R):</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"/>
      </View>
      {/*This is the input for the description on the add dish screen*/}
      <View style={styles.inputBox}>
        <Text>Description:</Text>
        <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      </View>

      {/*This is the input for the courses on the add dish screen*/}
      <View style={styles.inputBox}>
        <Text>Course:</Text>
        <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      {/*This is for button that allows users to save dishes so it can be outputted on the home screen*/}
      <Button
        title="Save Dish"
        onPress={() => {
          if (!name || !price || !description) {
            Alert.alert("Please fill in all fields!");
            return;
          }
          addDish({ name, price, description, course });
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is the start of the filter dishes screen
const FilterDishScreen = ({ route }: any) => {
  const { dishes } = route.params;
  const [query, setQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState<string>("All");

  const filtered = dishes.filter(
    (dish) =>
      (courseFilter === "All" || dish.course === courseFilter) &&
      dish.name.toLowerCase().includes(query.toLowerCase())
  );

  {/*This is the return for the filter dishes screen*/}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filter Dishes</Text>
      {/*This is for the text input which allows the user to search by name*/}
      <TextInput
        style={styles.input}
        placeholder="Search by name..."
        value={query}
        onChangeText={setQuery}/>

      {/*This is for the picker*/}
      <Picker selectedValue={courseFilter} onValueChange={(value) => setCourseFilter(value)}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      {/*This is the start of the flatlist that will output the dish name, description, price and course in a list*/}
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>{item.course}</Text>
            <Text>R{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        
        ListEmptyComponent={<Text style={styles.emptyText}>No matching dishes found.</Text>}/>
    </SafeAreaView>
  );
};
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is for the app navigation which allows the user to navigate between the different screens.
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="AddDish" component={AddDishScreen} /> 
        <Stack.Screen name="FilterDish" component={FilterDishScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is the stylesheet for the chefs app and all its components.
const styles = StyleSheet.create({
  // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the container
  container: { 
    flex: 1, // This sets the flex to 1 for the container.
    padding: 16, // This sets the padding to 16 for the container.
    backgroundColor: "#5271b1ff", // This sets the background colour of the container to a blue colour. 
  },
  // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the title of the 3 screens.
  title: { 
    fontSize: 22, // This sets the font size to 22.
    fontWeight: "bold", // This sets the fontweight to bold.
    marginBottom: 12, // This sets the margin bottom to 12.
    color: "#fff", // This sets the color of the title text.
  },
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This is to style the text output called totaltext.
  totalText: { 
    fontSize: 16, // This sets the font size to 22.
    color: "#fff", // This sets the color of the total text.
    marginBottom: 10, // This sets the margin bottom to 10. 
  },
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the card component that will show all the added dishes.
  card: {
    backgroundColor: "#fcfbfbff", // This sets the background colour
    padding: 12, // This sets the padding to 12.
    marginBottom: 10, // This sets the margin bottom to 10. 
    borderRadius: 8, // This sets the border radius to 8. 
  },
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the dishname.
  dishName: { 
    fontSize: 18, // This sets the fontsize to 18. 
    fontWeight: "600", // This sets the fontweight to 600.  
  },
  // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the inputbox.
  inputBox: { 
    marginBottom: 10 // This sets the margin bottom to 10. 
  },
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the input.
  input: {
    borderWidth: 1, // This sets the borderwidth of the input to 1.
    borderColor: "#f7f3f3ff", // This sets the border colour of the input box.
    padding: 8, // This sets the padding of the input to 8.
    borderRadius: 6, // This sets the border radius of the input to 6.
    backgroundColor: "#fff", // This sets the background colour of the input box to white.
  },
  // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the add dish and filter dishes buttons.
  buttonRow: {
    flexDirection: "row", // This styles the add dish and filter dishes buttons to be in a row. 
    justifyContent: "space-between", // This justifies the buttons to be in a row next to each other spaced out evenly.
    marginTop: 10,
  },
// This styling is for the clear button on the home screen which will clear and remove all added dishes once removed.
  clearButtonContainer: {
    marginTop: 15, // This sets the margin top to 15. 
    alignItems: "center", // This aligns the clear button to the center at the bottom of the home screen.
  },
  // (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
// This styling is for the empty text function.
  emptyText: {
    color: "#fff", // This sets the color of the empty text.
    fontStyle: "italic", // This sets the font style of the empty text to italic.
    textAlign: "center", // This aligns the empty text to the center.
    marginTop: 20, // This sets the margin top to 20.
  },
// (The IIE, 2025). // (React Native/ Meta Platforms Inc, 2025).
});

// Reference List
// The IIE, 2025. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute Of Education: Unpublished.
// Meta Platforms Inc, 2025. React Native Documentation. Available at: https://reactnative.dev/docs/getting-started [Accessed 13 November 2025].
// Meta Platforms Inc, 2025. React Native Documentation, Navigation Between Screens. Available at: https://reactnative.dev/docs/navigation. [Accessed 13 November 2025].

----------------------------------------------------------------------------------------------------------------------------------------

## Reference List
// The IIE, 2025. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute Of Education: Unpublished.
// Meta Platforms Inc, 2025. React Native Documentation. Available at: https://reactnative.dev/docs/getting-started [Accessed 13 November 2025].
// Meta Platforms Inc, 2025. React Native Documentation, Navigation Between Screens. Available at: https://reactnative.dev/docs/navigation. [Accessed 13 November 2025].
