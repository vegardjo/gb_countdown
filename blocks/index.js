import { registerBlockType } from "@wordpress/blocks";
import Countdown from "./countdown";

registerBlockType("text/countdown", Countdown);
