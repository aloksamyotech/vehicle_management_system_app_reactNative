import LogoutButton from "@/src/component/Profile/LogoutButton";
import ProfileCard from "@/src/component/Profile/ProfileCard";
import SettingCard from "@/src/component/Profile/SettingCard";
import OuterContainer from "@/src/styles/OuterContainer";
import TextBold from "@/src/styles/TextBold";
import TextNormal from "@/src/styles/TextNormal";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

const Profile = () => {
    return (
        <OuterContainer>
            <View style={{flex:1.4}}>
                <ProfileCard/>
            </View>
            <View style={{flex:2,
                
                }}>
                <SettingCard/>
                <LogoutButton/>
                </View>
            <View style={{flex:1,
                // backgroundColor:'lightgreen'
                }}>
                    
                </View>
        </OuterContainer>
    );
};

export default Profile;
