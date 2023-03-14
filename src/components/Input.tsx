import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DictionaryContext } from "../store/context";
import { fetchWord } from "../utils/fetchWord";

interface Props {}



const Input: React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState<string>("");
  const dictCtx = useContext(DictionaryContext);

  const search = async (word: string) => {
    const formattedData = await fetchWord(word)
    dictCtx.newWordData({data: formattedData})
  };

  return (
    <Grid item xs={1}>
      <TextField
        size="medium"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        margin="none"
        color="primary"
        sx={{ height: 60 }}
        variant="outlined"
        label="Look up a word"
      />
      <Button
        onClick={() => search(inputText)}
        sx={{ height: 55 }}
        variant="contained"
      >
        GO
      </Button>
    </Grid>
  );
};

export default Input;
