import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "js/UIElements/colors";
import { HEADER_HEIGHT, STATUS_BAR_HEIGHT, fontStyle } from "js/static";
import { isIphoneX, normalizeFonts } from "js/Services";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const styles = StyleSheet.create({
  accordianContainer: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.strokeTwo
  },
  heading: {
    fontSize: 16,
    color: colors.black,
    maxWidth: "80%",
    ...fontStyle.bold,
    width: "auto"
  },
  headingContainer: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  bulletContainer: {
    marginTop: 8
  },
  arrowView: {
    height: 20,
    justifyContent: "center"
  },
  content: {
    fontSize: 16,
    color: colors.black,
    marginTop: 8
  },
  bullet: {
    fontSize: 16
  },
  bulletText: {
    fontSize: 16,
    color: colors.black,
    flex: 1
    // paddingLeft: 5
  }
});

export default styles;
