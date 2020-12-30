import React, {useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Character} from '../interfaces';
import CharCard from './CharCard';
import SearchBox from './SearchBox';
import SwitchComponent from './Switch';

import {getAllCharacters} from '../resolvers/Characters';
import { CharactersParamList, CharNavProps } from '../CharactersParamList';
import { RootParamList } from '../RootParamList';
import { createStackNavigator } from '@react-navigation/stack';

// interface Props {
//   characters: Character[];
//   loading: boolean;
//   error: Error; 
// }

const Stack = createStackNavigator<RootParamList>();

function CharList ({navigation}: CharNavProps<'CharList'>)  {
  //const navigation = useNavigation();

  const [searchBy, setSearchBy] = useState('name');
  const [searchField, setSearchField] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const {data, fetchMore, loading, error} = getAllCharacters(searchBy, query);

  const queryData = data && data.characters;
  const characters = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

  const renderFooter = () => {
    if (data && loadingMore) {
      return <ActivityIndicator />;
    } else {
      return null;
    }
  };

  const handleChange = (text: string) => {
    setSearchField(text);
    if (text.length > 2 || text === '') {
      setQuery(text);
    }
  };

  const handleLoadMore = () => {
    if (fetchMore && canLoadMore) {
      setLoadingMore(true);
      fetchMore({
        variables: {page: queryData?.info.next},
        updateQuery: (prevResult, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prevResult;
          {
            fetchMoreResult.characters.results = [
              ...prevResult.characters.results,
              ...fetchMoreResult.characters.results,
            ];
            setLoadingMore(false);
            return fetchMoreResult;
          }
        },
      });
    } else {
      return null;
    }
  };

  const handleSwitch = () => {
    setSearchBy(searchBy === 'name' ? 'type' : 'name');
  };

  const handleOnPress = (character: Character) => {
      navigation.navigate('CharDetail', {
      id: character.id
    });
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating size="large" />
      ) : error ? (
        <Text>Error.</Text>
      ) : characters && characters.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characters}
          renderItem={({item}) => 
            { return (
            <CharCard key={item.id} character={item} 
           
            />)}}
          numColumns={2}
          ListHeaderComponent={
            <View style={{backgroundColor: "#f5f5f5"}}>
              <SearchBox
                handleChange={handleChange}
                search={searchField}
              />
              <SwitchComponent 
                checked={searchBy === 'name'}
                handleSwitch={handleSwitch}
                secondSearch={'Type'}
              />
            </View>
          }
          stickyHeaderIndices={[0]}
          ListFooterComponent={renderFooter}
          keyExtractor={(item, index) => `${index}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
        />
      ) : (
        <Text>No data.</Text>
      )}
    </View>
  );
};

export default CharList;
