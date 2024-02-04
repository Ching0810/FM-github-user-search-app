import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";
import defaultAvatar from '../assets/Github icon.png'

const defaultUserInfo = []

const UserInfoContext = createContext(defaultUserInfo)

export const useUserInfo = () => useContext(UserInfoContext)

export const UserInfoProvider = ({children}) => {
  // user info data
  const [username, setUsername] = useState('The Octocat')
  const [account, setAccount] = useState('octocat')
  const [avatar, setAvatar] = useState(defaultAvatar)
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.')
  const [joinTime, setJoinTime] = useState('2023-06-07')
  const [follower, setFollower] = useState(3938)
  const [following, setFollowing] = useState(9)
  const [location, setLocation] = useState('San Francisco')
  const [blog, setBlog] = useState('https://github.blog')
  const [repos, setRepos] = useState(8)
  const [company, setCompany] = useState('github')
  const [twitter, setTwitter] = useState('Not available')

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
    setAccount: setAccount,
    bio: bio,
    setBio: setBio,
    joinTime: joinTime,
    setJoinTime: setJoinTime,
    follower: follower,
    setFollower: setFollower,
    following: following,
    setFollowing: setFollowing,
    location: location,
    setLocation: setLocation,
    blog: blog,
    setBlog: setBlog,
    repos: repos,
    setRepos: setRepos,
    company: company,
    setCompany: setCompany,
    twitter: twitter,
    setTwitter: setTwitter,
    isDesktop: isDesktop,
    theme: theme
  }}>
    {children}
  </UserInfoContext.Provider>)
}