// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Utils
// import { formatDate } from '@utils'

import moment from 'moment-jalaali'
// ** Custom Components
// import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import {
  Row,
  Col,
  Badge,
  Card,
  Table,
  CardBody,
  CardFooter,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Folder,
  Tag,
  Mail,
  Trash,
  Edit2,
  Info,
  Paperclip,
  MoreVertical,
  CornerUpLeft,
  CornerUpRight,
  Trash2
} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

const MailDetails = props => {
  // ** Props
  const {
    ticket, 
    openMail,
    labelColors,
    setOpenMail,
    handleMailToTrash,
    handleFolderUpdate,
    handleMailReadUpdate
  } = props

  // ** States
  const [showReplies, setShowReplies] = useState(false)

  useEffect(() => {
    console.log(ticket)
  }, [])
  // ** Renders Labels
  const renderLabels = arr => {
    if (arr && arr.length) {
      return arr.map(label => (
        <Badge key={label} color={`light-${labelColors[label]}`} className='mr-50 text-capitalize' pill>
          {label}
        </Badge>
      ))
    }
  }

  // ** Renders Attachments
  const renderAttachments = arr => {
    return arr.map((item, index) => {
      return (
        <a
          key={item.fileName}
          href='/'
          onClick={e => e.preventDefault()}
          className={classnames({
            'mb-50': index + 1 !== arr.length
          })}
        >
          <img src={item.thumbnail} alt={item.fileName} width='16' className='mr-50' />
          <span className='align-text-top text-muted font-weight-bolder'>{item.fileName}</span>
          <span className='text-muted font-small-2 ml-25'>{`(${item.size})`}</span>
        </a>
      )
    })
  }

  // ** Renders Messages
  const renderMessage = obj => {
    return (
      <Card>
        <CardHeader className='email-detail-head'>
          <div className='flex-wrap user-details d-flex justify-content-between align-items-center'>
            {/* <Avatar img={obj.from.avatar} className='mr-75' imgHeight='48' imgWidth='48' /> */}
            <div className='mail-items'>
              <h5 className='mb-0'>{obj.from}</h5>
              <UncontrolledDropdown className='email-info-dropup'>
                <DropdownToggle className='cursor-pointer font-small-3 text-muted' tag='span' caret>
                  {obj.from}
                </DropdownToggle>
                <DropdownMenu>
                  <Table className='font-small-3' size='sm' borderless>
                    <tbody>
                      <tr>
                        <td className='text-right align-top text-muted'>From:</td>
                        <td>{obj.from}</td>
                      </tr>
                      <tr>
                        <td className='text-right align-top text-muted'>To:</td>
                        <td>{obj.to}</td>
                      </tr>
                      <tr>
                        <td className='text-right align-top text-muted'>Date:</td>
                        <td>
                          {moment(obj.date).format('jYYYY/jM/jD').toString()}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <div className='mail-meta-item d-flex align-items-center'>
            <small className='mail-date-time text-muted'>{moment(obj.date).format('jYYYY/jM/jD').toString()}</small>
            <UncontrolledDropdown className='ml-50'>
              <DropdownToggle className='cursor-pointer' tag='span'>
                <MoreVertical size={14} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <CornerUpLeft className='mr-50' size={14} />
                  Reply
                </DropdownItem>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <CornerUpRight className='mr-50' size={14} />
                  Forward
                </DropdownItem>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <Trash2 className='mr-50' size={14} />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </CardHeader>
        <CardBody className='pt-2 mail-message-wrapper'>
          <div className='mail-message' dangerouslySetInnerHTML={{ __html: obj.message }}></div>
        </CardBody>
        {obj.file && obj.file.length ? (
          <CardFooter>
            <div className='mail-attachments'>
              <div className='mb-1 d-flex align-items-center'>
                <Paperclip size={16} />
                <h5 className='mb-0 font-weight-bolder text-body ml-50'>{obj.file.length} Attachment</h5>
              </div>
              <div className='d-flex flex-column'>{renderAttachments(obj.file)}</div>
            </div>
          </CardFooter>
        ) : null}
      </Card>
    )
  }

  // ** Renders Replies
  const renderReplies = arr => {
    if (arr.length && showReplies === true) {
      return arr.map((obj, index) => (
        <Row key={index}>
          <Col sm='12'>{renderMessage(obj)}</Col>
        </Row>
      ))
    }
  }

  // ** Handle show replies, go back, folder & read click functions
  const handleShowReplies = e => {
    e.preventDefault()
    setShowReplies(true)
  }

  const handleGoBack = () => {
    setOpenMail(false)
  }

  const handleFolderClick = (e, folder, id) => {
    handleFolderUpdate(e, folder, [id])
    handleGoBack()
  }

  const handleReadClick = () => {
    handleMailReadUpdate([mail.id], false)
    handleGoBack()
  }

  return (
    <div
      className={classnames('email-app-details', {
        show: openMail
      })}
    >
      {ticket !== null && ticket !== undefined ? (
        <Fragment>
          <div className='email-detail-header'>
            <div className='email-header-left d-flex align-items-center'>
              <span className='mr-1 go-back' onClick={handleGoBack}>
                <ChevronLeft size={20} />
              </span>
              <h4 className='mb-0 email-subject'>{ticket.title}</h4>
            </div>
            <div className='pl-1 ml-2 email-header-right'>
              <ul className='m-0 list-inline'>
                <li className='mr-1 list-inline-item'>
                  <span className='action-icon' onClick={handleReadClick}>
                    <Mail size={18} />
                  </span>
                </li>
                <li className='mr-1 list-inline-item'>
                  <span
                    className='action-icon'
                    onClick={() => {
                      handleMailToTrash([mail.id])
                      handleGoBack()
                    }}
                  >
                    <Trash size={18} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <PerfectScrollbar className='email-scroll-area' options={{ wheelPropagation: false }}>
            {ticket.chat && ticket.chat.length ? (
              <Fragment>
                {showReplies === false ? (
                  <Row className='mb-1'>
                    <Col sm='12'>
                      <a className='font-weight-bold' href='/' onClick={handleShowReplies}>
                        View {ticket.chat.length} Earlier Messages
                      </a>
                    </Col>
                  </Row>
                ) : null}

                {renderReplies(ticket.chat)}
              </Fragment>
            ) : null}
            <Row>
              <Col sm='12'>{renderMessage(ticket)}</Col>
            </Row>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <h5 className='mb-0'>
                      Click here to{' '}
                      <a href='/' onClick={e => e.preventDefault()}>
                        Reply
                      </a>{' '}
                      or{' '}
                      <a href='/' onClick={e => e.preventDefault()}>
                        Forward
                      </a>
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PerfectScrollbar>
        </Fragment>
      ) : null}
    </div>
  )
}

export default MailDetails
