import React from 'react';

class FetchVersion extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        items: data
      })
      console.log(this.state.items);
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        FetchVersion
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Checklist</h1>
        <hr />
        <div>
          {this.state.items.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <hr />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default FetchVersion;
