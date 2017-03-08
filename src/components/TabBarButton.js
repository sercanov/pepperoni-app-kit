import React, {PropTypes, Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import * as theme from '../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';

class TabBarButton extends Component {
  static displayName = 'TabBarButton';

  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  getIconTab() {
    var iconImage = '';
    if (Platform.OS === 'ios') {
      iconImage = (this.props.text === 'Where to eat')
        ? 'ios-pizza'
        : 'ios-information-circle';
    } else {
      iconImage = (this.props.text === 'Where to eat')
        ? 'md-pizza'
        : 'md-information-circle';
    }
    var iconColor = this.props.isSelected ? theme.colors.selectedTabText : theme.colors.tabText;
    return (<Icon name={iconImage} size={20} color={iconColor}/>);
  }

  getTextTab() {
    const labelValue = (Platform.OS === 'android') ? this.props.text.toUpperCase() : this.props.text;
    return <Text style={[styles.text, this.props.isSelected && styles.selectedText]}>{labelValue}</Text>;
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.action}
        style={[styles.button, this.props.isSelected && styles.selected]} >
        {this.getIconTab()}
        {this.getTextTab()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.tabBorder,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.tabBorder,
    backgroundColor: theme.colors.tab
  },
  selected: {
    backgroundColor: theme.colors.selectedTab
  },
  text: {
    color: theme.colors.tabText,
    fontSize: 14,
    fontFamily: 'System'
  },
  selectedText: {
    color: theme.colors.selectedTabText,
    ...Platform.select({
      ios: {
        fontWeight: 'bold'
      }
    }),
    fontFamily: 'System'
  }
});

export default TabBarButton;
