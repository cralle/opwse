import React from "react"
import { Usp } from "./Usp"

interface Props {
  usps: Array<string>
}

export const CycleUsps: React.FC<Props> = ({ usps }) => {
  const [usp, setUsp] = React.useState(usps[0])
  const timerToClear = React.useRef<NodeJS.Timeout>({} as NodeJS.Timeout)

  React.useEffect(() => {
    const nextUsp = (i: number) => {
      timerToClear.current = setTimeout(() => {
        setUsp(usps[i])
        if (i < usps.length - 1) nextUsp(++i)
        else nextUsp(0)
      }, 3000)
    }
    nextUsp(1)

    return () => {
      clearTimeout(timerToClear.current)
    }
  }, [])

  return <Usp>{usp}</Usp>
}
