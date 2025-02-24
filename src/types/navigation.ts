import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootTabParamList = {
  Home: undefined
  Tests: undefined
  Reports: undefined
  Settings: undefined
}

export type ProfileStackParamList = {
  Settings: undefined
  MyAccount: undefined
  BodyMeasurements: undefined
}

export type RootTabNavigationProp = BottomTabNavigationProp<RootTabParamList>
export type ProfileStackNavigationProp = NativeStackNavigationProp<ProfileStackParamList>

