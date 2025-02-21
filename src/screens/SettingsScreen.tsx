import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../constants/theme";
import { NavigationProp } from '@react-navigation/native';

interface SettingsScreenProps {
  navigation: NavigationProp<any>;
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  return (
    <Text style={styles.sectionHeader}>{title}</Text>
  );
}

// List Item Component
function ListItem({ 
  title, 
  description,
  onPress, 
  icon,
  image,
  showChevron = true 
}: { 
  title: string;
  description?: string;
  onPress: () => void;
  icon?: string;
  image?: string;
  showChevron?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      {image ? (
        <Image 
          source={{ uri: image }} 
          style={styles.badgeImage}
        />
      ) : icon ? (
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color="#666" />
        </View>
      ) : null}
      <View style={styles.textContainer}>
        <Text style={styles.listItemTitle}>{title}</Text>
        {description && (
          <Text style={styles.listItemDescription}>{description}</Text>
        )}
      </View>
      {showChevron && (
        <Icon name="chevron-forward" size={24} color="#666" />
      )}
    </TouchableOpacity>
  );
}

// Segmented Control Component
function SegmentedControl({
  options,
  value,
  onChange,
  label
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <View style={styles.segmentedControlContainer}>
      <Text style={styles.segmentedControlLabel}>{label}</Text>
      <View style={styles.segmentedControl}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.segmentedControlOption,
              value === option && styles.segmentedControlOptionSelected,
            ]}
            onPress={() => onChange(option)}
          >
            <Text
              style={[
                styles.segmentedControlText,
                value === option && styles.segmentedControlTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [selectedUnit, setSelectedUnit] = useState('Metric');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Achievements Section */}
        <SectionHeader title="Achievements" />
        <View style={styles.card}>
          <ListItem
            title="Champion Bronze"
            description="Perform All tests for 14 days"
            onPress={() => {}}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KYWjIoCGFrU4dK9lBWqvKvcYOq5Nbc.png"
          />
        </View>

        {/* Account Section */}
        <SectionHeader title="Account" />
        <View style={styles.card}>
          <ListItem
            title="My Account"
            onPress={() => navigation.navigate("MyAccount")}
          />
        </View>

        {/* General Section */}
        <SectionHeader title="General" />
        <View style={styles.card}>
          <ListItem
            title="Body Measurements"
            onPress={() => navigation.navigate("BodyMeasurements")}
          />
          <View style={styles.separator} />
          <SegmentedControl
            label="Units"
            options={['Metric', 'Imperial']}
            value={selectedUnit}
            onChange={setSelectedUnit}
          />
        </View>

        {/* Add-ons Section */}
        <SectionHeader title="Add-ons" />
        <View style={styles.card}>
          <ListItem
            title="Connected Apps"
            onPress={() => {}}
          />
          <View style={styles.separator} />
          <ListItem
            title="My medical Files"
            onPress={() => {}}
          />
        </View>

        {/* Referral Program Section */}
        <SectionHeader title="Referral Program" />
        <View style={styles.card}>
          <ListItem
            title="Refer your Friends & Earn 10$"
            onPress={() => {}}
          />
        </View>

        {/* About Section */}
        <SectionHeader title="About" />
        <View style={styles.card}>
          <ListItem
            title="About eSteps"
            onPress={() => {}}
            icon="heart-outline"
          />
          <View style={styles.separator} />
          <ListItem
            title="Join our community"
            onPress={() => {}}
            icon="people-outline"
          />
          <View style={styles.separator} />
          <ListItem
            title="Terms and conditions"
            onPress={() => {}}
            icon="document-text-outline"
          />
          <View style={styles.separator} />
          <ListItem
            title="Support"
            onPress={() => {}}
            icon="help-circle-outline"
          />
          <View style={styles.separator} />
          <ListItem
            title="Rate us"
            onPress={() => {}}
            icon="star-outline"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 80, // Add padding to account for the tab bar
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.gray,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  listItemDescription: {
    fontSize: 14,
    color: COLORS.gray,
    fontWeight: '400',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  badgeImage: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 16,
  },
  segmentedControlContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  segmentedControlLabel: {
    fontSize: 16,
    color: COLORS.text,
  },
  segmentedControl: {
    flexDirection: 'row',
    gap: 8,
  },
  segmentedControlOption: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentedControlOptionSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  segmentedControlText: {
    fontSize: 14,
    color: COLORS.gray,
  },
  segmentedControlTextSelected: {
    color: 'white',
  },
});

export default SettingsScreen;