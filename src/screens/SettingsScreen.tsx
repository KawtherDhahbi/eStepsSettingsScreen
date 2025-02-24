"use client"

import { useState } from "react"
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS, FONTS, SPACING } from "../constants/theme"
import type { ProfileStackNavigationProp } from "../types/navigation"

interface SettingsScreenProps {
  navigation: ProfileStackNavigationProp
}

function SectionHeader({ title }: { title: string }) {
  return <Text style={styles.sectionHeader}>{title}</Text>
}

function ListItem({
  title,
  description,
  onPress,
  icon,
  image,
  showChevron = true,
}: {
  title: string
  description?: string
  onPress: () => void
  icon?: string
  image?: string
  showChevron?: boolean
}) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      {image ? (
        <Image source={{ uri: image }} style={styles.badgeImage} />
      ) : icon ? (
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color={COLORS.gray} />
        </View>
      ) : null}
      <View style={styles.textContainer}>
        <Text style={styles.listItemTitle}>{title}</Text>
        {description && <Text style={styles.listItemDescription}>{description}</Text>}
      </View>
      {showChevron && <Icon name="chevron-forward" size={20} color={COLORS.gray} />}
    </TouchableOpacity>
  )
}

function SegmentedControl({
  options,
  value,
  onChange,
  label,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
  label: string
}) {
  return (
    <View style={styles.segmentedControlContainer}>
      <Text style={styles.segmentedControlLabel}>{label}</Text>
      <View style={styles.segmentedControl}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.segmentedControlOption, value === option && styles.segmentedControlOptionSelected]}
            onPress={() => onChange(option)}
          >
            <Text style={[styles.segmentedControlText, value === option && styles.segmentedControlTextSelected]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [selectedUnit, setSelectedUnit] = useState("Metric")

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <SectionHeader title="Achievements" />
        <View style={styles.card}>
          <ListItem
            title="Champion Bronze"
            description="Perform All tests for 14 days"
            onPress={() => {}}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KYWjIoCGFrU4dK9lBWqvKvcYOq5Nbc.png"
          />
        </View>

        <SectionHeader title="Account" />
        <View style={styles.card}>
          <ListItem title="My Account" onPress={() => navigation.navigate("MyAccount")} />
        </View>

        <SectionHeader title="General" />
        <View style={styles.card}>
          <ListItem title="Body Measurements" onPress={() => navigation.navigate("BodyMeasurements")} />
          <View style={styles.separator} />
          <SegmentedControl
            label="Units"
            options={["Metric", "Imperial"]}
            value={selectedUnit}
            onChange={setSelectedUnit}
          />
        </View>

        <SectionHeader title="Add-ons" />
        <View style={styles.card}>
          <ListItem title="Connected Apps" onPress={() => {}} />
          <View style={styles.separator} />
          <ListItem title="My medical Files" onPress={() => {}} />
        </View>

        <SectionHeader title="Referral Program" />
        <View style={styles.card}>
          <ListItem title="Refer your Friends & Earn 10$" onPress={() => {}} />
        </View>

        <SectionHeader title="About" />
        <View style={styles.card}>
          <ListItem title="About eSteps" onPress={() => {}} icon="heart-outline" />
          <View style={styles.separator} />
          <ListItem title="Join our community" onPress={() => {}} icon="people-outline" />
          <View style={styles.separator} />
          <ListItem title="Terms and conditions" onPress={() => {}} icon="document-text-outline" />
          <View style={styles.separator} />
          <ListItem title="Support" onPress={() => {}} icon="help-circle-outline" />
          <View style={styles.separator} />
          <ListItem title="Rate us" onPress={() => {}} icon="star-outline" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
    color: COLORS.gray,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
    marginBottom: SPACING.sm,
  },
  card: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    marginHorizontal: SPACING.lg,
    padding: SPACING.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.lg,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listItemTitle: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 4,
  },
  listItemDescription: {
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "400",
    color: COLORS.gray,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  badgeImage: {
    width: 80,
    height: 80,
    marginRight: SPACING.md,
    resizeMode: "contain",
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.lg,
  },
  segmentedControlContainer: {
    padding: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  segmentedControlLabel: {
    fontSize: 16,
    color: COLORS.text,
    ...FONTS.regular,
  },
  segmentedControl: {
    flexDirection: "row",
    gap: SPACING.sm,
  },
  segmentedControlOption: {
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentedControlOptionSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  segmentedControlText: {
    fontSize: 14,
    color: COLORS.gray,
    ...FONTS.regular,
  },
  segmentedControlTextSelected: {
    color: COLORS.background,
  },
})

export default SettingsScreen

