import React from 'react';
import ClaimDeclaration from './components/general/ClaimDeclaration';
import ClaimManagement from './components/general/ClaimManagement'
import ClaimManagementStaff from './components/general/ClaimManagementStaff'
import UserCategory from './components/categories/UserCategory'
import PermisionCategory from './components/categories/PermisionCategory'
import StaffCategory from './components/categories/StaffCategory'
import NotFound from './components/general/NotFound'

const Routers = [
    {
        path : '/',
        exact : true,
        main : () => <ClaimDeclaration />
    },
    {
        path : '/trang-chu',
        exact : false,
        main : () => <ClaimDeclaration />
    },
    {
        path : '/quan-ly-boi-thuong-khach-hang',
        exact : false,
        main : () => <ClaimManagement />
    },
    {
        path : '/quan-ly-boi-thuong-nhan-vien',
        exact : false,
        main : () => <ClaimManagementStaff />
    },
    {
        path : '/danh-muc-nguoi-dung',
        exact : false,
        main : () => <UserCategory />
    },{
        path : '/danh-muc-quyen',
        exact : false,
        main : () => <PermisionCategory />
    },
    {
        path : '/danh-muc-nhan-vien',
        exact : false,
        main : () => <StaffCategory />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export default Routers;