import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {

    const [loginInfo, onChangeloginInfo] = useState({
        username: "",
        password: ""
    });

    return (
        <View className="m-5">
            <Text className="text-center">LangTrain! Log in</Text>
            <StatusBar style="auto" />
            <SafeAreaView className="">
                <Text className="mb-2">Username {loginInfo.username}</Text>
                <TextInput 
                    className="border-solid border-2 border-indigo-600"
                    value={loginInfo.username} 
                    onChangeText={(username) => onChangeloginInfo({
                        ...loginInfo,
                        username
                    })} 
                />

                <Text className="mb-2">Password {loginInfo.password}</Text>
                <TextInput 
                    className="mb-3"
                    value={loginInfo.password} 
                    secureTextEntry
                    onChangeText={(password) => onChangeloginInfo({
                        ...loginInfo,
                        password
                    })} 
                />

                <Button title="Log in" onPress={() => { /* handle login */ }} />
            </SafeAreaView>

            <Text className="text-center">Don't have an account?</Text>
            
            <Link href='/signup'><Button title='sign up'/></Link>
        </View>
    );
}
