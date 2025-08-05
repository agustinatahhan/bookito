import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#9e93bb",
            tabBarInactiveTintColor: ""
        }}
        >
            <Tabs.Screen  
                name="mybooks/index"
                options={{
                    title: "My Books",
                    tabBarIcon: ({color}) => (
                        <Ionicons size={28} name="book-outline" color={color} />
                    )
                }}
            />
            <Tabs.Screen  
                name="home/index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => (
                        <Ionicons size={28} name="home-outline" color={color} />
                    )
                }}
            />
              <Tabs.Screen  
                name="login/index"
                options={{
                    title: "Login",
                    tabBarIcon: ({color}) => (
                        <Ionicons size={28} name="person-outline" color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;