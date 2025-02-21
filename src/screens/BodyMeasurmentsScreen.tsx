"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import { COLORS } from "../constants/theme"

const BodyMeasurementsScreen = () => {
  const [height, setHeight] = useState("181")
  const [weight, setWeight] = useState("82")

  const handleUpdate = () => {
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
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
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
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.text,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: COLORS.text,
  },
  unit: {
    fontSize: 16,
    color: COLORS.gray,
    marginLeft: 8,
  },
  updateButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default BodyMeasurementsScreen

