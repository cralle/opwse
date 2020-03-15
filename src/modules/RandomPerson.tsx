import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"

type Props = RouteComponentProps<{
  results: string
}>

export const RandomPerson: React.FC<Props> = ({ results = 1 }) => {
  const [person, setPerson] = useState()
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setPerson(x))
  }, [results])

  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}
