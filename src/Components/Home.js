import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

class Home extends PureComponent {
  render() {
    return (
      <View>
        <Input
          label='Owner'
          placeholder="Github's owner"
        />
        <Input
          label='Repo'
          placeholder="Github's repository name"
        />
        <Button
          title='SUBMIT'
          icon={{
            color: 'white',
            name:'paper-plane',
            size: 15,
            type: 'font-awesome'
          }}
        />
      </View>
    );
  }
}

export default Home;

