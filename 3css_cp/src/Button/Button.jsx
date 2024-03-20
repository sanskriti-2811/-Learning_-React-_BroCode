// import styles from "./Button.module.css"
function Button(){
  const  styles ={
    backgroundcolor: "hsl(200, 100%, 50%)",
  color: "white",
  padding: "10px 20px ",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  }
 return(
  // External --- <button className="button">Click me</button>
  // Module---- <button className={styles.button}>Click me</button>
  // Inline----
  
  <button style={styles}>Click me</button>
 );
}
export default Button;