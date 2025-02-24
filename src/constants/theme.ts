export const COLORS = {
  primary: "#2DC6B8",
  background: "#FFFFFF",
  text: "#000000",
  gray: "#757575",
  lightGray: "#F5F5F5",
  border: "#E0E0E0",
  error: "#FF3B30",
  success: "#4CD964",
}

export const FONTS = {
  regular: {
    fontFamily: "System",
    fontWeight: "400" as "400",
  },
  medium: {
    fontFamily: "System",
    fontWeight: "500" as "500",
  },
  semibold: {
    fontFamily: "System",
    fontWeight: "600" as "600",
  },
  bold: {
    fontFamily: "System",
    fontWeight: "700",
  },
}

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
}

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 9,
  },
}

