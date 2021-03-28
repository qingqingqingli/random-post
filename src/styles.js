import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "lightgray",
    padding: 10,
    fontSize: 18,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default styles;
