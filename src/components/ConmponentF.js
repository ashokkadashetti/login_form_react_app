import React, { Component } from 'react';
import { UserReciver } from './UserContext';

export class ConmponentF extends Component {
  render() {
    return (
      <UserReciver>
          {
              (username) => {
                return <h3>Hello {username}</h3>
              }
          }
      </UserReciver>
    );
  }
}

export default ConmponentF;
