// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
// import { Calendar, LocaleConfig } from "react-native-calendars";
// import { Button } from "react-native-elements";

// LocaleConfig.locales["en"] = {
// monthNames: [
// "January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December"
// ],
// monthNamesShort: [
// "Jan.",
// "Feb.",
// "Mar.",
// "Apr.",
// "May",
// "Jun.",
// "Jul.",
// "Aug.",
// "Sep.",
// "Oct.",
// "Nov.",
// "Dec."
// ],
// dayNames: [
// "Sunday",
// "Monday",
// "Tuesday",
// "Wednesday",
// "Thursday",
// "Friday",
// "Saturday"
// ],
// dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// };
// LocaleConfig.defaultLocale = "en";

// const CalendarScreen = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [sets, setSets] = useState(0);
//   const [reps, setReps] = useState(0);

//   const handleSelectDate = date => {
//     setSelectedDate(date.dateString);
//   };

//   const handleAddLog = () => {
//     if (selectedDate) {
//       // Open the form to collect sets and reps information from the user
//       setSets(0);
//       setReps(0);
//     }
//   };

//   const handleSubmit = () => {
//     if (sets && reps) {
//       // Add the selected date, sets, and reps to the list of logs
//       setLogs([...logs, { date: selectedDate, sets, reps }]);
//       setSelectedDate("");
//     }
//   };

//   const handleClearLogs = () => {
//     setLogs([]);
//   };

//   const markedDates = logs.reduce((acc, log) => {
//     acc[log.date] = { selected: true, marked: true, selectedColor: "#6e3b6e" };
//     return acc;
//   }, {});

//   const maxDate = new Date().toISOString().split("T")[0];
//   const minDate = new Date(2000, 1, 1).toISOString().split("T")[0];

//   return (
//     <View style={styles.container}>
//       <Calendar
//         onDayPress={day => handleSelectDate(day)}
//         maxDate={maxDate}
//         minDate={minDate}
//         markedDates={markedDates}
//       />
//       {selectedDate && (
//         <View style={styles.selectedDateContainer}>
//           <Text>Selected Date: {selectedDate}</Text>
//           <Button
//             title="Add Log"
//             onPress={handleAddLog}
//             containerStyle={styles.buttonContainer}
//           />
//         </View>
//       )}
//       {selectedDate && sets === 0 && reps === 0 && (
//         <View style={styles.formContainer}>
//           <Text>Enter the sets and reps for the selected date:</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={text => setSets(text)}
//             value={sets}
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={text => setReps(text)}
//             value={reps}
//           />
//           <Button
// title="Submit"
// onPress={handleSubmit}
// containerStyle={styles.buttonContainer}
// />
// </View>
// )}
// {logs.length > 0 && (
// <View style={styles.logsContainer}>
// <Text>Logs:</Text>
// <FlatList
// data={logs}
// renderItem={({ item }) => (
// <Text>
// {item.date}: {item.sets} sets of {item.reps} reps
// </Text>
// )}
// keyExtractor={item => item.date}
// />
// <Button
//          title="Clear Logs"
//          onPress={handleClearLogs}
//          containerStyle={styles.buttonContainer}
//        />
// </View>
// )}
// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// alignItems: "center",
// justifyContent: "center",
// },
// selectedDateContainer: {
// alignItems: "center",
// marginTop: 20,
// },
// formContainer: {
// alignItems: "center",
// marginTop: 20,
// },
// logsContainer: {
// alignItems: "center",
// marginTop: 20,
// },
// input: {
// height: 40,
// width: 100,
// borderColor: "gray",
// borderWidth: 1,
// margin: 10,
// },
// buttonContainer: {
// marginTop: 10,
// },
// });

// export default CalendarScreen;