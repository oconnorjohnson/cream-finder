const { Route } = require('../models');

const Routedata = [
  {
    address_1: '4659 Crystal Springs Dr, Los Angeles, CA 90027',
    stop_1: 'Crystal Springs Picnic Area',
    eta_1: '11:00AM',
    address_2: '1900 N San Fernando Rd, Los Angeles, CA 90065',
    stop_2: 'Rio De Los Angeles State Park',
    eta_2: '12:30PM',
    address_3: '1245 N Spring St, Los Angeles, CA 90012',
    stop_3: 'Los Angeles State Historic Park ',
    eta_3: '2:00 PM',
    address_4: '2230 W 6th St, Los Angeles, CA 90057',
    stop_4: 'MacArthur Park',
    eta_4: '4:00 PM',
    address_5: '5077006901, Los Angles, CA 90005',
    stop_5: 'Lafayette Park',
    eta_5: '5:30 PM',
    Week_days: 'M-F'
  },
  {
    address_1: '6000 Santa Monica Blvd, Los Angeles, CA 90038',
    stop_1: 'Hollywood Forever Cemetery',
    eta_1: '10:00 AM',
    address_2: '5800 Block of Wilshire Blvd, Miracle Mile, Los Angeles, CA',
    stop_2: 'Hancock Park',
    eta_2: '11:30 AM',
    address_3: '7341 Willoughby Ave, Los Angeles, CA 90046',
    stop_3: 'Poinsettia Recreation Center',
    eta_3: '1:00 PM',
    address_4: 'South La Brea Ave, Los Angeles, CA 90036',
    stop_4: 'Playground Pavilion',
    eta_4: '2:30 PM',
    address_5: '7850 Melrose Ave, Los Angeles, CA 90046',
    stop_5: 'Fairfax High School',
    eta_5: '3:30 PM',
    Week_days: 'M, W, F'
  },{
    address_1: 'testRoute1',
    stop_1: ,
    eta_1: '11:00AM',
    address_2: 'testRoute2',
    stop_2: ,
    eta_2: '11:10AM',
    address_3: 'testRoute3',
    stop_3: ,
    eta_3: '11:15AM',
    address_4: 'testRoute4',
    stop_4: ,
    eta_4: '11:30AM',
    address_5: 'testRoute5',
    stop_5:
    eta_5: '11:45AM',
    Week_days: 'test MWF'
  },{
    address_1: 'testRoute1',
    stop_1: ,
    eta_1: '11:00AM',
    address_2: 'testRoute2',
    stop_2: ,
    eta_2: '11:10AM',
    address_3: 'testRoute3',
    stop_3: ,
    eta_3: '11:15AM',
    address_4: 'testRoute4',
    stop_4: ,
    eta_4: '11:30AM',
    address_5: 'testRoute5',
    stop_5:
    eta_5: '11:45AM',
    Week_days: 'test MWF'
  }
];

const seedRoutes = () =>Route.bulkCreate(Routedata);

module.exports = seedRoutes;