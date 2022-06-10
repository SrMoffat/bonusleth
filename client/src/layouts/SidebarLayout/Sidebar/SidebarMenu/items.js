import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';

const menuItems = [
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Home',
        icon: HomeIcon,
        link: '/overview'
      },
      {
        name: 'Transactions',
        link: '/dashboards/tasks',
        icon: PaidIcon
      },
      {
        name: 'ETH Management',
        icon: ManageAccountsIcon,
        link: '/dashboards/messenger'
      }
    ]
  }
];

export default menuItems;
