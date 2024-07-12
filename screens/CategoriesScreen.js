import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";



function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      });
    }
  
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    margin: 8
  }
});