import  PropTypes from 'prop-types';
function User(props){
const  welcomeMessage =<h2 className="welcome">Welcome {props.username} </h2>
const loginMeassage =<h2 className="login">Plsese log in </h2>
 return (props.isLogin? welcomeMessage:loginMeassage)
// if(props.isLogin){
//   return <h2>Welcome {props.username} </h2>
// }
// else{
//   return <h2>Plsese log in </h2>
//}
// --------------
// return (props.isLogin ?<h2 className="welcome">Welcome {props.username} </h2>:<h2 className="login">Plsese log in </h2>);
}

User.prototype={
  isLogin:PropTypes.bool,
  username:PropTypes.string,
}
User.defaultProps ={
  isLogin:false,
  username:"gused",
}
export default User