# Crash the Net League (CTNL)

A comprehensive hockey league management system built with Next.js, TypeScript, and modern web technologies.

## Overview

Crash the Net League is a professional hockey league management platform that provides teams, players, and fans with a complete ecosystem for managing league operations, tracking statistics, and fostering community engagement.

## Features

### Core Functionality
- **Team Management**: Complete team rosters, lineups, and management tools
- **Player Statistics**: Comprehensive player stats tracking and analytics
- **Match Management**: Game scheduling, live scoring, and match statistics
- **Standings**: Real-time league standings and conference rankings
- **Free Agency**: Player bidding system and contract management
- **Forum System**: Community discussion and communication platform
- **News System**: League announcements and media coverage

### Advanced Features
- **ELO Rating System**: Player skill rating and matchmaking
- **Discord Integration**: Bot integration for team management
- **EA Sports Integration**: Match data import and statistics sync
- **Token System**: Reward and redemption system
- **Waiver System**: Player waiver claims and priority management
- **Trade System**: Player trade negotiations and approvals
- **Analytics**: User behavior tracking and league analytics
- **Admin Panel**: Comprehensive administrative tools

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI, Mantine
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (recommended)

## Project Structure

```
crash-the-net-league/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── teams/            # Team pages
│   ├── players/          # Player pages
│   ├── matches/          # Match pages
│   ├── standings/        # Standings pages
│   ├── statistics/       # Statistics pages
│   ├── free-agency/      # Free agency pages
│   ├── forum/            # Forum pages
│   └── news/             # News pages
├── components/           # React components
│   ├── ui/              # UI components
│   ├── layout/          # Layout components
│   └── providers/       # Context providers
├── lib/                 # Utility functions
├── database-schema.sql  # Database schema
└── package.json         # Dependencies
```

## Database Schema

The system uses a comprehensive PostgreSQL database with the following key entities:

- **Users**: Player accounts and authentication
- **Teams**: Team information and statistics
- **Players**: Player profiles and statistics
- **Matches**: Game data and results
- **Seasons**: League seasons and periods
- **Conferences**: League divisions
- **Forums**: Discussion categories and posts
- **News**: League announcements
- **Analytics**: User behavior tracking
- **Admin Actions**: Administrative logging

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or Supabase account)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crash-the-net-league
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your database connection in `.env.local`

5. Run the database migrations:
```bash
# Import the database schema
psql -d your_database < database-schema.sql
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Key Pages

### Public Pages
- **Homepage**: League overview and featured content
- **Teams**: Team listings and profiles
- **Players**: Player statistics and profiles
- **Matches**: Game schedules and results
- **Standings**: League standings and rankings
- **Statistics**: Player and team statistics
- **Free Agency**: Available players and bidding
- **Forum**: Community discussions
- **News**: League news and announcements

### Management Pages
- **Dashboard**: Team management overview
- **Lineups**: Game lineup management
- **Bidding**: Free agency bidding interface
- **Trades**: Trade negotiation system
- **Settings**: User and team settings

### Admin Pages
- **Admin Panel**: League administration
- **User Management**: User accounts and permissions
- **League Settings**: System configuration
- **Analytics**: Usage and performance metrics

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.

## Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Live streaming integration
- [ ] Fantasy league features
- [ ] Mobile notifications
- [ ] Advanced statistics visualization
- [ ] API documentation
- [ ] Third-party integrations

---

Built with ❤️ for the Crash the Net League community.