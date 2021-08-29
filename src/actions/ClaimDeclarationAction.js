import * as types from '../constants/ActionType'
import ApiCaller from '../utils/ApiUtilily';
import * as Config from '../constants/ApiConfig'

export const searchDataPolicyRequest = () => {
    return async (dispatch) => {
        const res = await ApiCaller(Config.ENDPOINT.SEARCH_CLAIM, Config.GET, null);
        dispatch(searchDataPolicy({
            txtSothe: res.data.txtSothe,
            txtHoten: res.data.ho_ten,
            txtNgaysinh: res.data.ngay_sinh,
            ma_khach: res.data.ma_kh,
            ten_khach: res.data.ten_kh,
            txtNgay_dau: res.data.ngay_dau,
            txtNgay_cuoi: res.data.ngay_cuoi
        }));
    };
}

export const searchDataPolicy = (ClaimState) => {
    return {
        type: types.SEARCH_POLICY,
        ClaimState
    };
}
