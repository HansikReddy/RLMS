import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CreateStudentComponent = React.lazy(() => import('./views/student/Create.js'));
const StudentList = React.lazy(() => import('./views/student/List.js'));
const CreateSchoolComponent = React.lazy(() => import('./views/school/Create.js'));
const SchoolList = React.lazy(() => import('./views/form-components/List.js'));
const CreateCourseComponent = React.lazy(() => import('./views/course/Create.js'));
const CourseList = React.lazy(() => import('./views/course/List.js'));
const CreateClassComponent = React.lazy(() => import('./views/class/Create.js'));
const ClassList = React.lazy(() => import('./views/class/List.js'));
const CreateSectionComponent = React.lazy(() => import('./views/section/Create.js'));
const SectionList = React.lazy(() => import('./views/section/List.js'));
const AddStudentsComponent = React.lazy(() => import('./views/section/AddStudents.js'));

const Blocks = React.lazy(() => import('./views/hospital/Blocks.js'));
const Areas = React.lazy(() => import('./views/hospital/Areas.js'));
const ManageBlock = React.lazy(() => import('./views/hospital/ManageBlock.js'));
const ManageArea = React.lazy(() => import('./views/hospital/ManageArea.js'));
const ApplyLeaves = React.lazy(() => import('./views/leave/ApplyLeaves.js'));
const AppliedLeaves = React.lazy(() => import('./views/leave/AppliedLeaves.js'));
const NurseScheduler = React.lazy(() => import('./views/scheduler/NurseScheduler.js'));
const DisplayStaff = React.lazy(() => import('./views/roaster/DisplayStaff.js'));
const DisplayShifts = React.lazy(() => import('./views/roaster/DisplayShifts.js'));
const DisplayStaffRequest = React.lazy(() => import('./views/roaster/DisplayStaffRequest.js'));
const RoasterByDay = React.lazy(() => import('./views/roaster/RoasterByDay.js'));
const RoasterByStaff = React.lazy(() => import('./views/roaster/RoasterByStaff.js'));
const RoasterPeriod = React.lazy(() => import('./views/roaster/RoasterPeriod.js'));
const NewStaffRequest = React.lazy(() => import('./views/roaster/NewStaffRequest.js'));
const ShiftSequence = React.lazy(() => import('./views/roaster/ShiftSequence.js'));



/*const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
*/

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/student/create', name: 'Create', component: CreateStudentComponent },
  { path: '/student/list', name: 'List', component: StudentList },
  { path: '/school/create', name: 'Create', component: CreateSchoolComponent },
  { path: '/school/list', name: 'List', component: SchoolList },
  { path: '/course/create', name: 'Create', component: CreateCourseComponent },
  { path: '/course/list', name: 'List', component: CourseList },
  { path: '/class/create', name: 'Create', component: CreateClassComponent },
  { path: '/class/list', name: 'List', component: ClassList },
  { path: '/section/create', name: 'Create', component: CreateSectionComponent },
  { path: '/section/list', name: 'List', component: SectionList },
  { path: '/section/update/:id', name: 'Update', component: CreateSectionComponent },
  { path: '/section/add-students-to-section/:section_id', name: 'Add Students to Section', component: AddStudentsComponent },
  { path: '/hospital/blocks', name:<h2>Blocks</h2>, component: Blocks },
  { path: '/hospital/areas', name:<h2>Areas</h2>, component: Areas },
  { path: '/hospital/manageblock', name:<h2>Manage Block</h2>, component: ManageBlock },
  { path: '/hospital/managearea', name: <h2> Manage Area</h2>, component: ManageArea },
  { path: '/leave/applyleaves', name: <h2>Apply Leave</h2>, component: ApplyLeaves },
  { path: '/leave/appliedleaves', name: <h2>Applied Leave'</h2>, component: AppliedLeaves },
  { path: '/scheduler/NurseScheduler', name: <h2>Nurse Scheduler </h2>, component: NurseScheduler },
  { path: '/roaster/DisplayStaff', name: <h2>Display Satff </h2>, component:DisplayStaff },
  { path: '/roaster/DisplayShifts', name: <h2>Display Shifts </h2>, component:DisplayShifts },
  { path: '/roaster/DisplayStaffRequest', name: <h2>Display Staff Request</h2>, component:DisplayStaffRequest },
   { path: '/roaster/RoasterByDay', name: <h2>Roaster By Day</h2>, component:RoasterByDay },
  { path: '/roaster/RoasterByStaff', name:<h2>Roaster By Staff</h2>, component:RoasterByStaff },
  { path: '/roaster/RoasterPeriod', name:<h2> New Roaster Period</h2>, component:RoasterPeriod },
  { path: '/roaster/NewStaffRequest', name:<h2> <b>Create New Staff Request</b></h2>, component:NewStaffRequest },
  { path: '/roaster/ShiftSequence', name:<h2> Shift Sequence</h2>, component:ShiftSequence },

  
  /*{ path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }*/
];

export default routes;
