import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './component/SearchScreen'
import ResultShowScreen from './component/ResultShowScreen'


const navigator = createStackNavigator({
  search: SearchScreen,
  result: ResultShowScreen
}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'Food Search'
  }
})

export default createAppContainer(navigator)
