import Button from "./Components/Button.jsx";

const App = () => {

  return (
    <div className="h-screen">
      <h1 className="text-center pt-24 text-5xl h-1/5">Chuck Norris Memes</h1>
      <div className="flex  items-center justify-center h-3/5">
        <div className="flex  w-1/3 sm:mb-32 items-center flex-col">
          <Button />
        </div>
        <div className=" ml-4">
          <img src="src\assets\Cuck Noris Jokes.png" height="" width="400" />
        </div>
      </div>
    </div>
  )
}

export default App;
