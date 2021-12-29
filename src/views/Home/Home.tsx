import { useThemeContext } from "./../../context/ThemeContext"
import React, { useEffect } from "react"
import { HomeContent } from "./templates/HomeTemplate"

export const Home: React.FC = (): JSX.Element => {
  const { decisions } = useThemeContext()
  useEffect(() => {
    console.log(decisions)
  }, [decisions])
  return (
    <div>
      <HomeContent Header={<div>Header</div>} />
    </div>
  )
}
