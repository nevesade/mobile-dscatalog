import React,  {useState, useEffect} from "react";
import { View,Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import {SearchInput, ProductCard } from '../../componets';
import {getProducts} from '../../services';


import { admin } from '../../styles';

const Products = () => {

    const[search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =  useState(false);
    
    async function fillProducts() {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data.content);
        setLoading(false);
            
       //console.warn(res)
        
        
    }

    useEffect(() => {
    
        fillProducts();

    }, []);


        
    const data = search.length > 0 ? 
    products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())
   
    )
    : products;


    return (
        <ScrollView contentContainerStyle={admin.container}>
            <TouchableOpacity style={admin.addButton}>
                <Text style={admin.addButtonText} >Adicionar</Text>

            </TouchableOpacity>
            <SearchInput 
                search={search} 
                setSearch={setSearch} 
                placeholder="Nome do produto"
            />
              {
                loading ? (

                <ActivityIndicator size="large" color="#407BFF"  />

                ) : 
                (data.map((product) => (
                    <ProductCard {...product} key={product.id} role="admin"/>
                )))
            }

        </ScrollView>
    )
}

export default Products;