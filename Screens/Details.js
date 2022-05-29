import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";


export default class DetailsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          details: {},
          imagePath: "",
          url: `http://localhost:5000/star?name=${this.props.navigation.getParam(
            "star_name"
          )}`
        };
      }

      componentDidMount() {
        this.getDetails();
      }
      getDetails = () => {
        const { url } = this.state;
        axios
          .get(url)
          .then(response => {
            this.setDetails(response.data.data);
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      };

    render() {
        return (
           <View style={styles.container}>
              <Text
                style={styles.cardItem}
              >{`Distance from Earth : ${details.distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Mass of Sun : ${details.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Radius of Sun: ${details.radius}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardItem: {
      marginBottom: 10
    }
  });
