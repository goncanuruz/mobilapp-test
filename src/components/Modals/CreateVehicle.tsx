import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useAppDispatch, useAppSelector} from '../../redux';
import {setShowCreateVehicle} from '../../redux/modal/modalSlice';

function CreateVehicleModal() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(x => x.modal.showCreateVehicle);

  const onModalOpen = () => {
    dispatch(setShowCreateVehicle(!show));
  };
  return (
    <Modal
      isVisible={show}
      swipeDirection="up"
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={() => onModalOpen()} />
      </View>
    </Modal>
  );
}

export default CreateVehicleModal;
