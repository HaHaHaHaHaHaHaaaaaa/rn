import { AppRegistry } from 'react-native';
import RootNavigator from './RootNavigator'

import {
    StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native';
import Details from './src/views/Mine/Details'
const App = StackNavigator({
    Main: { screen: MainScreen },
    Details: { screen: Details },
});
class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Details', { name: 'Jane' })
                }
            />
        );
    }
}

AppRegistry.registerComponent('rn', () => App);
