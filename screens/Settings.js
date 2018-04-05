import React, { Component } from 'react'
import { ScrollView, View, Button,  } from 'react-native'
import { List, ListItem } from 'react-native-elements'

class Settings extends Component {
  onLearnMore = () => {
    this.props.navigation.navigate('Me')
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <ScrollView>
        <View>
          <Button
          onPress={() => this.onLearnMore()}
            title="Go back to your profile"
          />
        </View>

        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    )
  }
}

export default Settings
