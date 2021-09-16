import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Grazalema_city_hall%2C_Grazalema_%28Spain%29.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
