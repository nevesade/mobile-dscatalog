import React,  {useState}  from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput, ActivityIndicator } from 'react-native';

import arrow from "../../../assets/leftArrow.png";
import { theme, text } from "../../../styles";


interface FormProductProps {
    setScreen: Function;
}

const FormProduct: React.FC<FormProductProps> =   (props) => {

     const {setScreen } = props;

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
        categories: null, 
    });



    return (
        <View style={theme.formContainer}>
            {
                loading ? ( <ActivityIndicator size="large" /> 
                ) : (
                    <View style={theme.formCard}>
                        <ScrollView>

                      

                        <Modal 
                        visible={showCategories} 
                        animationType="fade" 
                        transparent={true}
                        presentationStyle={"overFullScreen"}
                        >
                            <View style={theme.modalContainer} >
                                <ScrollView contentContainerStyle={theme.modalContent}>
                                    {
                                        categories.map(
                                            (cat) => (
                                                <TouchableOpacity
                                                style={theme.modalItem}
                                                 key={cat.id}  
                                                onPress={() => {
                                                setProduct({ ...product, categories: cat.name} );
                                                setShowCategories(!showCategories);
                                                 }}

                                                >
                                                    <Text> {cat.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </ScrollView>

                            </View>
                        </Modal>

                        <TouchableOpacity 
                            onPress={() => setScreen("products")}
                            style={theme.goBackContainer}
                        >
                            <Image source={arrow} />
                            <Text style={text.goBackText} >Voltar</Text>
                        </TouchableOpacity>
                        <TextInput  placeholder="Nome do produto"  style={theme.formInput} />
                        <TouchableOpacity onPress={() => setShowCategories(!showCategories)} >
                            <Text>
                                {
                                    product.categories === null ? 'Escolha uma categoria' 
                                    : product.categories
                                }
                            </Text>
                        </TouchableOpacity>
                        <TextInput placeholder="Preço" style={theme.formInput} />
                        <TouchableOpacity>
                            <Text>Carregar Imagem</Text>
                        </TouchableOpacity>
                        <Text>
                            As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb.
                        </Text>
                        <TextInput multiline placeholder="Descrição"  style={theme.textArea}/>

                        <View>
                            <TouchableOpacity>
                                <Text>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>
                                    Salvar
                                </Text>
                            </TouchableOpacity>
                        </View>

                        </ScrollView>

                    </View>

                )

            }
       
    </View>

    )
    
}

export default FormProduct;