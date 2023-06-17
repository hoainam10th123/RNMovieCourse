import { Text, View } from "react-native";

interface Prop{
    message: string
}

export default function TextCom({message}: Prop){
    return (
        <>
            <View>
                <Text style={{color:'blue', fontSize:40}}>prop from parent:{message}</Text>
            </View>
        </>
    )
}