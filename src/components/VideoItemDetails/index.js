import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoDetails,
  VideoThumbnail,
  VideoDetailsContainer,
  VideoTitle,
  VideoPostCount,
  Dot,
} from './styledComponents'

const VideoItemDetails = props => {
  const {itemDetails} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount} = itemDetails
  // const outDate = formatDistanceToNow(publishedAt)
  return (
    <Link to="/videos/:$id">
      <VideoDetailsContainer>
        <VideoDetails>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <VideoTitle>{title}</VideoTitle>
          <VideoPostCount>
            <p>{publishedAt}</p>
            <Dot>.</Dot>
            <p>{viewCount}</p>
          </VideoPostCount>
        </VideoDetails>
      </VideoDetailsContainer>
    </Link>
  )
}
export default VideoItemDetails
