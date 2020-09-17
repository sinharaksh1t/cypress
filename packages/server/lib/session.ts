import { CyCookie } from './browsers/cdp_automation'
const sessions = {}

interface SessionData {
  cookies: CyCookie[]
  name: string
  localStorage: object
  sessionStorage: object
}
export function saveSession (data: SessionData) {
  if (!data.name) throw new Error('session data had no name')

  sessions[data.name] = data
}

export function getSession (name: string): SessionData {
  const session = sessions[name]

  if (!session) throw new Error(`session with name "${name}" not found`)

  return session
}
