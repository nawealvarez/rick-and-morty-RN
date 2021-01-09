import React, {useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import {Character} from '../interfaces';
import CharCard from './CharCard';
import SearchBox from './SearchBox';
import SwitchComponent from './Switch';

import {getAllCharacters} from '../resolvers/Characters';
import { CharNavProps } from '../CharactersParamList';
import ErrorComponent from './Error';
import { useSwitch } from '../hooks/switch';
import { useSearch } from '../hooks/search';


function CharList ({navigation}: CharNavProps<'CharList'>)  {

  const switchToggle = useSwitch();
  const search = useSearch();
  
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const {data, fetchMore, loading, error} = getAllCharacters(switchToggle.searchBy, search.query);
  const queryData = data && data.characters;
  const characters = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

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

  const handleOnPress = (character: Character) => {
      navigation.navigate('CharDetail', {
      id: character.id
    });
  };

  return (
    <View>
      {loading ? 
        <ActivityIndicator animating size="large" />
       : error ? 
       <ErrorComponent error={error} handleChange={search.handleChange} />
       : characters && characters.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characters}
          renderItem={({item}) => 
            { return (
            <CharCard key={item.id} character={item} 
              onPress={() => handleOnPress(item)}
            />)}}
          numColumns={2}
          ListHeaderComponent={
            <View style={{backgroundColor: "#f5f5f5"}}>
              <SearchBox
                handleChange={search.handleChange}
                search={search.searchField}
              />
              <SwitchComponent 
                checked={switchToggle.searchBy === 'name'}
                handleSwitch={switchToggle.handleSwitch}
                secondSearch={'Type'}
              />
            </View>
          }
          stickyHeaderIndices={[0]}
          ListFooterComponent={data && loadingMore ? <ActivityIndicator animating/> : null}
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
