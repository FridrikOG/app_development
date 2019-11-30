import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data';
import AdministratorList from '../../components/AdministratorList';


class Administrators extends React.Component{

      //const props = this.props.navigation.state.params;
      state = {
        administrators: data.administrators,
      }
      render(){
          const {administrators} = this.state
      return(
          <AdministratorList administrators = {administrators}/>
      )
    }
  };

  export default Administrators;
