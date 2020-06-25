import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    activeComponent: ""
  }

  handleClick = (evt) => {
    this.setState({ activeComponent: evt.target.id })
  }
    
  menuStatus = () => {
    if (this.state.activeComponent === "") return { profile: "item", photo: "item", cocktail: "item", pokemon: "item" }
    else if (this.state.activeComponent === "profile") return { profile: "item active", photo: "item", cocktail: "item", pokemon: "item" }
    else if (this.state.activeComponent === "photo") return { profile: "item", photo: "item active", cocktail: "item", pokemon: "item" }
    else if (this.state.activeComponent === "cocktail") return { profile: "item", photo: "item", cocktail: "item active", pokemon: "item" }
    else if (this.state.activeComponent === "pokemon") return { profile: "item", photo: "item", cocktail: "item", pokemon: "item active" }
  }
  

  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */
    const detailsToDisplay = {
      "profile": <Profile />,
      "photo": <Photos />,
      "cocktail": <Cocktails />,
      "pokemon": <Pokemon />
    }

    return (
      <div>
        <MenuBar
          status={this.menuStatus()}
          handleClick={this.handleClick} 
          
        />
        {detailsToDisplay[this.state.activeComponent]}
      </div>
    )
  }
}

export default MainBox