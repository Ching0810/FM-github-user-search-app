import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";

const defaultUserInfo = []

const UserInfoContext = createContext(defaultUserInfo)

export const useUserInfo = () => useContext(UserInfoContext)

export const UserInfoProvider = ({children}) => {
  const [username, setUsername] = useState('default')
  const [account, setAccount] = useState('default')
  const [avatar, setAvatar] = useState('https://avatars.githubusercontent.com/u/135832590?v=4')
  const [bio, setBio] = useState('bio')
  const [joinTime, setJoinTime] = useState('2023-06-07')
  const [follower, setFollowers] = useState(6)
  const [following, setFollowing] = useState(9)
  const [location, setLocation] = useState('Taiwan')
  const [blog, setBlog] = useState('https://medium.com/@Ching810')
  const [repos, setRepos] = useState(7)
  const [company, setCompany] = useState('Alpha Camp')
  const [twitter, setTwitter] = useState('Ching')

  // RWD reference
  const theme = useTheme()
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
    isDesktop: isDesktop
  }}>
    {children}
  </UserInfoContext.Provider>)
}