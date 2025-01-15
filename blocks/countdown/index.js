import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

const Countdown = {
  ...metadata,
  edit: Edit,
  save: Save,
};
export default Countdown;
