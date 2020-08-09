import React from 'react';

class FetchVersion extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
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
              <h2>Item: {item.title}</h2>
              <h3>
                {
                  item.completed
                  ?
                  <span style={{color: 'blue'}}>Done</span>
                  :
                  <span style={{color: 'red'}}>Not Done</span>
                }
              </h3>
              <hr />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default FetchVersion;
