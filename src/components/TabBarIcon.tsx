import type React from "react"
import Icon from "react-native-vector-icons/Ionicons"

interface TabBarIconProps {
  routeName: string
  focused: boolean
  color: string
  size: number
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, focused, color, size }) => {
  let iconName: string

  switch (routeName) {
    case "Home":
      iconName = focused ? "home" : "home-outline"
      break
    case "Tests":
      iconName = focused ? "clipboard" : "clipboard-outline"
      break
    case "Reports":
      iconName = focused ? "stats-chart" : "stats-chart-outline"
      break
    case "Settings":
      iconName = focused ? "person-circle" : "person-circle-outline"
      break
    default:
      iconName = "help-outline"
  }

  return <Icon name={iconName} size={size} color={color} />
}

export default TabBarIcon

