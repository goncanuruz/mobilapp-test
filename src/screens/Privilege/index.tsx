import {Text, View} from 'react-native';

export default function PrivilegeScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {privilegeId}: {privilegeId: string} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HİZMET DETAYYYYYY! {privilegeId}</Text>
    </View>
  );
}
