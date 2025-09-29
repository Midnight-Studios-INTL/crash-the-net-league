// Database types based on our Supabase schema
export interface Team {
  id: string
  name: string
  logo_url?: string
  wins: number
  losses: number
  otl: number
  goals_for: number
  goals_against: number
  points: number
  games_played: number
  conference_id?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Player {
  id: string
  user_id?: string
  team_id?: string
  salary: number
  role: 'Player' | 'GM' | 'AGM' | 'Owner'
  status: 'active' | 'free_agent' | 'waived' | 'retired'
  retained_salary: number
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  gamer_tag_id: string
  discord_name?: string
  primary_position: string
  secondary_position?: string
  console: 'Xbox' | 'PS5'
  username?: string
  gamer_tag?: string
  avatar_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Match {
  id: string
  home_team_id?: string
  away_team_id?: string
  home_score: number
  away_score: number
  match_date: string
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled'
  ea_match_id?: string
  period_scores?: any[]
  has_overtime: boolean
  has_shootout: boolean
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Conference {
  id: string
  name: string
  description?: string
  color: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Season {
  id: string
  name: string
  start_date: string
  end_date: string
  is_active: boolean
  season_number?: number
  number?: number
  is_playoffs: boolean
  playoff_teams?: string[]
  parent_season_id?: string
  created_at: string
  updated_at: string
}

export interface News {
  id: string
  title: string
  content: string
  author_id?: string
  published: boolean
  featured: boolean
  image_url?: string
  excerpt?: string
  created_at: string
  updated_at: string
}

export interface ForumCategory {
  id: string
  name: string
  description?: string
  color: string
  admin_only: boolean
  created_at: string
  updated_at: string
}

export interface ForumPost {
  id: string
  title: string
  content: string
  author_id: string
  category_id?: string
  pinned: boolean
  locked: boolean
  view_count: number
  reply_count: number
  created_at: string
  updated_at: string
}

export interface ForumComment {
  id: string
  content: string
  author_id: string
  post_id: string
  parent_id?: string
  created_at: string
  updated_at: string
}

export interface EloPlayer {
  id: string
  discord_id: string
  discord_username: string
  display_name: string
  position: string
  elo_rating: number
  total_matches: number
  wins: number
  losses: number
  draws: number
  points_earned: number
  points_lost: number
  win_streak: number
  loss_streak: number
  highest_rating: number
  lowest_rating: number
  last_match_at?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface EloMatch {
  id: string
  match_date: string
  lobby_id?: string
  team1_score: number
  team2_score: number
  winner_team?: 1 | 2
  match_duration?: number
  created_at: string
}

export interface PlayerBidding {
  id: string
  player_id?: string
  team_id?: string
  bid_amount: number
  bid_expires_at: string
  status: 'Active' | 'Won' | 'Outbid' | 'Expired'
  processed: boolean
  won_bid: boolean
  finalized: boolean
  user_id?: string
  created_at: string
  updated_at: string
}

export interface Trade {
  id: string
  team1_id: string
  team2_id: string
  team1_players?: any
  team2_players?: any
  trade_message?: string
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled'
  trade_date: string
  team1_response: string
  team2_response: string
  team1_response_at?: string
  team2_response_at?: string
  completed_at?: string
  created_at: string
  updated_at: string
}

export interface Waiver {
  id: string
  player_id: string
  waiving_team_id: string
  waived_at: string
  claim_deadline: string
  status: 'active' | 'claimed' | 'cleared' | 'cancelled'
  winning_team_id?: string
  processed_at?: string
  created_at: string
  updated_at: string
}

export interface Lineup {
  id: string
  match_id: string
  team_id: string
  player_id: string
  position: string
  line_number: number
  is_starter: boolean
  created_at: string
  updated_at: string
}

// Extended types with joins
export interface TeamWithConference extends Team {
  conference?: Conference
}

export interface PlayerWithUser extends Player {
  user?: User
}

export interface PlayerWithTeam extends Player {
  team?: Team
}

export interface MatchWithTeams extends Match {
  home_team?: Team
  away_team?: Team
}

export interface ForumPostWithAuthor extends ForumPost {
  author?: User
}

export interface ForumPostWithCategory extends ForumPost {
  category?: ForumCategory
}

export interface NewsWithAuthor extends News {
  author?: User
}
