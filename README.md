# Fidro Landing Website

Fidro is a comprehensive fitness and gym management system designed to streamline operations, boost member engagement, and maximize revenue.

## Features

- **Member Management**: Comprehensive member profiles with digital document storage.
- **Subscription System**: Automated recurring payments and flexible billing.
- **Attendance Tracking**: Real-time tracking with QR codes, RFID, and biometrics.
- **Analytics Dashboard**: Powerful insights into member behavior and revenue trends.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) inspired components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

Following the architecture of `fidro-client`:

- `src/app/`: Next.js App Router pages and global styles.
- `src/components/ui/`: Atomic UI components.
- `src/features/landing-page/`: Feature-specific components for the landing page.
- `src/lib/data/`: Centralized data store for landing page content.
- `src/lib/utils.ts`: Utility functions.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
