import React from 'react'

class Pet extends React.Component {
  render() {
    const {name, type, age, weight, gender, isAdopted, id } = this.props.pet
    const {onAdoptPet} = this.props
    //destructuring... could also do this instead of line 5:
    // const name = this.props.pet.name
    // const type = this.props.pet.type
    // const age = this.props.pet.type
    // const weight = this.props.pet.weight
    // const gender = this.props.pet.gender
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender == "female" ? " ♀ " : " ♂ "}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
          isAdopted ? 
            <button className="ui disabled button">Already adopted</button>
          :
            <button onClick={()=>onAdoptPet(id)} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
