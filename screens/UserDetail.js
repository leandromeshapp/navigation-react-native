import React, { Component } from 'react'
import { ScrollView, View, Dimensions, Modal, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Tile, List, ListItem } from 'react-native-elements'

class UserDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
        modalVisible: false,
    }
}

  launchModal(bool) {
    this.setState({modalVisible: bool})
  }

  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params

    let size = (Dimensions.get('window').width - 12 ) / 3

    let {width} = Dimensions.get('window')
    this.imgSize = (width - 16) / 3

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
          onPress={() => {this.launchModal(true)}}
        />

        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType='fade'>

          <Image
            style={{width: 300, height: 250}}
            source={{ uri: picture.large}}
          />

          <TouchableOpacity onPress={() => {this.launchModal(false)}}>
            <Text>{`Close modal`}</Text>
          </TouchableOpacity>
      </Modal>

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    )
  }
}

export default UserDetail
