import React from "react";
import { Paper, Button } from "@mui/material";

const Item = ({ title, imagen }) => {
	return (
		<Paper>
			<img src={imagen} alt={title} />
			<Button className="CheckButton">Check it out!</Button>
		</Paper>
	);
};
export default Item;
