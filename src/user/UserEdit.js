let React = require('react'),
  ReactRedux = require('react-redux'),
  Header = require('../app/Header'),
  Link = require('react-router').Link;

const Edit = React.createClass({
  render() {
    return (
      <div className="main-panel">
        <Header account={this.props.auth.user.name} />
        <div className="page">
          <div className="container">
            <h1>Edit Profile</h1>
            <p><a href={`${process.env.STEEMCONNECT_HOST}/logout`} target="_blank">Log Out</a></p>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = function (state) {
  return {
    auth: state.auth
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(Edit);
