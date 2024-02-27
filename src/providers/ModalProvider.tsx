import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateVehicle from '../components/Modals/CreateVehicle';
import CreateVehicleModal from '../components/Modals/CreateVehicle';

const ModalProvider = ({children}: any) => {
  return (
    <SafeAreaProvider>
      <CreateVehicleModal />
      {children}
    </SafeAreaProvider>
  );
};
export default ModalProvider;
