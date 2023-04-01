import { AppState } from "../AppState.js"
import { Commercial } from "../models/Commercial.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommercialsService {
  async getCommercials() {
    let res = await api.get('api/ads')
    logger.log('[Commercials]', res.data)
    AppState.commercials = res.data.map(c => new Commercial(c))
  }
}

export const commercialsService = new CommercialsService()