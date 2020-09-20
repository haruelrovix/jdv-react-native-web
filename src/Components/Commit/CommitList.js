import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { compose } from 'redux';
import fetch from 'fetch-hoc';

import { colors } from 'react-native-elements';

import styles from '../Shared.style';
import withHeader from '../../HOCs/withHeader';

const containerStyle = {
  alignItems: 'flex-start',
  borderBottomWidth: 1,
  flex: 1,
  width: Dimensions.get('window').width
};

class CommitList extends React.PureComponent {
  keyExtractor = (_, index) => index.toString()

  renderItem = ({ item }) => {
    const initials = item.commit.author.name.match(/\b\w/g).join('') || '';

    return (
      <ListItem bottomDivider
        theme={{
          colors: {
            ...colors,
            platform: {
              ...colors.platform,
              default: colors.platform.android
            }
          }
        }}
        containerStyle={containerStyle}
      >
        <Avatar
          title={initials}
          source={{ uri: (item.author && item.author.avatar_url) || undefined }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>{item.commit.author.name}</ListItem.Title>
          <ListItem.Subtitle>{item.commit.message}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  renderContent = () => (
    this.props.loading ?
      <ActivityIndicator color='#87ceeb' /> :
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.data}
        renderItem={this.renderItem}
      />
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

export default compose(
  withHeader({ title: 'Commits' }),
  fetch('https://api.github.com/repos/react-native-training/react-native-elements/commits')
)(CommitList);
