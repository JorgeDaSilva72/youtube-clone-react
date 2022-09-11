import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography p={2} variant="subtitle1" fontWeight="bold" color="#FFF">
        Jorge Santé
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
