import { useEffect, useState } from "react"
import apiHook from "./hooks/apiHook"

function App() {
  const [url, setUrl] = useState(null)
  const { data, error, loading } = apiHook(url);

  const [content, setContent] = useState(null)

  useEffect(() => {
    setContent(
      JSON.stringify(data ?? error ?? loading ?? "No information....")
    )
  }, [data, error, loading])

  const dataHandler = (e, opt) => {
    // const { data } = apiHook("https://localhost:7070/data")

    return setUrl("http://localhost:7070/" + opt)
  }


  return (
    <>
      <button className="btn data" onClick={(e) => dataHandler(e, "data")}>DATA</button>
      <button className="btn error" onClick={(e) => dataHandler(e, "error")}>ERROR</button>
      <button className="btn loading" onClick={(e) => dataHandler(e, "loading")}>LOADING</button>

      <pre className="content">{content}</pre>
    </>
  )
}

export default App
