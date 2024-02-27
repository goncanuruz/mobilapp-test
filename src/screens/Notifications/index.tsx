import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../redux';
import {setShowCreateVehicle} from '../../redux/modal/modalSlice';

export default function NotificationScreen({navigation}: {navigation: any}) {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification!</Text>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'PrivilegeDetailScreen',
            params: {privilegeId: 'privilegeId-value'},
          });
        }}
        style={{flex: 1}}>
        <Text style={{color: '#673ab7'}}>{'Detaya git'}</Text>

        <View style={{flex: 1}}>
          <Button
            title="Show modal"
            onPress={() => dispatch(setShowCreateVehicle(true))}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
