// Login.js
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { auth } from "../../../FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in");

        router.push("/(tabs)/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Login</Text>
      <View className="w-[240px] gap-2 mt-2">
        <TextInput
          textContentType="emailAddress"
          placeholder="Email"
          className="text-background-50 font-medium px-3 py-3 bg-foreground-10 rounded-xl"
          onChangeText={setEmail}
        />
        <TextInput
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          className="text-background-50 font-medium px-3 py-3 bg-foreground-10 rounded-xl"
          onChangeText={setPassword}
        />
        <Pressable
          className="bg-foreground-20 text-white py-3 px-3 rounded-xl"
          onPress={handleSignIn}
        >
          <Text>Sign In</Text>
        </Pressable>
        <Pressable
          className="bg-foreground-20 text-white py-3 px-3 rounded-xl"
          onPress={handleCreateAccount}
        >
          <Text>Create account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
