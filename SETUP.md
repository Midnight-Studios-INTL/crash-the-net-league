# Crash the Net League (CTNL)

A professional hockey league management system built with Next.js 15, React 19, TypeScript, and Supabase.

## 🏒 Features

- **Team Management**: View teams, standings, and statistics
- **Player Management**: Track players, salaries, and contracts
- **Match Management**: Schedule and track games
- **ELO Rankings**: Player skill-based ranking system
- **Forum System**: Community discussions and news
- **Admin Dashboard**: League administration tools
- **Management Tools**: Team management for GMs and owners

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+
- Supabase account

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd crash-the-net-league
npm install
```

### 2. Set up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key from the project settings
3. Copy `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

4. Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Set up Database

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `database-schema.sql`
4. Paste and run the SQL to create all tables and relationships

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
crash-the-net-league/
├── app/                    # Next.js App Router pages
│   ├── admin/            # Admin dashboard pages
│   ├── management/       # Team management pages
│   ├── elo/              # ELO ranking pages
│   └── ...               # Other pages
├── components/           # React components
│   ├── layout/          # Layout components
│   ├── ui/              # Reusable UI components
│   └── ...              # Other components
├── lib/                 # Utility libraries
│   ├── database.ts      # Supabase database functions
│   ├── types.ts         # TypeScript type definitions
│   ├── supabase.ts      # Supabase client configuration
│   └── utils.ts         # Utility functions
├── database-schema.sql   # Complete database schema
└── ...                  # Configuration files
```

## 🗄️ Database Schema

The application uses a comprehensive PostgreSQL schema with the following main entities:

- **Teams**: League teams with standings and statistics
- **Players**: Individual players with contracts and roles
- **Users**: User accounts and profiles
- **Matches**: Games between teams
- **ELO System**: Player skill ratings and matches
- **Forum**: Community discussions and news
- **Management**: Bids, trades, waivers, and lineups

## 🎨 Design System

- **Colors**: Blue, Red, and White hockey theme
- **UI Library**: Mantine components
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Geist font family

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app is built with Next.js and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our Discord community for help

## 🏆 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Supabase](https://supabase.com/)
- UI components from [Mantine](https://mantine.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
