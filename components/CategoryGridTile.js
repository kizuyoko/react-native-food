import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        style={({ pressed }) => [
          styles.button, 
          pressed ? styles.buttonPressed : null
        ]}
        android_ripple={{color: '#ccc'}}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: '#eeeeee'}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 80,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#351401'
  },
});

