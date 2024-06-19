import { RootTabsParamsList } from "./BottomTabsRoutes";
import { RootStackParamsList } from "./StackRoutes";


declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamsList , RootTabsParamsList{}
        
    }
}