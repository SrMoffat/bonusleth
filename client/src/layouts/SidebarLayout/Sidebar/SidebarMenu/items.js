import { VisibilityRounded } from '@mui/icons-material';
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
      },
      {
        name: 'Recognition',
        link: '/dashboards/recognition',
        icon: VisibilityRounded
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
