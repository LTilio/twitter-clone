import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    backgroundColor: "white",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tweetContent: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "gray",
    fontSize: 14,
  },
  content: {
    fontSize: 16,
    marginTop: 5,
  },

  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "70%",
  },
  icon: {
    marginRight: 15,
  },
});
