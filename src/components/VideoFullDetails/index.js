import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Component from 'react'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoFullDetails extends Component {
  state = {
    isLoading: false,
    apiStatus: apiStatusConstant.initial,
    videoInformation: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({isLoading: true, apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, option)
    const data = response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>Video Full Details</h1>
      </div>
    )
  }
}

export default VideoFullDetails
