import React from "react";
import { SearchBar } from "react-native-elements";


interface Props {
  handleChange: (text: string) => void;
  search: string
}

const SearchBox: React.FC<Props> = ({ handleChange, search}) => {

  return (<SearchBar
     placeholder="Type Here..." 
     lightTheme
     autoFocus={true}
      round
      searchIcon={{size: 24}}
          onChangeText={(text) => handleChange(text)}
          onClear={() => handleChange('')}

          value={search}
       />)

}

export default SearchBox;
