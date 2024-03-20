function ProfilePic(){
 const imageUrl ='./src/assets/photo.jpeg';
//  const handleClick = (e) =>console.log(
//   "OUCH"
//  );
//  return(<img  onClick={(e)=> handleClick(e)}src={imageUrl}></img>)
// }
const handleClick = (e) =>e.target.style.display ="none";
 return(<img  onClick={(e)=> handleClick(e)}src={imageUrl}></img>)
}
export default ProfilePic