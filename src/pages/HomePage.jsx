import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<Typography variant="h2" component="h1" gutterBottom>
				Welcome to Trailer Booker
			</Typography>
			<Typography variant="h5" gutterBottom>
				Your one-stop shop for trailer car booking
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
				<Button
					variant="contained"
					color="primary"
					size="large"
					component={Link}
					to="/catalogue"
					sx={{ marginRight: 2 }}>
					Explore
				</Button>
				<Button
					variant="contained"
					color="primary"
					size="large"
					component={Link}
					to="/favorites">
					Favorites
				</Button>
			</Box>
		</Box>
	);
}

export default HomePage;
