import { StyleSheet, Dimensions} from  "react-native";


const deviceWidth = Dimensions.get('window').width;


const colors = {

    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray: "#9E9E9E",
    darkGray: "#263238",
    black: "#000000",
    primary: "#407BFF",
    secondary: "#33569B",
    bluePill: "#407BFF61",
    red: "#DF5753",
    borderGray: "#E1E1E1",
    
};



const theme = StyleSheet.create({


    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },
 

    card: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 20,
        
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-around",
        alignItems: "center",



    },

    draw: {
        width: 313,
        height: 225,
    },


    textContainer: {
        paddingHorizontal: 20,

    },

    primaryButtom: {
        backgroundColor: colors.primary,
        width: 290,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
        

    },
    arrowContainer:{
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
    },



       //ProductCard
        scrollContainer: {
        padding: 10,
    },


 
    productCard: {
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10,
       

    },

    produtDescription : {
        width: "100%",
        padding: 20,
        
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,

    },
    priceContainer: {
        flexDirection: "row",
        marginTop: 10,

    },

    productImg: {
        width: 140,
        height: 140,
        margin: 16,
    },

    //SearchInput
    InputContainer: {
        width: "100%",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        //justifyContent: "space-around",
        marginVertical: 12.5,
        paddingVertical: 10,
       
    },
    searchInput: {
        width: "90%",
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.borderGray,
        

    },

    // Products Details

    detailsContainer: {
        backgroundColor: colors.white,
        padding: 20,

    },


    detailCard: {

        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        justifyContent: "space-around",
        padding:20,
    


    },

    goBackContainer: {

        width: 290,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 10,

    },

    produtImageContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.lightGray,
        alignItems:  "center",
        borderRadius: 20,
    },


    productImage:{
        width: 220,
         height: 220

    },


    scrollTextContainer:{
        marginVertical: 20,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.lightGray,

    },
   

    //Loginpage

    loginCard: {

        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 20,
        
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "center",
        alignItems: "center",


    },

    form: {
        marginVertical: 10,

    },


    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,


    },

    textInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10, 

    },

    toggle: {

        margin:  -40,
    },




    

});


const text = StyleSheet.create({
    regular: {
        fontWeight: "400",
        fontSize: 16,
        textAlign:  "center",
        color: colors.mediumGray,
    },
    bold: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center",
        marginBottom: 15,
        color: colors.darkGray,
    },
    primaryText: {
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
        marginLeft: 20,
    },

    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },

    currency: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
        

    },

    productPrice: {
        fontSize: 30,
        color: colors.primary,
        fontWeight: "bold",

    },

    goBackText: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.darkGray,
        marginLeft: 16,

    },


    productDetailsName: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.darkGray,
        marginTop: 10,
    },

    productDescription: {

        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },

    
    loginTitle: {

        fontSize: 30,
        color: colors.darkGray,
        textTransform: "uppercase",
        marginBottom: 50,
    

    },

    logoutText: {
        color: colors.white,
    }

   
});


//Navigation

const nav = StyleSheet.create({
    leftText: {
        color: colors.white,
        fontWeight: "bold",
        marginLeft: 20,
    },

    drawer: {
        marginRight: 20,


    },

    options: {
        width: deviceWidth,
        height: 120,
        backgroundColor: colors.primary,
        marginTop: 125,
        marginRight:  -20,
        padding: 20,
        justifyContent:  "space-between",

    },

    option: {
        paddingVertical: 5, 

    },

    textOption: {

        color: colors.white,
        textTransform: "uppercase",
    },

    textActive: {
        fontWeight: "bold",
    },

    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,

    }


})





export {colors, theme, text, nav};