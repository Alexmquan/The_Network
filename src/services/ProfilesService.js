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
}

export const profilesService = new ProfilesService()