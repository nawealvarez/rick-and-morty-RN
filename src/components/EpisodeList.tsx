import React, {useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import { EpisodeCard, ErrorComponent, SearchBox, SwitchComponent } from '../components';
import { EpisodeNavProps } from '../EpisodesParamList';
import { getAllEpisodes } from '../resolvers/Episodes';
import { Episode } from '../interfaces';
import { useSwitch } from '../hooks/switch';
import { useSearch } from '../hooks/search';

function EpisodeList ({navigation}: EpisodeNavProps<'EpisodeList'>)  {
  const secondSearch = "episode";

  const switchToggle = useSwitch(secondSearch);
  const search = useSearch();
  
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const {data, fetchMore, loading, error} = getAllEpisodes(switchToggle.searchBy, search.query)
  const queryData = data && data.episodes;
  const episodes = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

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
        <ErrorComponent error={error} handleChange={search.handleChange} />
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
                handleChange={search.handleChange}
                search={search.searchField}
              />
              <SwitchComponent 
                checked={switchToggle.searchBy === 'name'}
                handleSwitch={switchToggle.handleSwitch}
                secondSearch={secondSearch}
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

export default EpisodeList;
