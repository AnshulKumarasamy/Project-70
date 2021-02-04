import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WritingStory extends React.Component{
    render(){
        return(
            <View>
                <Header
                    backgroundColor={'#9c8210'}
                    centerComponent={{
                        text: 'Monkey Chunky',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                />

                <TextInput
                    style={styles.inputBox}
                />

                <TextInput
                    style={styles.inputBox}
                />

                <TextInput
                    style={styles.inputBox}
                    multiline={true}
                />

                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
});