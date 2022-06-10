import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaidIcon from '@mui/icons-material/Paid';

const menuItems = [
  {
    heading: 'Dashboards',
    items: [
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
