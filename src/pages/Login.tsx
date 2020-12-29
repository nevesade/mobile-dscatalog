import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { text, theme } from "../styles";

import eyesOpened from "../assets/eyes-opened.png";
import eyesClosed from "../assets/eyes-closed.png";
import arrow from "../assets/arrow.png";

const Login: React.FC = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState(

        {
            username: "",
            password: ""
        }

    );

    async function handleLogin() {

        console.log("Fazer login");

    }

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Text >Login</Text>
                <View style={theme.form}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);

                            }
                        }
                    />

                    <View style={theme.passwordContainer}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            style={theme.textInput}
                            secureTextEntry={hidePassword}
                            value={userInfo.password}
                            onChangeText={
                                (e) => {
                                    const newUserInfo = { ...userInfo };
                                    newUserInfo.password = e;
                                    setUserInfo(newUserInfo);

                                }
                            }
                        />
                        <TouchableOpacity style={theme.toogle} onPress={() => setHidePassword(!hidePassword)}>
                            <Image source={hidePassword ? eyesOpened : eyesClosed} style={theme.eyes} />
                        </TouchableOpacity>

                    </View>




                </View>

                <TouchableOpacity
                    style={theme.primaryButtom}
                    activeOpacity={0.8}
                    onPress={() => handleLogin}


                >

                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer Login</Text>
                    </View>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />

                    </View>



                </TouchableOpacity>
            </View>

        </View>


    );
};


export default Login;