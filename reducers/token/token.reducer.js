import { getAccessToken } from "../../api/api_auth";
import { logout } from "../../api/api_auth"

export const tokenReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        accessToken: action.payload.accessToken,
        refereshToken: action.payload.refereshToken,
      }
    case "accessTokenExpired":
      return getAccessToken((state.refereshToken,(isOk, token) => {
        if (!isOk) return { accessToken: null, refereshToken: null };

        if (token) {
          return { ...state, accessToken: token }
        } else {
          return { accessToken: null, refereshToken: null }
        }
      }))
        

    case "exit":
      return logout((state.accessToken,(isOk, data) => {
        if (!isOk) return state;

        if (data) {
          return { accessToken: null, refereshToken: null }
        } else {
          return state
        }
      }))

    default:
      return state
  }
}
