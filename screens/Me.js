import React, { Component } from 'react'
import { ScrollView, View, Dimensions, Modal, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native'
import { Tile, List, ListItem, Button, ListView} from 'react-native-elements'
import { RkModalImg } from 'react-native-ui-kitten'
import { me } from '../config/data'

import { BlurView } from 'react-native-blur'

class Me extends Component {
  constructor(props) {
    super(props)

    this.state = {
        modalVisible: false,
    }
}

  launchModal(bool) {
    this.setState({modalVisible: bool})
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings')
  }

  render() {
    let size = (Dimensions.get('window').width - 12 ) / 3

    let {width} = Dimensions.get('window')
    this.imgSize = (width - 16) / 3
    return (

      <View>
        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
          onPress={() => {this.launchModal(true)}}
        />

      <Modal
        visible={this.state.modalVisible}
        transparent={true}
        animationType='fade'>
          {/* <BlurView
            blurType='light'
            style={styles.contentWrap}> */}

          <Image
            style={{width: 300, height: 250,}}
            source={{ uri: this.props.picture.large}}
          />

          <TouchableOpacity onPress={() => {this.launchModal(false)}}>
            <Text>{`Close modal`}</Text>
          </TouchableOpacity>
          {/* </BlurView> */}
      </Modal>

        {/* <RkModalImg
              style={{width: this.imgSize, height: this.imgSize}}
              source={{ uri: this.props.picture.large}}
          /> */}
        <Button
          raised
          backgroundColor="#66ccff"
          rounded = "true"
          icon={{name: 'cached'}}
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainWrap: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
  },

  contentWrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
})

Me.defaultProps = { ...me }

export default Me
