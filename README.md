# Overview 
This project is a user friendly reservation and calendar system to display events and their details. This system is part of a larger project focused on integrating their calendar web application with their kiosk system.The goal is to enable the application to handle tasks typically performed by a receptionist, including​ checking in users, providing event details, and RSVPing for upcoming events​ using a key fob sign in system​.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Clone the repository. <br>
Run npm install to download all the necessary packages and dependencies. <br>
Create a .env file and fill it with the your desired values. Ensure you edit the values in userStore.json to ensure that the jwt values can be interpreted with your JWT_SECRET. <br>
Run docker-compose up. <br>
Also run npx prisma migrate dev to initialize the database.
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Functional Requirements
R1. The application must display a calendar to the user.
R2. The application must allow the user to view events currently in the system.
R3. The application must allow users to click the RSVP button to do this action.
R4. The application should take a key fob input upon RSVP.

## Tech Stack 
 
Front end: React, TailWind.css <br>
Backend: REST APIs <br>
Meta: Next.js
Other: Docker, Postman <br>

Deployment status: Not deployed

