import Button from "../../UI/Buttons/Buttons";
import classes from "./SendResultButton.module.css";

const SendResultButton = (props) => {
  return (
    <Button
      className={classes.sendBtn}
      buttonContents={"Send Results"}
    ></Button>
  );
};

export default SendResultButton;
