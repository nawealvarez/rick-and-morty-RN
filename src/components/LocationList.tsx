import React, {useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import { Location } from '../interfaces';
import LocationCard from './LocationCard';
import SearchBox from './SearchBox';
import SwitchComponent from './Switch';

import {getAllLocations} from '../resolvers/Locations';
import { LocNavProps } from '../LocationsParamList';
import ErrorComponent from './Error';
import { useSwitch } from '../hooks/switch';
import { useSearch } from '../hooks/search';

function LocationList ({navigation}: LocNavProps<'LocationList'>)  {

  const switchToggle = useSwitch();
  const search = useSearch();

  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const {data, fetchMore, loading, error} = getAllLocations(switchToggle.searchBy, search.query);
  const queryData = data && data.locations;
  const locations = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

  const handleLoadMore = () => {
    if (fetchMore && canLoadMore) {
      setLoadingMore(true);
      fetchMore({
        variables: {page: queryData?.info.next},
        updateQuery: (prevResult, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prevResult;
          {
            fetchMoreResult.locations.results = [
              ...prevResult.locations.results,
              ...fetchMoreResult.locations.results,
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

  const handleOnPress = (location: Location) => {
      navigation.navigate('LocationDetail', {
      id: location.id
    });
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating size="large" />
      ) : error ? (
        <ErrorComponent error={error} handleChange={search.handleChange} />
      ) : locations && locations.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={locations}
          renderItem={({item}) => 
            { return (
            <LocationCard key={item.id} location={item} 
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

export default LocationList;
