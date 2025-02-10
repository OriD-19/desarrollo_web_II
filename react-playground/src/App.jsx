import ChildrenComp from "./components/ChildrenComp"
import Counter from "./components/Counter"

function App() {

  return (
    <>
      <div>Hello World!</div>
      <ChildrenComp>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </ChildrenComp>

      <Counter />
    </>
  )
}

export default App
