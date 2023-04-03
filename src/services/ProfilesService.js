import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { logger } from "../utils/Logger.js"

class ProfilesService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    logger.log('[Active Profile Service]', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async searchProfiles(query) {
    const res = await api.get('api/profiles?query=' + query)
    logger.log('[Search Profile Service]', res.data)
    AppState.searchProfiles = res.data.map(p => new Profile(p))
    logger.log('[Search Peoples]', AppState.searchProfiles)

  }
}

export const profilesService = new ProfilesService()