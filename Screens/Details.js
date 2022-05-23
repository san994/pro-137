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
              >{`Distance from Earth : ${details.distance_from_earth}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Distance from Sun : ${details.distance_from_their_sun}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Orbital Period : ${details.orbital_period}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Orbital Speed : ${details.orbital_speed}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Planet Mass : ${details.planet_mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Planet Radius : ${details.planet_radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Planet Type : ${details.planet_type}`}</Text>
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
