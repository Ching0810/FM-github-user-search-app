import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";

const defaultUserInfo = []

const UserInfoContext = createContext(defaultUserInfo)

export const useUserInfo = () => useContext(UserInfoContext)

export const UserInfoProvider = ({children}) => {
  // user info data
  const [username, setUsername] = useState('The Octocat')
  const [account, setAccount] = useState('octocat')
  const [avatar, setAvatar] = useState('https://avatars.githubusercontent.com/u/135832590?v=4')
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.')
  const [joinTime, setJoinTime] = useState('2023-06-07')
  const [follower, setFollowers] = useState(3938)
  const [following, setFollowing] = useState(9)
  const [location, setLocation] = useState('San Francisco')
  const [blog, setBlog] = useState('https://medium.com/@Ching810')
  const [repos, setRepos] = useState(8)
  const [company, setCompany] = useState('github')
  const [twitter, setTwitter] = useState('Ching')

  // theme reference
  const theme = useTheme()
  // RWD reference
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


  return (<UserInfoContext.Provider value={{
    username: username,
    setUsername: setUsername,
    avatar: avatar,
    setAvatar: setAvatar,
    account: account,
    bio: bio,
    joinTime: joinTime,
    follower: follower,
    following: following,
    location: location,
    blog: blog,
    repos: repos,
    company: company,
    twitter: twitter,
    isDesktop: isDesktop,
    theme: theme
  }}>
    {children}
  </UserInfoContext.Provider>)
}