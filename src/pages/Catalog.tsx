import React, {useState, useEffect} from "react";
import { ProductCard, SearchInput } from "../componets";

import { ScrollView, ActivityIndicator } from "react-native";
import { theme } from "../styles";
import { api } from "../services";




const Catalog: React.FC = () => {
    
    const[search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =  useState(false);
    
    

    async function fillProducts() {
        setLoading(true);
        const res = await api.get(
            `/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`
            );


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

        <ScrollView contentContainerStyle={theme.scrollContainer}>
            <SearchInput placeholder = "Nome do produto" search={search} setSearch={setSearch} />
            

            {
                loading ? (

                <ActivityIndicator size="large" color="#407BFF"  />

                ) : 
                (data.map((product) => (
                    <ProductCard {...product} key={product.id}/>
                )))
            }

        </ScrollView>

    );

    
};


export default Catalog;