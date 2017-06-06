/**sidebar和headbar中的菜单项**/

const sidebarMenu = [
  {
    key: 'index',
    name: '菜单1',
    icon: 'bar-chart',
    child:[
      {
        key: 'option1',
        name: '子菜单1',
        icon: 'dot-chart',
      },
      {
        key: 'option2',
        name: '子菜单2',
        icon: 'pie-chart',
      },
      {
        key: 'option3',
        name: '子菜单3',
        icon: 'area-chart',
      }
    ]
  }
];


export default sidebarMenu;
