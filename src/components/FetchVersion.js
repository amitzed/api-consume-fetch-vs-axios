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
          <h2>Title</h2>
          <h3>Completed</h3>
        </div>
        <hr />
      </div>
    )
  }
}

export default FetchVersion;
