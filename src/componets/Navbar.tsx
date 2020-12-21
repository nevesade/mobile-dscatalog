import React, { useState } from 'react';
import {useNavigation, useRoute }  from "@react-navigation/native";
import { TouchableOpacity, Image, View, Text } from 'react-native';
import menu from "../assets/menu.png";
import { nav } from "../styles";



const Navbar: React.FC = () => {

    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();



    function navigate(path : any ){
        if(path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={nav.drawer} onPress={() => setShow(!show)} >
            <Image source={menu} />
            {
                show ? (

                    <View style={nav.options} >

                        <TouchableOpacity>
                            <Text>Home</Text>

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Catalog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>ADM</Text>
                        </TouchableOpacity>

                    </View>) : null
            }
        </TouchableOpacity>

    )
};



export default Navbar;