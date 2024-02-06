import { createContext, useContext, useReducer } from "react";
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";
import defaultAvatar from '../assets/Github icon.png'

// action: defined all possible actions
export const actions = {
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAIL: 'GET_USER_INFO_FAIL',
}

// default variable for reducer state
// isFetchSuccess variable for determine fetch result
const defaultUserInfo = {
  username: 'The Octocat',
  account: 'octocat',
  avatar: defaultAvatar,
  bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
  joinTime: '25 Jan 2011',
  follower: 3938,
  following: 9,
  location: 'San Francisco',
  blog:'https://github.blog',
  repos: 8,
  company: 'github',
  twitter: 'Not available',
  isFetchSuccess: true
}

// reducer
function reducer(state, action) {
  const type = action.type
  const payload = action.payload

  switch (type) {
    // when fetch success, set fetch data for render & set isFetchSuccess to true
    case actions.GET_USER_INFO_SUCCESS: {
      const newUserInfo = JSON.parse(JSON.stringify(state))
      const {
        login, 
        avatar_url, 
        bio, 
        blog, 
        company, 
        created_at, 
        followers, 
        following, 
        location,
        name,
        public_repos,
        twitter_username
      } = payload
      newUserInfo.username = login
      newUserInfo.account = name === null? 'null': name
      newUserInfo.avatar = avatar_url
      newUserInfo.bio = bio === null? 'null': bio
      newUserInfo.joinTime = created_at
      newUserInfo.follower = followers
      newUserInfo.following = following
      newUserInfo.location = location === null? 'null': location
      newUserInfo.blog = blog === ''? 'null': blog
      newUserInfo.repos = public_repos
      newUserInfo.company = company === null? 'null': company
      newUserInfo.twitter = twitter_username === null? 'null': twitter_username
      newUserInfo.isFetchSuccess = true
      return newUserInfo
    }
    // when fetch fail, set defaultUserInfoState for render & set isFetchSuccess to true
    case actions.GET_USER_INFO_FAIL: {
      const newUserInfo = JSON.parse(JSON.stringify(defaultUserInfo))
      newUserInfo.isFetchSuccess = false
      return newUserInfo
    }
    default: {
      console.log('default')
      return state
    }
  }
}

// context
const UserInfoContext = createContext()
const ReferenceContext = createContext()
const UserInfoReducerContext = createContext()

export const UserInfoProvider = ({children}) => {

  const [userInfoState, dispatch] = useReducer(reducer, defaultUserInfo)

  // default reference for RWD, theme & user info
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const defaultReference = {
    isDesktop: isDesktop,
    isTablet: isTablet,
    theme: theme,
    defaultUserInfo: defaultUserInfo
  }

  return (
    <UserInfoContext.Provider value={userInfoState}>
      <UserInfoReducerContext.Provider value={{dispatch}}>
        <ReferenceContext.Provider value={defaultReference}>
          {children}
        </ReferenceContext.Provider>
      </UserInfoReducerContext.Provider>
    </UserInfoContext.Provider>
  )
}

export const useUserInfo = () => useContext(UserInfoContext)
export const useReference = () => useContext(ReferenceContext)
export const useUserInfoReducer = () => useContext(UserInfoReducerContext)