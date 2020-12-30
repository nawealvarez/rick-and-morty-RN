import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Character } from "./interfaces"

export type CharactersParamList = {
    CharList: undefined;
    CharCard: {
        character: Character;
    };
    CharDetail: {
        id: string;
    };
}

export type CharNavProps<T extends keyof CharactersParamList> = {
    navigation: StackNavigationProp<CharactersParamList, T>,
    route: RouteProp<CharactersParamList, T>
}
