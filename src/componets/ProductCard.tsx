import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import { text, theme } from '../styles';
import {useNavigation} from '@react-navigation/native';


interface Productprops {
    id: Number;
    name: String;
    imgUrl: string;
    price: Number;
    role?: string;
    handleDelete: Function;
}


const ProductCard: React.FC<Productprops> = ({ 
    id, 
    name, 
    imgUrl, 
    price, 
    role, 
    handleDelete,
}) => {

    const navigation = useNavigation();

    return (

        <TouchableOpacity 
            style={theme.productCard} 
            onPress={() =>
             role? "" : navigation.navigate("ProductDetails", {id})}
             >
            <Image source={{ uri: imgUrl }} style={theme.productImg} />
            <View style={theme.produtDescription}>
                <Text style={text.productName}>{name}</Text>

                <View style={theme.priceContainer}>
                    <Text style={text.currency}>R$</Text>
                    <Text style={text.productPrice}>{price}</Text>
                </View>
                
                {
                role === 'admin' && (
                    <View style={theme.buttonContainer}>
                        <TouchableOpacity style={theme.deleteBtn} onPress={() => handleDelete(id)}>
                            <Text style={text.deleteText}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={theme.editBtn}>
                            <Text style={text.editText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

            </View>

            


        </TouchableOpacity>
    );
};


export default ProductCard;