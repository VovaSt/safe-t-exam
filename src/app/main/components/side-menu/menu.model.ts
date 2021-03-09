
export interface MenuItem {
  name: string;
  image: string;
  link?: string;
  children?: MenuItem[];
}

export const MenuMap: MenuItem[] = [
  {
    name: 'Infrastructure',
    image: './../../../../assets/icons/Infrastructure.svg',
    children: [
      {
        name: 'Services',
        image: './../../../../assets/icons/Services.svg',
        link: '/services',
        children: []
      },
      {
        name: 'Ports',
        image: './../../../../assets/icons/Ports.svg',
        link: '/ports',
        children: []
      },
      {
        name: 'Cluster',
        image: './../../../../assets/icons/Cluster.svg',
        link: '/cluster',
        children: []
      },
    ]
  },
  {
    name: 'Rules',
    image: './../../../../assets/icons/Rules.svg',
    link: '/rules',
    children: []
  },
  {
    name: 'Authetication',
    image: './../../../../assets/icons/Authetication.svg',
    children: [
      {
        name: 'Policies',
        image: './../../../../assets/icons/Policies.svg',
        link: '/policies',
        children: []
      },
      {
        name: 'Connectors',
        image: './../../../../assets/icons/Connectors.svg',
        link: '/connectors',
        children: []
      },
      {
        name: 'Authetication steps',
        image: './../../../../assets/icons/AutheticationSteps.svg',
        link: '/authetication_steps',
        children: []
      },
    ]
  },
  {
    name: 'Trusted groups',
    image: './../../../../assets/icons/TrustedGroups.svg',
    link: '/trusted_groups',
    children: []
  },
  {
    name: 'Reports',
    image: './../../../../assets/icons/Reports.svg',
    children: [
      {
        name: 'Audit',
        image: './../../../../assets/icons/Audit.svg',
        link: '/audit',
        children: []
      },
      {
        name: 'User activity',
        image: './../../../../assets/icons/UserActivity.svg',
        link: '/user_activity',
        children: []
      },
      {
        name: 'Logs',
        image: './../../../../assets/icons/Logs.svg',
        link: '/logs',
        children: []
      },
    ]
  },
  {
    name: 'Settings',
    image: './../../../../assets/icons/Settings.svg',
    children: [
      {
        name: 'General',
        image: './../../../../assets/icons/General.svg',
        link: '/general',
        children: []
      },
      {
        name: 'License',
        image: './../../../../assets/icons/License.svg',
        link: '/license',
        children: []
      },
      {
        name: 'Web SSL',
        image: './../../../../assets/icons/WebSSL.svg',
        link: '/web_SSL',
        children: []
      },
      {
        name: 'User managment',
        image: './../../../../assets/icons/UserManagment.svg',
        link: '/user_managment',
        children: []
      },
      {
        name: 'EULA',
        image: './../../../../assets/icons/EULA.svg',
        link: '/EULA',
        children: []
      },
    ]
  },
]
