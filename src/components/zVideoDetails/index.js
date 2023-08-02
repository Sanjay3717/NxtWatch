import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import VideoItemDetails from '../VideoItemDetails'

import {
  VideosResponsiveContainer,
  SearchInputElement,
  SearchContainer,
  SearchIcon,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    searchInput: '',
    videoThumbnailDetails: [],
    isLoading: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosDetails = async () => {
    this.setState({isLoading: true, apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const fetchedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      console.log(fetchedData)
      this.setState({
        videoThumbnailDetails: fetchedData,
        isLoading: false,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {isLoading, videoThumbnailDetails} = this.state
    return (
      <VideosResponsiveContainer>
        <SearchContainer>
          <SearchInputElement
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <SearchIcon>
            <AiOutlineSearch className="search-icon" />
          </SearchIcon>
        </SearchContainer>
        <div className="video-item">
          {videoThumbnailDetails.map(eachItem => (
            <VideoItemDetails itemDetails={eachItem} key={eachItem.id} />
          ))}
        </div>
      </VideosResponsiveContainer>
    )
  }

  renderFailureView = () => (
    <div className="render-failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1>OOPS! Something Went Wrong</h1>
      <p>We are having some trouble to complete your request.</p>
      <p>Please try again</p>
      <button>Retry</button>
    </div>
  )

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderOutputView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderOutputView()}</div>
  }
}
export default VideoDetails
