import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const PopUpDesign = () => (
  <Popup modal trigger={<button>Trigger</button>} position="top-right">
    {close => (
      <>
        <div>
          <p>Hi</p>
        </div>
        <button type="button" onClick={() => close()}>
          Close
        </button>
      </>
    )}
  </Popup>
)
export default PopUpDesign
