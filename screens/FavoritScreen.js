import { Text, StyleSheet, View } from "react-native";

function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Screen Coming Soon</Text>
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
  },
  title: {
    color: 'white',
    textAlign: 'center',
  }
});