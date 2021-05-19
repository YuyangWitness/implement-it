interface IHello {
  message?: string
}

const Hello: React.FC<IHello> = (props) => {
  return <h2>{props.message}{props.children}</h2>
}

Hello.defaultProps = {
  message: "Hello world"
}

export default Hello
