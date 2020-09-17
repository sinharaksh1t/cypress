export function create (Cypress) {
  const session = {

    async clearCurrentSessionData () {
      window.localStorage.clear()
      window.sessionStorage.clear()
      await Cypress.automation('clear:cookies', {})
    },

    async getCurrentSessionData () {
      const LS = window.localStorage
      const SS = window.sessionStorage
      const cookies = await Cypress.automation('get:cookies', {})

      const ses = {
        name,
        localStorage: LS,
        sessionStorage: SS,
        cookies,
      }

      return ses
    },

    getSession (name) {
      return Cypress.backend('get:session', name)
    },

    async saveSession (name: string) {
      const ses = await session.getCurrentSessionData()

      return Cypress.backend('save:session', { ...ses, name })
    },
  }

  return session
}
