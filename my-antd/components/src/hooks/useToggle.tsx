import {useState, useCallback} from 'react'

export default function useToggle(initialState: boolean = false): [boolean, any] {
  const [state, setstate] = useState(initialState)

  const toggle = useCallback(
    (): void => {
      setstate(state => !state)
    },
    []
  )
  return [state, toggle]
}
