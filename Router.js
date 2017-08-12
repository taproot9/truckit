import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Scene,
    Reducer,
    Router,
    Modal,
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import TabIcon from './components/TabIcon';
import NavigationDrawer from './components/NavigationDrawer';
//killoy pages imports
import LoginPage from './components/LoginPage';
import ListViewTruck from './components/ListViewTruck';
import ListView from './components/ListView';
import ListViewRequests from './components/ListViewRequests';
import ListViewDone from './components/ListViewDone';
import ListViewOngoing from './components/ListViewOngoing';
import ListViewProfile from './components/ListViewProfile';

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: 'gray',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

class Example extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene key="LoginPage" component={LoginPage} title="Launch" initial type={ActionConst.REPLACE}/>
                        <Scene key="NavigationDrawer" component={NavigationDrawer} type={ActionConst.REPLACE}>
                            <Scene key="main" tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                                <Scene initial key="ListViewTruck" title="Trucks" component={ListViewTruck}   icon={TabIcon}/>
                                <Scene key="Request" component={ListViewRequests} title="Requests"   icon={TabIcon}/>
                                <Scene key="Ongoing" component={ListViewOngoing} title="Ongoings"  icon={TabIcon}/>
                                <Scene key="Done" component={ListViewDone} title="Done"  icon={TabIcon}/>
                                <Scene key="Profile" component={ListViewProfile} title="Profile"  icon={TabIcon}/>
                            </Scene>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default Example;
