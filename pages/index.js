import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// // Runs on server after deployment instead of during build & runs for every request
// // Can use server-side code or code to do with credentials
// export const getServerSideProps = async context => {
//   const req = context.req;
//   const res = context.res;

//   // Fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// getStaticProps is reserved function, which is only accessible to current page & will be converted during build process, so never gets rendered on client side
// Runs either once on page load or every time period defined in revalidate
export const getStaticProps = async () => {
  // Fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://Candice:VG4MMIdj9utm9cha@cluster0.wytqn.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // Always returns an object
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // 1 second
  };
};
export default HomePage;
