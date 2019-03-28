import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import styles from "./AccordianStyles";
import Collapsible from "react-native-collapsible";
import { ArrowIcon } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
import _ from "lodash";

class Accordian extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  getInnerContent = ({ value, listType }) => {
    getListIndicator = (listType, index) => {
      if (listType == "numbered")
        return (
          <Text style={[styles.bullet, { color: colors.black }]}>{`${index +
            1}.`}</Text>
        );
      else if (listType == "bullet")
        return <Text style={styles.bullet}>{"\u2022"}</Text>;
      else return null;
    };
    const content = _.isArray(value) ? (
      <View style={styles.bulletContainer}>
        {_.map(value, (point, index) => {
          return (
            <View style={{ flexDirection: "row" }} key={index}>
              {getListIndicator(listType, index)}
              <Text
                style={[styles.bulletText, { paddingLeft: listType ? 5 : 0 }]}
              >
                {point}
              </Text>
            </View>
          );
        })}
      </View>
    ) : (
      <Text style={styles.content}>{value}</Text>
    );
    return content;
  };

  wrapCollapseable = component => {
    const { collapsed } = this.state;
    return (
      <Collapsible collapsed={collapsed} align="center">
        {component}
      </Collapsible>
    );
  };

  wrapTouchableContainer = component => {
    return (
      <TouchableOpacity onPress={this.toggleExpanded}>
        {component}
      </TouchableOpacity>
    );
  };

  getMainContent = () => {
    const { label, value, collapseDisabled, emptyText, listType } = this.props;
    console.log("listType ", listType);
    if (_.isNull(value)) {
      value = emptyText;
    } else if (_.isArray(value) && value.length == 0) {
      value = emptyText;
    }

    const { collapsed } = this.state;

    const content = this.getInnerContent({ value, listType });

    return (
      <View style={styles.accordianContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{label}</Text>
          {!collapseDisabled ? (
            <View style={styles.arrowView}>
              {collapsed ? (
                <ArrowIcon
                  rotation={0}
                  fill={colors.strokeTwo}
                  height={11}
                  width={11}
                />
              ) : (
                <ArrowIcon
                  rotation={180}
                  fill={colors.steel}
                  height={11}
                  width={11}
                />
              )}
            </View>
          ) : null}
        </View>

        {!collapseDisabled ? this.wrapCollapseable(content) : content}
      </View>
    );
  };

  render() {
    const { collapseDisabled } = this.props;

    const mainContent = this.getMainContent();

    return collapseDisabled
      ? mainContent
      : this.wrapTouchableContainer(mainContent);
  }
}

export default Accordian;
