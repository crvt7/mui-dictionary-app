import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DictionaryContext } from "../store/context";
import { fetchWord } from "../utils/fetchWord";

type Props = {
  list: string[];
};

const Synonyms: React.FC<Props> = ({ list }) => {
  const dictCtx = useContext(DictionaryContext);

  const handleClick = async (word: string) => {
    const formattedData = await fetchWord(word)
    dictCtx.newWordData({data: formattedData})
  }

  if (list.length === 0){
    return null
  }
  return (
    <Paper elevation={3} sx={{marginTop:1, paddingTop:2}}>
    <Typography marginLeft={2} variant="h5">Synonyms</Typography>
    <List>
      {list.map((word) => {
        return <ListItem key={word} onClick={() => handleClick(word)}>
            <ListItemButton>
              <ListItemText primary={word} />
            </ListItemButton>
        </ListItem>;
      })}
    </List>
    </Paper>
  );
};

export default Synonyms;
