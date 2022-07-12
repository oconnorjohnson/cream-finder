const { Route } = require('../models');

const Routedata = [
  {
    address: '4659 Crystal Springs Dr, Los Angeles, CA 90027',
    order: 1,
    user_id: 1
  },
  {
    address: '1900 N San Fernando Rd, Los Angeles, CA 90065',
    order: 2,
    user_id: 1
  },
  {
    address: '1245 N Spring St, Los Angeles, CA 90012',
    order: 3,
    user_id: 1
  },
  {
    address: '1900 N San Fernando Rd, Los Angeles, CA 90065',
    order: 1,
    user_id: 2
  },
  {
    address: '1245 N Spring St, Los Angeles, CA 90012',
    order: 2,
    user_id: 2
  }
];

// const Routedata = [
//   {
//     address_1: '4659 Crystal Springs Dr, Los Angeles, CA 90027',
//     stop_1: 'Crystal Springs Picnic Area',
//     eta_1: '11:00AM',
//     address_2: '1900 N San Fernando Rd, Los Angeles, CA 90065',
//     stop_2: 'Rio De Los Angeles State Park',
//     eta_2: '12:30PM',
//     address_3: '1245 N Spring St, Los Angeles, CA 90012',
//     stop_3: 'Los Angeles State Historic Park ',
//     eta_3: '2:00 PM',
//     address_4: '2230 W 6th St, Los Angeles, CA 90057',
//     stop_4: 'MacArthur Park',
//     eta_4: '4:00 PM',
//     address_5: '5077006901, Los Angles, CA 90005',
//     stop_5: 'Lafayette Park',
//     eta_5: '5:30 PM',
//     Week_days: 'M-F'
//   },
//   {
//     address_1: '6000 Santa Monica Blvd, Los Angeles, CA 90038',
//     stop_1: 'Hollywood Forever Cemetery',
//     eta_1: '10:00 AM',
//     address_2: '5800 Block of Wilshire Blvd, Miracle Mile, Los Angeles, CA',
//     stop_2: 'Hancock Park',
//     eta_2: '11:30 AM',
//     address_3: '7341 Willoughby Ave, Los Angeles, CA 90046',
//     stop_3: 'Poinsettia Recreation Center',
//     eta_3: '1:00 PM',
//     address_4: 'South La Brea Ave, Los Angeles, CA 90036',
//     stop_4: 'Playground Pavilion',
//     eta_4: '2:30 PM',
//     address_5: '7850 Melrose Ave, Los Angeles, CA 90046',
//     stop_5: 'Fairfax High School',
//     eta_5: '3:30 PM',
//     Week_days: 'M, W, F'
//   },{
//     address_1: '10101 Wilshire Blvd, Los Angeles, CA 90024',
//     stop_1: 'The Los Angeles Country Club',
//     eta_1: '11:30 AM',
//     address_2: '200 Santa Monica Pier, Santa Monica, CA 90401',
//     stop_2: 'Santa Monica Pier',
//     eta_2: '12:30 PM',
//     address_3: 'Venice, CA 90261',
//     stop_3: 'Venice Beach',
//     eta_3: '2:00 PM',
//     address_4: '1900 Pico Blvd, Santa Monica, CA 90405',
//     stop_4: 'Santa Monica College',
//     eta_4: '3:30 PM',
//     address_5: '13650 Mindanao Way, Marina Del Rey, CA 90292',
//     stop_5: 'Burton Chace Park',
//     eta_5: '5:00 PM',
//     Week_days: 'SA, SU'
//   },{
//     address_1: '7313-7351 S Marine Ave, Playa Del Rey, CA 90293',
//     stop_1: 'Playa Del Rey Beach',
//     eta_1: '10:00 AM',
//     address_2: 'Green Valley Cir &, Buckingham Pkwy, Culver City, CA 90230',
//     stop_2: 'Fox Hills Park',
//     eta_2: '12:00 PM',
//     address_3: '4100 S La Cienega Blvd, Los Angeles, CA 90056',
//     stop_3: 'Kenneth Hahn State Recreation Area',
//     eta_3: '2:00 PM',
//     address_4: '5905 Wilshire Blvd, Los Angeles, CA 90036',
//     stop_4: 'Los Angeles County Museum of Art',
//     eta_4: '3:00 PM',
//     address_5: 'Los Angeles, CA 90095',
//     stop_5: 'UCLA',
//     eta_5: '4:30 PM',
//     Week_days: 'W-SU'
//   }
// ];

const seedRoutes = () =>Route.bulkCreate(Routedata);

module.exports = seedRoutes;