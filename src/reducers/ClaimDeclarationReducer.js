import * as types from '../constants/ActionType';

let initialState = {};

const ClaimState = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_POLICY:
            state = action.ClaimState;
            return state;
        default:
            return state;
    }
}
export default ClaimState;

// const initialState = {
//     txtSothe: '0123456',
//     txtHoten: 'Nguyễn Văn Đài',
//     txtNgaysinh: 'new Date()',
//     ma_khach: '01.00022233',
//     ten_khach: 'Công ty cổ phần PVI',
//     txtNgay_dau: 'new Date()',
//     txtNgay_cuoi: 'new Date()',
//     documentList: [
//         {
//             id: 1,
//             type: '01',
//             typeName: 'Giấy yêu cầu',
//             fileName: 'giayyeucau.pdf',
//             filePath: '',
//             fileExtension: 'pdf',
//             fileData: ''
//         },
//         {
//             id: 2,
//             type: '02',
//             typeName: 'Đơn thuốc',
//             fileName: 'don_thuoc.jpg',
//             filePath: '',
//             fileExtension: 'jpg',
//             fileData: ''
//         }
//     ]
// };