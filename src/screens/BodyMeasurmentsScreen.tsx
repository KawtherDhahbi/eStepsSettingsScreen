"use client"

import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native"
import { COLORS, SPACING } from "../constants/theme"
import type { ProfileStackNavigationProp } from "../types/navigation"

interface BodyMeasurementsScreenProps {
  navigation: ProfileStackNavigationProp
}

const BodyMeasurementsScreen = ({ navigation }: BodyMeasurementsScreenProps) => {
  const [height, setHeight] = useState("181")
  const [weight, setWeight] = useState("82")
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  const handleUpdate = () => {
    Keyboard.dismiss()
    // Implement update logic here
    console.log("Updated:", { height, weight })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Height</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => setKeyboardVisible(true)}
              onBlur={() => setKeyboardVisible(false)}
            />
            <Text style={styles.unit}>cm</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Weight</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => setKeyboardVisible(true)}
              onBlur={() => setKeyboardVisible(false)}
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.updateButton, isKeyboardVisible && styles.updateButtonWithKeyboard]}
          onPress={handleUpdate}
        >
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.xl,
  },
  label: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    marginBottom: SPACING.sm,
    color: COLORS.text,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.md,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    color: COLORS.text,
  },
  unit: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    color: COLORS.gray,
    marginLeft: SPACING.sm,
  },
  updateButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.lg,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.xl,
  },
  updateButtonWithKeyboard: {
    position: "absolute",
    bottom: SPACING.lg,
    left: SPACING.lg,
    right: SPACING.lg,
  },
  updateButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
  },
})

export default BodyMeasurementsScreen

