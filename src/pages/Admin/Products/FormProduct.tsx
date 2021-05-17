import React,  {useState}  from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput, ActivityIndicator } from 'react-native';

import arrow from "../../../assets/arrow.png";


const FormProduct = () => {

    const [loading, setLoading ] = useState(false);
    const [edit, setEdit ] = useState(false);
    const [categories, setCategories ] = useState([

        {
            id: 3,
            name: "Computadores"
        },
        
        {
            id: 1,
            name: "Electronicos"
        },
        
        {
            id: 4,
            name: "PC Game"
        },
        
        {
            id: 2,
            name: "Notebooks"
        },
    ]);
    const [ showCategories, setShowCategories] = useState(false);
    const [product, setProduct ] = useState({
        name: null,
        decription: null, 
        imgUrl: null,  
        price: null, 
        categoies: null, 
    });



    return (
        <View>
            {
                loading ? ( <ActivityIndicator size="large" /> 
                ) : (
                    <View>
                        <Modal 
                        visible={showCategories} 
                        animationType="fade" 
                        transparent={true}
                        presentationStyle={"overFullScreen"}
                        >
                            <View>
                                <ScrollView>
                                    {
                                        categories.map(
                                            (cat) => (
                                                <TouchableOpacity key={categories.id} >
                                                    <Text> {cat.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </ScrollView>

                            </View>
                        </Modal>
                        <TouchableOpacity>
                            <Image source={arrow}/>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                )

            }
       
    </View>

    )
    
}

export default FormProduct;