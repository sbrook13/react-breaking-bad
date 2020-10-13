import React from 'react'
import './App.css'
import Characters from './components/Characters'

class App extends React.Component {
  
  state = {
    characters: [],
    alive: [],
    deceased: []
  }

  addToAlive = (character) => {
    if (!this.state.alive.find(aliveCharacter => aliveCharacter === character)){
      const updatedCharacters = this.state.characters.filter(charac => charac !== character)
      const updatedDeceased = this.state.deceased.filter(charac => charac !== character)
      this.setState({ characters: updatedCharacters, deceased: updatedDeceased, alive: [...this.state.alive, character] })
    }
  }

  addToDeceased = (character) => {
    if (!this.state.deceased.find(deadCharacter => deadCharacter === character)){
      const updatedCharacters = this.state.characters.filter(charac => charac !== character)
      const updatedAlive = this.state.alive.filter(charac => charac !== character)
      this.setState({ characters: updatedCharacters, alive: updatedAlive, deceased: [...this.state.deceased, character] })
    }
  }

  componentDidMount(){
    fetch('https://breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({characters}))
  }

  render(){
    return (
      <div className="App">
        <h1>Breaking Bad</h1>
        <main>
          <section className='all-characters'>
            <h2>All Characters</h2>
            <Characters 
              characters={this.state.characters} 
              addToAlive={this.addToAlive}
              addToDeceased={this.addToDeceased}
              status="null"
            />
          </section>
          <div className='sorted-characters'>
            <section className='alive'>
              <h2>Alive</h2>
              <Characters 
                characters={this.state.alive}
                addToDeceased={this.addToDeceased}
                status='alive'
              />
            </section>
            <section className='deceased'>
              <h2>Deceased</h2>
              <Characters 
                characters={this.state.deceased}
                addToAlive={this.addToAlive}
                status='deceased'
              />
            </section>
        </div>
        </main>
      </div>
    )
  }
}

export default App
