import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginRight: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  description: {
    color: "#fff",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "SFProDisplay-Bold",
    padding: 5
  }
});

export default styles;
