import React, { Component } from 'react';

class Users extends Component {
  render() {
    let friends = this.props.list.filter( function (user) {
      return user.friend === true
    });

    let nonFriends = this.props.list.filter( function (user) {
      return user.friend !== true
    });

    return (
      <div>
        <h1>Friends:</h1>
        <ul>
          {friends.map(function (user) {
            return <li key={user.name}>{user.name}</li>
          })}
        </ul>
        <h1>Non Friends:</h1>
        <ul>
          {nonFriends.map(function (user) {
            return <li key={user.name}>{user.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Users;