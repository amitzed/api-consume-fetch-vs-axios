import React from 'react';

import axios from 'axios';

class AxiosVersion extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(res => {
      const images = res.data;
      this.setState({
        images
      })
      console.log(this.state.images);
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        AxiosVersion
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Images</h1>
        <hr />
        <div>
          {this.state.images.map((image, index) => (
            <h2>{image.title}</h2>
          ))}
          <hr />
        </div>
      </div>
    )
  }
}

export default AxiosVersion;
