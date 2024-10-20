interface ApiRoutes {
  pastEvents: string;
  upcomingEvents: string;
}

export const BASE_URL: string = 'https://sag-api.onrender.com/api/events';
export const api_routes: ApiRoutes = {
  pastEvents: '/pastEvents',
  upcomingEvents: '/upcomingEvents',
};
