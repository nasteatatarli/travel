import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

export default function InputWithIcon() {
  return (
    <Input
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
  //     </FormControl>
  //     <TextField
  //       id="input-with-icon-textfield"
  //       label="TextField"
  //       InputProps={{
  //         startAdornment: (
  //           <InputAdornment position="start">
  //             <AccountCircle />
  //           </InputAdornment>
  //         ),
  //       }}
  //       variant="standard"
  //     /> */}

  //       {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
  //       <TextField id="input-with-sx" label="With sx" variant="standard" />

  //   // </Box>
  // );
}
