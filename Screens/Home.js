import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";

import axios from 'axios';
import { ListItem } from "react-native-elements";
export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            listData:[],
            url:"http://localhost:5000"
        }
    }

    componentDidMount=()=>{
        this.getstar()
    }

    getstar=()=>{
        const{url} = this.state

        axios.get(url)
        .then(responce=>{
            return this.setState({
                listData:responce.data.data
            });
        })
        .catch(error=>{
            alert.apply(error.message)
        })
    }

    renderItem=({item,index})=>{
        <ListItem
         key={index}
         title={`star: ${item.name}`}
         subtitle={`Distance from earth ${item.distance}`}
         titleStyle={styles.title} 
         containerStyle={styles.listContainer} 
         bottomDivider 
         chevron 
         onPress={()=>this.props.navigation.navigate("Details",{star_name:item.name})}
        />
    }
    
    keyExtractor = (item, index) => index.toString();
    render() {
        const {listData} = this.state
        if (listData.length === 0){
            return(
                <View>
                    <Text>loading...</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>star app</Text>
                <FlatList
                 keyExtractor={this.keyExtractor} 
                 data={this.state.listData} 
                 renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: "#edc988" 
    }, 
    upperContainer: { 
        flex: 0.1, 
        justifyContent: "center", 
        alignItems: "center" 
    }, 
    headerText: { 
        fontSize: 30, 
        fontWeight: "bold", 
        color: "#132743" 
    }, 
    lowerContainer: { 
        flex: 0.9
    }, 
    emptyContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    }, 
    emptyContainerText: { 
        fontSize: 20 
    }, 
    title: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#d7385e" 
    }, 
    listContainer: { 
        backgroundColor: "#eeecda" 
    } 
});