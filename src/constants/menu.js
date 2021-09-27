import {
    Home,
    Box,
    DollarSign,
    BarChart
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Colleges', icon: Box, type: 'sub', active: false, children: [
            { path: '/colleges', title: 'Data', type: 'link' },
           ]
    },
    {
        title: 'Students', icon: Box, type: 'sub', active: false, children: [
            { path: '/students', title: 'Data', type: 'link' },
           ]
    }
]
