import "./index.css"

const DEFAULT_COLOR: string[] = ['red', 'blue', 'grey', 'black', 'yellow']

export default function Scale(props: ScaleProps) {
  if(props.data.length > DEFAULT_COLOR.length) {
    throw new Error("the data length must equal or less than 5")
  }
  let colors: string[] = props.colors || DEFAULT_COLOR

  // Get the percentage
  const { data } = props
  const percent: number[] = []
  const sum: number = data.reduce((a, b) => a+b, 0)
  data.forEach((value: number) => {
    percent.push(value/sum)
  })

  return (
    <div className="scale-div">
      {
        percent.map((data: number, index) => {
          return <div key={index} style={{width: `${data*100}%`, height: "8px", background: colors[index]}}></div>
        })
      }
    </div>
  )
}

type ScaleProps = {
  data: number[]
  colors?: string[]
}
