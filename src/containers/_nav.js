export default [
  {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
          color: 'info',
          text: 'NEW',
      }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Roles Management',
    route: '/roles',
    icon: 'cil-user',
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Roles List',
            to: '/role/list',
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Create New Role',
            to: '/role/create',
        },
    ],
},
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Employee Management',
    route: '/student',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee List',
        to: '/student/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create New Employee',
        to: '/student/create',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Hospital Management',
    route: '/hospital',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Area',
        to: '/hospital/Areas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Area',
        to: '/hospital/ManageArea',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Block',
        to: '/hospital/Blocks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Block',
        to: '/hospital/ManageBlock',
      }
    ],
  },
  {
      _tag: 'CSidebarNavTitle',
      _children: ['Scheduler']
  },
  
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Employee Scheduler',
      route: '/course',
      icon: 'cil-puzzle',
      _children: [
          {
              _tag: 'CSidebarNavItem',
              name: 'Doctor Scheduler ',
              to: '/course/list',
          },
          {
              _tag: 'CSidebarNavItem',
              name: 'Nurse Scheduler',
              to: '/scheduler/NurseScheduler',
          },
      ],
  },






  {
    _tag: 'CSidebarNavTitle',
    _children: ['Roaster']
},

{
    _tag: 'CSidebarNavDropdown',
    name: ' Roaster',
    route: '/course',
    icon: 'cil-puzzle',
    _children: [
        {
            _tag: 'CSidebarNavDropdown',
            name: 'Staff  ',
           
            _children: [
              {
                  _tag: 'CSidebarNavItem',
                  name: 'Display Staff ',
                  to: '/roaster/DisplayStaff',
              },
              {
                _tag: 'CSidebarNavItem',
                name: 'Display Staff By Role ',
                to: '/roaster/TopNavBar',
            }
          ],
        },
        {
          _tag: 'CSidebarNavDropdown',
          name: 'Day Groups ',
          to: '/roaster/TopNavBar',
          _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Display Day Groups ',
                to: '/roaster/TopNavBar',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'Create New Day Group  ',
              to: '/roaster/TopNavBar',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Set Number Of Days  ',
            to: '/roaster/TopNavBar',
        },
        
        ],
      },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Shifts ',
        to: '/roaster/TopNavBar',
        _children: [
          {
              _tag: 'CSidebarNavItem',
              name: 'Display Shifts ',
              to: '/roaster/DisplayShifts',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Create New Shift  ',
            to: '/roaster/TopNavBar',
        },
        
      
      ],
    },
  //   {
  //     _tag: 'CSidebarNavDropdown',
  //     name: 'SKill Mix ',
  //     to: '/roaster/TopNavBar',
  //     _children: [
  //       {
  //           _tag: 'CSidebarNavItem',
  //           name: 'Display Skill Mix Rules ',
  //           to: '/roaster/TopNavBar',
  //       },
  //       {
  //         _tag: 'CSidebarNavItem',
  //         name: 'Create Skill Mix Rules  ',
  //         to: '/roaster/TopNavBar',
  //     },
      
    
  //   ],
    
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Shift Sequence ',
    to: '/roaster/ShiftSequence',
    _children: [
      {
          _tag: 'CSidebarNavItem',
          name: 'Display Shift Sequence ',
          to: '/roaster/ShiftSequence',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create  New Shift Sequence  ',
        to: '/roaster/TopNavBar',
    },
    
  
  ],
  
},
// {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Leave ',
//   to: '/roaster/TopNavBar',
//   _children: [
//     {
//         _tag: 'CSidebarNavItem',
//         name: 'Display leaves ',
//         to: '/roaster/TopNavBar',
//     },

  

// ],

// },
{
  _tag: 'CSidebarNavDropdown',
  name: 'Staff Requests ',
  to: '/roaster/TopNavBar',
  _children: [
    {
        _tag: 'CSidebarNavItem',
        name: 'Display Staff Requests ',
        to: '/roaster/DisplayStaffRequest',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Create New Staff Requests  ',
      to: '/roaster/NewStaffRequest',
  },
  

],

},
{
  _tag: 'CSidebarNavDropdown',
  name: 'Roaster ',
  to: '/roaster/TopNavBar',
  _children: [
    {
        _tag: 'CSidebarNavItem',
        name: 'Display Roaster By Day ',
        to: '/roaster/RoasterByDay',
    },
    {
      _tag: 'CSidebarNavItem',
      name:'Display Roaster By Staff ',
      to: '/roaster/RoasterByStaff',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Select Roaster Period  ',
    to: '/roaster/RoasterPeriod',
},
{
  _tag: 'CSidebarNavItem',
  name: 'Generate New Roaster  ',
  to: '/roaster/TopNavBar',
},
{
  _tag: 'CSidebarNavItem',
  name: 'Create New Staff Requests  ',
  to: '/roaster/TopNavBar',
},


  

],

},
    ],
},




  {
    _tag: 'CSidebarNavTitle',
    _children: ['Leaves']
},

{
    _tag: 'CSidebarNavDropdown',
    name: 'Employee Leave',
    route: '/course',
    icon: 'cil-puzzle',
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Doctor Leave ',
            to: '/course/list',
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Nurse Leave',
            to: '/leave/AppliedLeaves',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Apply Leave',
          to: '/leave/ApplyLeaves',
      }
    ],
},
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Class Management',
  //   route: '/class',
  //   icon: 'cil-laptop',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Class List',
  //       to: '/class/list',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Create New Class',
  //       to: '/class/create',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Section Management',
  //   route: '/section',
  //   icon: 'cil-layers',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Section List',
  //       to: '/section/list',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Create New Section',
  //       to: '/section/create',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'SMS',
  //   to: '/sms',
  //   icon: 'cil-speech'
  // },
  // {
  //     _tag: 'CSidebarNavTitle',
  //     _children: ['App Administration']
  // },
  // {
  //     _tag: 'CSidebarNavDropdown',
  //     name: 'User Management',
  //     route: '/user',
  //     icon: 'cil-people',
  //     _children: [
  //         {
  //             _tag: 'CSidebarNavItem',
  //             name: 'Users List',
  //             to: '/user/list',
  //         },
  //         {
  //             _tag: 'CSidebarNavItem',
  //             name: 'Create New User',
  //             to: '/user/create',
  //         },
  //     ],
  // },
 
]

