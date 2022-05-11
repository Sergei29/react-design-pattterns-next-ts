import axios from "axios"
import { SpacexData } from "../types"
import { SPACEX_API } from "../constants"

export const fetchLatestLaunches = async () =>
  (await axios.get<SpacexData>(`${SPACEX_API}/launches/latest`)).data
