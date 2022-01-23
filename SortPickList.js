const rawData = [
    {
      type: "Folder",
      rowId: 1,
      itemId: 426,
      name: "Benefits",
      info: "",
      info2: "",
    },
    {
      type: "People",
      rowId: 1,
      itemId: 121,
      name: "John Doe",
      info: "",
      info2: "",
    },
    {
      type: "People",
      rowId: 1,
      itemId: 128,
      name: "Alex Tato",
      info: "",
      info2: "",
    },
  ];
  
  const sortData = (rawData) => { 
      const data = {
          Folder: [],
          People: [],
      }
      
      for(let i = 0; i < rawData.length; i++){
          const type = rawData[i].type;
          const name = rawData[i].name
          const value = rawData[i].itemId;
          
          if(type==="Folder"){
              data.Folder[data.Folder.length]={
                  "label": name,
                  "value": value,
              }
          }
          if(type==="People"){
              data.People[data.People.length]={
                  "label": name,
                  "value": value,
              }	
          }
          }
          return data;
    };
  
  const optionsArray = sortData(rawData);
  console.log(optionsArray);
  
  