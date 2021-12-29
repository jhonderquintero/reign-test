import React from "react"
import { HomeContent } from "./templates/HomeTemplate"

export const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <HomeContent Header={<div>Header</div>} />
    </div>
  )
}
