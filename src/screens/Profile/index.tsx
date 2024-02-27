import {Text, View} from 'react-native';
import {useAppDispatch} from '../../redux';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}
