import React, {Component} from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.startGameWithNickName = this.startGameWithNickName.bind(this);
  }
  startGameWithNickName(e) {
    e.preventDefault();
    this.setState({isLoggedIn: true});
  }
  render() {
    // render auth form
    if (!this.state.isLoggedIn)
      return (
        <form className="Auth">
          <div>
            <input type="text" placeholder="nickname"/>
            <button onClick={this.startGameWithNickName}>Go!</button>
          </div>
          <div>
            <p>
              or
            </p>
            <p>
              auth with social
            </p>
          </div>
          <div>
            <button disabled>VK</button>
          </div>
          <div>
            <button disabled>Facebook</button>
          </div>
          <div>
            <button disabled>Google</button>
          </div>
        </form>
      );
    else return (<div></div>)
  }
}