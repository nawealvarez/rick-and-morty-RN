import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Episode } from "./interfaces"

export type EpisodesParamList = {
    EpisodeList: undefined;
    EpisodeCard: {
        episode: Episode;
    };
    EpisodeDetail: {
        id: string;
    };
}

export type EpisodeNavProps<T extends keyof EpisodesParamList> = {
    navigation: StackNavigationProp<EpisodesParamList, T>,
    route: RouteProp<EpisodesParamList, T>
}

