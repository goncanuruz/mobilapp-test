import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../redux';
import {setShowCreateVehicle} from '../../redux/modal/modalSlice';

export default function HomeScreen({navigation}: {navigation: any}) {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <View style={{flex: 1}}>
        <Button
          title="Show modal"
          onPress={() => dispatch(setShowCreateVehicle(true))}
        />
      </View>
    </View>
  );
}
