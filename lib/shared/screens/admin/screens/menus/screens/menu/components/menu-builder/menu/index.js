import Component from 'components/component';
import React, {PropTypes} from 'react';
import {draggedMenuItem} from 'actions/menu';
import {bindActionCreators} from 'redux';
import {dataConnect} from 'relate-js';

import Menu from './menu';

@dataConnect(
  (state) => ({
    menuId: state.router.params.id,
    dragging: state.dnd.dragging,
    menuData: state.menu
  }),
  (dispatch) => bindActionCreators({draggedMenuItem}, dispatch),
  (props) => ({
    fragments: Menu.fragments,
    variablesTypes: {
      menu: {
        _id: 'ID!'
      }
    },
    initialVariables: {
      menu: {
        _id: props.menuId
      }
    }
  })
)
export default class MenuContainer extends Component {
  static propTypes = {
    menuId: PropTypes.string.isRequired
  };

  render () {
    return (
      <Menu {...this.props} />
    );
  }
}