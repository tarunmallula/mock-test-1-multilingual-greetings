import {Component} from 'react'

import ActiveTab from './activeTab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  changeActiveId = tabId => {
    this.setState({activeId: tabId})
  }

  getImage = () => {
    const {activeId} = this.state
    const index = languageGreetingsList.find(each => each.id === activeId)
    return index
  }

  render() {
    const {activeId} = this.state
    const image = this.getImage(activeId)
    const {imageUrl, imageAltText} = image

    return (
      <div className="card">
        <div className="card-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="button-container">
            {languageGreetingsList.map(each => (
              <ActiveTab
                key={each.id}
                tabDetails={each}
                changeActiveId={this.changeActiveId}
                isActive={activeId === each.id}
                changeSrc={this.changeSrc}
                changeAlt={this.changeAlt}
              />
            ))}
          </ul>
          <img src={imageUrl} className="image" alt={imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
