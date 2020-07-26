import React, { Component, useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="SignupPage">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;

// functional component version with hooks
// function SignupPage(props) {

//   const [message, setMessage] = useState('')

//   const updateMessage = (msg) => {
//     setMessage(msg)
//   }

//   return (
//     <div className="SignupPage">
//       <SignupForm
//         {...props}
//         updateMessage={updateMessage}
//       />
//       <p>{message}</p>
//     </div>
//   );
// }
