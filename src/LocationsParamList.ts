import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Location } from "./interfaces"

export type LocationsParamList = {
    LocationList: undefined;
    LocationCard: {
        location: Location;
    };
    LocationDetail: {
        id: string;
    };
}

export type LocNavProps<T extends keyof LocationsParamList> = {
    navigation: StackNavigationProp<LocationsParamList, T>,
    route: RouteProp<LocationsParamList, T>
}
