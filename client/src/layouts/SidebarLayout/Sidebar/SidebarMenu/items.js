// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';

const menuItems = [
  {
    heading: 'Dashboard',
    items: [
      {
        name: 'Home',
        link: '/dashboards/home',
        icon: HomeIcon
      },
      {
        name: 'Transactions',
        link: '/dashboards/tasks',
        icon: PaidIcon
      }
      // {
      //   name: 'ETH Management',
      //   icon: ManageAccountsIcon,
      //   link: '/dashboards/messenger'
      // }
    ]
  }
];

export default menuItems;
