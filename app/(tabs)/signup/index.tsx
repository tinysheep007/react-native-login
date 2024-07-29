import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

export default function HomeScreen() {

    const [signupInfo, onChangesignupInfo] = useState({
        username: "",
        password: ""
    });

    return (
        <View className='m-5'>
            <Text className='text-center'>LangTrain! Sign up</Text>

            <SafeAreaView>
            <Text className="">Username {signupInfo.username}</Text>
                <TextInput 
                    className="border-solid border-gray-400 p-2 mb-4 rounded"
                    value={signupInfo.username} 
                    onChangeText={(username) => onChangesignupInfo({
                        ...signupInfo,
                        username
                    })} 
                />

                <Text className="mb-2">Password {signupInfo.password}</Text>
                <View className=''>
                    <TextInput 
                        className=""
                        value={signupInfo.password} 
                        secureTextEntry
                        onChangeText={(password) => onChangesignupInfo({
                            ...signupInfo,
                            password
                        })} 
                    />
                </View>
                

                <Button title="Sign up" onPress={() => { /* handle login */ }} />
            </SafeAreaView>

            <Text className="text-center mb-2">Already have an account?</Text>
            
            <Link href='/login'><Button title='Log in'/></Link>
        </View>
    )
}