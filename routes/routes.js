import { 
    createStackNavigator 
    } 
from 'react-navigation';

import Welcome from './pages/welcome/welcome';
import Organizations from './pages/organizations/organizations';
import Repositories from './pages/repositories/repositories';

const Routes = createStackNavigator({
    Bemvindo : { screen: Welcome }
});

export default Routes;