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
        {this.state.images.map((image, index) => (
          <div key={index}>
            <h2>Title: {image.title}</h2>
            <img src={image.thumbnailUrl} alt={image.id} />
          </div>
        ))}
        <hr />
      </div>
    )
  }
}

export default AxiosVersion;
