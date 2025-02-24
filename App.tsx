import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons"
import SettingsScreen from "./src/screens/SettingsScreen"
import AccountScreen from "./src/screens/AccountScreen"
import BodyMeasurementsScreen from "./src/screens/BodyMeasurmentsScreen"
import { COLORS } from "./src/constants/theme"
import { StyleSheet } from "react-native"

// Placeholder screens for Home, Tests, and Reports
const HomeScreen = () => null
const TestsScreen = () => null
const ReportsScreen = () => null

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleAlign: "center", 
      headerTitleStyle: {
        fontFamily: "System",
        fontSize: 17,
        fontWeight: "700", 
      },
    }}
  >
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="MyAccount" component={AccountScreen} options={{ title: "My Account" }} />
    <Stack.Screen name="BodyMeasurements" component={BodyMeasurementsScreen} options={{ title: "Body Measurements" }} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case "Home":
                iconName = "home-outline"
                break
              case "Tests":
                iconName = "clipboard-outline"
                break
              case "Reports":
                iconName = "pulse-outline"
                break
              case "Settings":
                iconName = "person-outline"
                break
              default:
                iconName = "help-outline"
            }

            return <Icon name={iconName} size={24} color={color} />
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tests" component={TestsScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Settings" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: "System",
    fontWeight: "400",
  },
})

export default App

