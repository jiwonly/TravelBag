export const addItemToData = (inputValue, setData) => {
  if (inputValue.trim()) {
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        content: inputValue,
      },
    ]);
  }
};
