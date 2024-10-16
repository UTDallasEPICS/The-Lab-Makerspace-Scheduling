import Layout from '../components/layout';
import Calendar from '../components/Calendar';
import { GetServerSideProps } from 'next';
import { EventInput } from '@fullcalendar/core';

export const getServerSideProps: GetServerSideProps = async () => {
  //const api_url = process.env.API_URL;
  const api_url = 'http://localhost:3030';
  const events = await fetch(`${api_url}/api/events`).then((response) => { return response.json() });

	const conformedEvents = events.map((calEvent) => {
		const fullCalEvent: EventInput = {
			title: calEvent.name,
			//start: new Date(calEvent.start).toISOString(),
	     start: calEvent.start,
			//end: new Date(calEvent.end).toISOString(),
	     end: calEvent.end,
			url: `/events/${calEvent.id}`,
		};

	   return fullCalEvent;
	});

  return {
		props: {
			events: conformedEvents,
		},
	};
};

export default function IndexPage({ }: { events: EventInput[] }) {
  const events = getServerSideProps();

	return (
		<Layout headerText='Calendar View'>
	     <div style={{ width: '100%' }}>
			  <Calendar events={events} />
			</div>
		</Layout>
	);
}
