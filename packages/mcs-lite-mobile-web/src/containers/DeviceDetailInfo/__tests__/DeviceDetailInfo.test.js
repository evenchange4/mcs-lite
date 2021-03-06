import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDetailInfo from '../DeviceDetailInfo';

it('should renders <DeviceDetailInfo> correctly without device data', () => {
  const wrapper = shallow(
    <DeviceDetailInfo
      getMessages={() => {}}
      deviceId="deviceId"
      isLoading={false}
      fetchDeviceDetail={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <DeviceDetailInfo> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceDetailInfo
      getMessages={R.identity}
      deviceId="deviceId"
      device={{
        deviceId: 'deviceId',
        deviceName: 'deviceName',
        createUserId: 'createUserId',
        deviceDescription: 'deviceDescription',
        deviceKey: 'deviceKey',
        user: {
          userName: 'userName',
        },
        prototype: {
          version: 'version',
        },
      }}
      isLoading={false}
      fetchDeviceDetail={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith('deviceId');
});
