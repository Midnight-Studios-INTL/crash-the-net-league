import { supabase } from './supabase'
import type {
  Team,
  Player,
  User,
  Match,
  Conference,
  Season,
  News,
  ForumCategory,
  ForumPost,
  ForumComment,
  EloPlayer,
  EloMatch,
  PlayerBidding,
  Trade,
  Waiver,
  Lineup,
  TeamWithConference,
  PlayerWithUser,
  PlayerWithTeam,
  MatchWithTeams,
  ForumPostWithAuthor,
  ForumPostWithCategory,
  NewsWithAuthor
} from './types'

// Teams
export async function getTeams(): Promise<TeamWithConference[]> {
  const { data, error } = await supabase
    .from('teams')
    .select(`
      *,
      conference:conferences(*)
    `)
    .eq('is_active', true)
    .order('points', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getTeam(id: string): Promise<TeamWithConference | null> {
  const { data, error } = await supabase
    .from('teams')
    .select(`
      *,
      conference:conferences(*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Players
export async function getPlayers(): Promise<PlayerWithUser[]> {
  const { data, error } = await supabase
    .from('players')
    .select(`
      *,
      user:users(*)
    `)
    .eq('status', 'active')
    .order('salary', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getPlayersByTeam(teamId: string): Promise<PlayerWithUser[]> {
  const { data, error } = await supabase
    .from('players')
    .select(`
      *,
      user:users(*)
    `)
    .eq('team_id', teamId)
    .eq('status', 'active')
    .order('salary', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getPlayer(id: string): Promise<PlayerWithUser | null> {
  const { data, error } = await supabase
    .from('players')
    .select(`
      *,
      user:users(*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Matches
export async function getMatches(): Promise<MatchWithTeams[]> {
  const { data, error } = await supabase
    .from('matches')
    .select(`
      *,
      home_team:teams(*),
      away_team:teams(*)
    `)
    .order('match_date', { ascending: false })
    .limit(50)

  if (error) throw error
  return data || []
}

export async function getUpcomingMatches(): Promise<MatchWithTeams[]> {
  const { data, error } = await supabase
    .from('matches')
    .select(`
      *,
      home_team:teams(*),
      away_team:teams(*)
    `)
    .eq('status', 'Scheduled')
    .gte('match_date', new Date().toISOString())
    .order('match_date', { ascending: true })
    .limit(10)

  if (error) throw error
  return data || []
}

export async function getFeaturedMatch(): Promise<MatchWithTeams | null> {
  const { data, error } = await supabase
    .from('matches')
    .select(`
      *,
      home_team:teams(*),
      away_team:teams(*)
    `)
    .eq('featured', true)
    .eq('status', 'Scheduled')
    .gte('match_date', new Date().toISOString())
    .order('match_date', { ascending: true })
    .limit(1)
    .single()

  if (error) throw error
  return data
}

export async function getMatch(id: string): Promise<MatchWithTeams | null> {
  const { data, error } = await supabase
    .from('matches')
    .select(`
      *,
      home_team:teams(*),
      away_team:teams(*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Standings
export async function getStandings(): Promise<TeamWithConference[]> {
  const { data, error } = await supabase
    .from('teams')
    .select(`
      *,
      conference:conferences(*)
    `)
    .eq('is_active', true)
    .order('points', { ascending: false })
    .order('games_played', { ascending: true })

  if (error) throw error
  return data || []
}

// News
export async function getNews(): Promise<NewsWithAuthor[]> {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      author:users(*)
    `)
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) throw error
  return data || []
}

export async function getFeaturedNews(): Promise<NewsWithAuthor[]> {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      author:users(*)
    `)
    .eq('published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3)

  if (error) throw error
  return data || []
}

export async function getNewsArticle(id: string): Promise<NewsWithAuthor | null> {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      author:users(*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Forum
export async function getForumCategories(): Promise<ForumCategory[]> {
  const { data, error } = await supabase
    .from('forum_categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data || []
}

export async function getForumPosts(categoryId?: string): Promise<ForumPostWithAuthor[]> {
  let query = supabase
    .from('forum_posts')
    .select(`
      *,
      author:users(*)
    `)
    .order('pinned', { ascending: false })
    .order('created_at', { ascending: false })

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data, error } = await query

  if (error) throw error
  return data || []
}

export async function getForumPost(id: string): Promise<ForumPostWithAuthor | null> {
  const { data, error } = await supabase
    .from('forum_posts')
    .select(`
      *,
      author:users(*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function getForumComments(postId: string): Promise<ForumComment[]> {
  const { data, error } = await supabase
    .from('forum_comments')
    .select(`
      *,
      author:users(*)
    `)
    .eq('post_id', postId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data || []
}

// ELO Rankings
export async function getEloRankings(): Promise<EloPlayer[]> {
  const { data, error } = await supabase
    .from('elo_players')
    .select('*')
    .eq('is_active', true)
    .order('elo_rating', { ascending: false })
    .limit(100)

  if (error) throw error
  return data || []
}

export async function getEloPlayer(id: string): Promise<EloPlayer | null> {
  const { data, error } = await supabase
    .from('elo_players')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Management/Admin functions
export async function getPlayerBids(teamId?: string): Promise<PlayerBidding[]> {
  let query = supabase
    .from('player_bidding')
    .select(`
      *,
      player:players(*),
      team:teams(*)
    `)
    .eq('status', 'Active')
    .order('bid_amount', { ascending: false })

  if (teamId) {
    query = query.eq('team_id', teamId)
  }

  const { data, error } = await query

  if (error) throw error
  return data || []
}

export async function getTrades(teamId?: string): Promise<Trade[]> {
  let query = supabase
    .from('trades')
    .select(`
      *,
      team1:teams(*),
      team2:teams(*)
    `)
    .order('created_at', { ascending: false })

  if (teamId) {
    query = query.or(`team1_id.eq.${teamId},team2_id.eq.${teamId}`)
  }

  const { data, error } = await query

  if (error) throw error
  return data || []
}

export async function getWaivers(): Promise<Waiver[]> {
  const { data, error } = await supabase
    .from('waivers')
    .select(`
      *,
      player:players(*),
      waiving_team:teams(*),
      winning_team:teams(*)
    `)
    .eq('status', 'active')
    .order('waived_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getLineups(matchId: string): Promise<Lineup[]> {
  const { data, error } = await supabase
    .from('lineups')
    .select(`
      *,
      player:players(*),
      team:teams(*)
    `)
    .eq('match_id', matchId)
    .order('line_number')
    .order('position')

  if (error) throw error
  return data || []
}

// Statistics
export async function getTeamStats(teamId: string) {
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('id', teamId)
    .single()

  if (error) throw error
  return data
}

export async function getPlayerStats(playerId: string) {
  // This would need to be implemented based on your specific stats requirements
  // For now, returning basic player info
  const { data, error } = await supabase
    .from('players')
    .select(`
      *,
      user:users(*),
      team:teams(*)
    `)
    .eq('id', playerId)
    .single()

  if (error) throw error
  return data
}

// User functions
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}
