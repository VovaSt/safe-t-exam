
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
      },
      {
        name: 'Ports',
        image: './../../../../assets/icons/Ports.svg',
        link: '/ports',
      },
      {
        name: 'Cluster',
        image: './../../../../assets/icons/Cluster.svg',
        link: '/cluster',
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
      },
      {
        name: 'Connectors',
        image: './../../../../assets/icons/Connectors.svg',
        link: '/connectors',
      },
      {
        name: 'Authetication steps',
        image: './../../../../assets/icons/AutheticationSteps.svg',
        link: '/authetication_steps',
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
      },
      {
        name: 'User activity',
        image: './../../../../assets/icons/UserActivity.svg',
        link: '/user_activity',
      },
      {
        name: 'Logs',
        image: './../../../../assets/icons/Logs.svg',
        link: '/logs',
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
      },
      {
        name: 'License',
        image: './../../../../assets/icons/License.svg',
        link: '/license',
      },
      {
        name: 'Web SSL',
        image: './../../../../assets/icons/WebSSL.svg',
        link: '/web_SSL',
      },
      {
        name: 'User managment',
        image: './../../../../assets/icons/UserManagment.svg',
        link: '/user_managment',
      },
      {
        name: 'EULA',
        image: './../../../../assets/icons/EULA.svg',
        link: '/EULA',
      },
    ]
  },
]
