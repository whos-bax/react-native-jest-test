jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from "../src/Profile";
//
// jest.spyOn(Alert, 'alert');
//
describe('Profile', () => {
    it('Profile 화면이 정상적으로 렌더링 되는가?', () => {
        const screen = render(<Profile />);
        const json = screen.toJSON();
        expect(json).toMatchSnapshot();
    });
    // it('타이틀이 정상적으로 보여지는가?', () => {
    //     const screen = render(<Profile />);
    //     const title = screen.getByText('Your Favorite Restaurants!');
    //     expect(title).toBeDefined();
    // });
    // it('레스토랑 이름을 입력할 수 있는 텍스트 필드가 존재하는가?', () => {
    //     const screen = render(<Profile />);
    //     expect(screen.getByTestId('restaurantNameField')).toBeDefined();
    // });
    // it('레스토랑을 추가할 수 있는 추가 버튼이 존재하는가?', () => {
    //     const screen = render(<Profile />);
    //     expect(screen.getByTestId('restaurantAddButton')).toBeDefined();
    // });
    // it('레스토랑 이름을 추가하지 않고 추가 버튼을 누를 경우 예외 문구가 표시 되는가?', () => {
    //     const screen = render(<Profile />);
    //     const title = '레스토랑 추가 실패';
    //     const message = '레스토랑 이름을 입력해주세요!';
    //     const button = screen.getByTestId('restaurantAddButton');
    //     fireEvent(button, 'press');
    //     const json = screen.toJSON();
    //     expect(Alert.alert).toHaveBeenCalledWith(title, message);
    //     expect(json).toMatchSnapshot();
    // });
    // it('레스토랑을 추가할 수 있는가?', () => {
    //     const names = [
    //         '1st gourmet',
    //         'sushi daisuki',
    //         'udonya',
    //     ];
    //     const screen = render(<Profile />);
    //     const input = screen.getByTestId('restaurantNameField');
    //     const button = screen.getByTestId('restaurantAddButton');
    //     for (const name of names) {
    //         fireEvent(input, 'changeText', name);
    //         fireEvent(button, 'press');
    //         expect(screen.getByText(name)).toBeDefined();
    //     }
    // });
});
