import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
    onBack: () => void
}

export default function HeaderSearch({onBack}: Props) {
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={onBack}>
                    <Icon name="back" size={40} color='blue' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}