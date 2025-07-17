import { SafeAreaView, Text } from "react-native";
import { BackBtn } from "../components/backBtn";


export default function Consume(){
    return(
        <SafeAreaView>
            <BackBtn/>
            <Text>API</Text>
        </SafeAreaView>
    )
}