import React from 'react';
import {SearchBar} from 'react-native-elements';

interface Props {
  handleChange: (text: string) => void;
  search: string;
}

const SearchBox: React.FC<Props> = ({handleChange, search}) => {
  return (
    <SearchBar
      inputStyle={{backgroundColor: 'white'}}
      containerStyle={{
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
      }}
      inputContainerStyle={{backgroundColor: 'white'}}
      placeholder="Type Here..."
      autoFocus={true}
      round
      searchIcon={{size: 24}}
      onChangeText={(text) => handleChange(text)}
      onClear={() => handleChange('')}
      value={search}
    />
  );
};

export default SearchBox;
