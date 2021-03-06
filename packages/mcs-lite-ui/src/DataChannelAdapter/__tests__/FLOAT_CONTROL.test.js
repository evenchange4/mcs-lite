import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';
import DataChannel from '../../DataChannel';

it('should render FLOAT_CONTROL correctly with default value to empty', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: {},
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with zero', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with unit', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: { unit: '攝氏' },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should handle onChange', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: { unit: '攝氏' },
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlNumber).props().onChange({
    target: { value: 1.1 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id',
    type: 'CHANGE',
    values: { value: 1.1 },
  });
});

it('should handle onSubmit', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: { unit: '攝氏' },
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlNumber).props().onSubmit();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id',
    type: 'SUBMIT',
    values: { value: 0.11 },
  });
});

it('should handle onClear', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: { unit: '攝氏' },
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlNumber).props().onClear();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id',
    type: 'CLEAR',
    values: {},
  });
});
