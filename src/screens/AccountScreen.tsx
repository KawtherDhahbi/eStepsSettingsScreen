"use client"

import { useState } from "react"
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Switch } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS } from "../constants/theme"

const AccountScreen = () => {
  const [leaderboardEnabled, setLeaderboardEnabled] = useState(false)
  const [newsletterEnabled, setNewsletterEnabled] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  interface MenuItemProps {
    icon: string;
    title: string;
    onPress: () => void;
    color?: string;
    danger?: boolean;
  }

  const MenuItem = ({ icon, title, onPress, color = COLORS.primary, danger = false }: MenuItemProps) => (
    <TouchableOpacity 
      style={[
        styles.menuItem, 
        danger && styles.dangerMenuItem
      ]} 
      onPress={onPress}
    >
      <View style={styles.menuItemLeft}>
        {danger ? (
          <View style={styles.dangerIconContainer}>
            <Icon name={icon} size={20} color="#FF3B30" />
          </View>
        ) : (
          <Icon name={icon} size={24} color={color} />
        )}
        <Text style={[
          styles.menuItemText, 
          danger ? styles.dangerText : { color: color === "red" ? color : COLORS.text }
        ]}>
          {title}
        </Text>
      </View>
      {!danger && <Icon name="chevron-forward" size={24} color={COLORS.gray} />}
    </TouchableOpacity>
  )

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
            value={leaderboardEnabled}
            onValueChange={setLeaderboardEnabled}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
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
              trackColor={{ false: COLORS.border, true: "#4CD964" }}
            />
          </View>
          <Text style={styles.leaderboardDescription}>
            Show Leaderboard and share steps with your Friends.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <MenuItem icon="log-out-outline" title="Log out" color={COLORS.text} onPress={() => {}} />
      </View>

      <View style={styles.dangerZone}>
        <Text style={styles.dangerZoneTitle}>Danger Zone</Text>
        <MenuItem 
          icon="alert-circle" 
          title="Delete account" 
          danger={true}
          onPress={() => {}} 
        />
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
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 14,
    color: COLORS.gray,
  },
  section: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: COLORS.background,
  },
  dangerMenuItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
  },
  dangerText: {
    color: '#FF3B30',
    fontWeight: '500',
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  dangerZone: {
    marginTop: 20,
    marginBottom: 32,
  },
  dangerZoneTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginLeft: 16,
    marginBottom: 8,
  },
  dangerIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderboardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  leaderboardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  leaderboardDescription: {
    fontSize: 14,
    color: COLORS.gray,
  },
})

export default AccountScreen