export const fetchWord = async (word: string) => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!data.ok) {
      console.log("Error!");
      return({ data: `Word ${word} couldn't be found` });
  
    }
    const formattedData = await data.json();
    return formattedData
  };