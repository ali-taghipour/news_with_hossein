// ** Custom Components & Plugins
// import { htmlToString } from '@utils'
// import Avatar from '@components/avatar'
import { Paperclip } from 'react-feather'
import { Media } from 'reactstrap'

const MailCard = props => {
  // ** Props
  const {
    ticket,
    dispatch,
    selectTicket,
    labelColors,
    selectedTickets,
    handleTicketClick
  } = props

  // ** Function to render labels
  const renderLabels = arr => {
    if (arr && arr.length) {
      return arr.map(label => (
        <span key={label} className={`bullet bullet-${labelColors[label]} bullet-sm mx-50`}></span>
      ))
    }
  }

  // ** Function to handle read & mail click
  const onTicketClick = () => {
    handleTicketClick(ticket)
    // handleMailReadUpdate([ticket.id], true)
  }

  return (
    <Media tag='li' onClick={() => onTicketClick(ticket._id)} > 
      <div className='media-left pr-50'>
        {/* <Avatar img={''} /> */}
        <div className='user-action'>
          <div className='custom-control custom-checkbox'>
            <input
              className='custom-control-input'
              type='checkbox'
              id={`${ticket.senderName}-${ticket._id}`}
              checked={selectedTickets.includes(ticket._id)}
              onChange={e => e.stopPropagation()}
              onClick={e => {
                dispatch(selectTicket(ticket._id))
                e.stopPropagation()
              }}
            />
            <label
              className='custom-control-label'
              htmlFor={`${ticket.senderName}-${ticket._id}`}
              onClick={e => {
                e.stopPropagation()
              }}
            ></label>
          </div>
        </div>
      </div>
      <Media body>
        <div className='mail-details'>
          <div className='mail-items'>
            <h5 className='mb-25'>{ticket.senderName}</h5>
            <span className='text-truncate'>{ticket.title}</span>
          </div>
          <div className='mail-meta-item'>
            {ticket.file && ticket.file.length ? <Paperclip size={14} /> : null}
            {renderLabels('')}
            <p>{ticket.closed}</p>
          </div>
        </div>
        <div className='mail-message'>
          {/* <p className='mb-0 text-truncate'>{htmlToString(ticket.description)}</p> */}
        </div>
      </Media>
    </Media>
  )
}

export default MailCard
