"use client"

import { useState } from "react"
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Switch, ImageStyle } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS, FONTS, SPACING } from "../constants/theme"
import type { ProfileStackNavigationProp } from "../types/navigation"

interface AccountScreenProps {
  navigation: ProfileStackNavigationProp
}

interface MenuItemProps {
  icon: string
  title: string
  onPress: () => void
  color?: string
  danger?: boolean
}

const MenuItem = ({ icon, title, onPress, color = COLORS.primary, danger = false }: MenuItemProps) => (
  <TouchableOpacity style={[styles.menuItem, danger && styles.dangerMenuItem]} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      {danger ? (
        <View style={styles.dangerIconContainer}>
          <Icon name={icon} size={20} color={COLORS.error} />
        </View>
      ) : (
        <Icon name={icon} size={24} color={color} />
      )}
      <Text style={[styles.menuItemText, danger ? styles.dangerText : { color: COLORS.text }]}>{title}</Text>
    </View>
    {!danger && <Icon name="chevron-forward" size={20} color={COLORS.gray} />}
  </TouchableOpacity>
)

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [newsletterEnabled, setNewsletterEnabled] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8B8Aj7XkUJsh7JwNmK73W8toNmnH5x.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Ahmed Hamouda</Text>
        <Text style={styles.memberSince}>Member since September 2023</Text>
      </View>

      <View style={styles.section}>
        <MenuItem icon="person-outline" title="Edit profile" onPress={() => {}} />
        <MenuItem icon="key-outline" title="Change password" onPress={() => {}} />
        <MenuItem icon="mail-outline" title="Change Email" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <View style={styles.toggleItem}>
          <View style={styles.menuItemLeft}>
            <Icon name="notifications-outline" size={24} color={COLORS.primary} />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            ios_backgroundColor={COLORS.border}
          />
        </View>

        <View style={styles.toggleItem}>
          <View style={styles.menuItemLeft}>
            <Icon name="mail-outline" size={24} color={COLORS.primary} />
            <Text style={styles.menuItemText}>Email Newsletter</Text>
          </View>
          <Switch
            value={newsletterEnabled}
            onValueChange={setNewsletterEnabled}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            ios_backgroundColor={COLORS.border}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.leaderboardContainer}>
          <View style={styles.leaderboardHeader}>
            <Text style={styles.leaderboardTitle}>Leaderboard</Text>
            <Switch
              value={showLeaderboard}
              onValueChange={setShowLeaderboard}
              trackColor={{ false: COLORS.border, true: COLORS.primary }}
              ios_backgroundColor={COLORS.border}
            />
          </View>
          <Text style={styles.leaderboardDescription}>Show Leaderboard and share steps with your Friends.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <MenuItem icon="log-out-outline" title="Log out" color={COLORS.text} onPress={() => {}} />
      </View>

      <View style={styles.dangerZone}>
        <Text style={styles.dangerZoneTitle}>Danger Zone</Text>
        <MenuItem icon="alert-circle" title="Delete account" danger={true} onPress={() => {}} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileSection: {
    alignItems: "center",
    padding: SPACING.xl,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SPACING.md,
  },
  profileName: {
    fontSize: 24,
    fontFamily: "System",
    fontWeight: "600",
    marginBottom: 4,
    color: COLORS.text,
  },
  memberSince: {
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "400",
    color: COLORS.gray,
  },
  section: {
    marginBottom: SPACING.xl,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  dangerMenuItem: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    marginHorizontal: SPACING.lg,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: SPACING.md,
    fontSize: 16,
    ...FONTS.regular,
    color: COLORS.text,
  },
  dangerText: {
    color: COLORS.error,
    fontFamily: FONTS.medium.fontFamily,
    fontWeight: "500", 
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.lg,
  },
  dangerZone: {
    marginTop: SPACING.xl,
    marginBottom: 32,
  },
  dangerZoneTitle: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
    marginLeft: SPACING.lg,
    marginBottom: SPACING.sm,
    fontWeight: "600",
  },
  dangerIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 59, 48, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  leaderboardContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: SPACING.lg,
    margin: SPACING.lg,
  },
  leaderboardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  leaderboardTitle: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
    fontWeight: "600",
  },
  leaderboardDescription: {
    fontSize: 14,
    color: COLORS.gray,
    ...FONTS.regular,
    fontWeight: "600",
  },
})

export default AccountScreen

