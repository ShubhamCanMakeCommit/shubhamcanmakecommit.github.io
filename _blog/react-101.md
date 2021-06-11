---
layout: showcase
---
# React - Frontend Library

React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.

```jsx
//Before
const App = () => {
  const canvasRef = React.useRef()
  console.log(canvasRef) //Component still not mounted would be null
  canvasRef.current.getContext('2d').fillRect(5,5,50,50) // this would error
  return <canvas ref={canvasRef}></canvas>
}

ReactDOM.render(<App/>, mountNode)

//After
const App = () => {
  const canvasRef = React.useRef()
  useEffect(()=>{
    console.log(canvasRef) //React guarantees to set ref.current before mount
    canvasRef.current.getContext('2d').fillRect(5,5,50,50)
  })
  return <canvas ref={canvasRef}></canvas>
}

ReactDOM.render(<App/>, mountNode)

```