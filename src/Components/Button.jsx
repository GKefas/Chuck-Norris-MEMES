import  { Component } from "react";

const getData = async function () {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data;
  } catch (error) {
    return 'Something Occured with Server!\nTry Again Later!';
  }
}

class Button extends Component {

  constructor() {
    super();
    this.state = {
      joke: ''
    }
    this.GetJoke = this.GetJoke.bind(this);
  }

  async GetJoke() {
    const joke = await getData();
    this.setState({ joke: joke.value });
  }

  render() {
    return (
      <>
        <button className="rounded-md px-5 text-3xl py-3 bg-indigo-800 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          onClick={this.GetJoke}> Generate A Joke
        </button>
        <div className="text-xl mt-5  text-center" id="Joke">
          {this.state.joke}
        </div>
      </>
    );
  }
}

export default Button;
