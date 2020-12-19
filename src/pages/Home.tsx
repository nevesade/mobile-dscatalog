import React from "react";
import {View, Text, TouchableOpacity} from "react-native";



const Home: React.FC = ({ navigation }) =>{
    return(

        <View>
            <Text> Welcome to APP</Text>
            <TouchableOpacity style={{
                
                width: 150,
                backgroundColor: "#069",
                padding: 10,
                borderRadius: 4,

            }} 
            
            onPress={() => navigation.navigate("Catalog") }
            
            >
                <Text>clique aqui</Text>
            </TouchableOpacity>

        </View>

    );
};


export default Home;