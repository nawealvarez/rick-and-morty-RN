import React, {useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import SearchBox from './SearchBox';
import SwitchComponent from './Switch';
import {errorHandler} from '../utils';

import { EpisodeNavProps } from '../EpisodesParamList';
import { getAllEpisodes } from '../resolvers/Episodes';
import { Episode } from '../interfaces';
import EpisodeCard from './EpisodeCard';

function EpisodeList ({navigation}: EpisodeNavProps<'EpisodeList'>)  {

  const [searchBy, setSearchBy] = useState('name');
  const [searchField, setSearchField] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const {data, fetchMore, loading, error} = getAllEpisodes(searchBy, query);

  const queryData = data && data.episodes;
  const episodes = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

  const renderFooter = () => {
    if (data && loadingMore) {
      return <ActivityIndicator animating/>;
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
            fetchMoreResult.episodes.results = [
              ...prevResult.episodes.results,
              ...fetchMoreResult.episodes.results,
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
    setSearchBy(searchBy === 'name' ? 'episode' : 'name');
  };

  const handleOnPress = (episode: Episode) => {
      navigation.navigate('EpisodeDetail', {
      id: episode.id
    });
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating size="large" />
      ) : error ? (
        <Text style={{color: "red", textAlign: "center"}}>{errorHandler(error)}</Text>
      ) : episodes && episodes.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={episodes}
          renderItem={({item}) => 
            { return (
            <EpisodeCard key={item.id} episode={item} 
              onPress={() => handleOnPress(item)}
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
                secondSearch={'Episode'}
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

export default EpisodeList;
