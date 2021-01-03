import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RootParamList = {
    Home: undefined;
    AppTabs:  undefined;
}

export type RootNavProps<T extends keyof RootParamList> = {
    navigation: StackNavigationProp<RootParamList, T>,
    route: RouteProp<RootParamList, T>
}

