import  { Component } from "react";


class Button extends Component {

  constructor() {
    super();
    this.state = {
      joke: ''
    }
    this.GetJoke = this.GetJoke.bind(this);
  }

  async GetJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      this.setState({joke:data.value});
    } catch (error) {
      this.setState({joke : 'Something Occured with Server!\nTry Again Later!'});
    }
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
