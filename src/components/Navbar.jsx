import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={0}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="logo"
        height={45}
        sx={{ height: { xs: "20", sm: "25", md: "45" } }}
      />
      <Typography
        p={2}
        sx={{
          visibility: { xs: "hidden", sm: "hidden", md: "visible" },

          px: { md: 2 },
        }}
        variant="subtitle2"
        fontWeight="bold"
        color="#FFF"
      >
        Jorge Santé
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
