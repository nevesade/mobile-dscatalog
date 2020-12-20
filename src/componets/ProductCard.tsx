import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import { text, theme } from '../styles';


interface Productprops {
    id: Number;
    name: String;
    imgUrl: ImageSourcePropType;
    price: Number;
}


const ProductCard: React.FC<Productprops> = ({ id, name, imgUrl, price }) => {

    return (

        <TouchableOpacity style={theme.productCard}>
            <Image source={{ uri: imgUrl }} style={theme.productImg} />
            <View style={theme.produtDescription}>
                <Text style={text.productName}>{name}</Text>

                <View style={theme.priceContainer}>
                    <Text style={text.currency}>R$</Text>
                    <Text style={text.productPrice}>{price}</Text>
                </View>

            </View>


        </TouchableOpacity>
    );
};


export default ProductCard;