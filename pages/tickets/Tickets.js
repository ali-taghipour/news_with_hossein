// ** React Imports
import { Fragment, useState } from 'react'

// ** Mail Components Imports
import MailCard from './TicketCard'
import MailDetails from './TicketDetails'
import ComposePopUp from './ComposePopup'

// ** Utils
// import { formatDateToMonthShort } from '@utils'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import { Menu, Search, Folder, Tag, Mail, Trash, Edit2, Info } from 'react-feather'

const Mails = props => {
  // ** Props
  const {
    query,
    store,
    setQuery,
    dispatch,
    selectTicket,
    composeOpen,
    updateMails,
    paginateMail,
    selectAllTickets,
    toggleCompose,
    setSidebarOpen,
    updateMailLabel,
    resetSelectedTickets,
    selectCurrentTicket
  } = props

  const { tickets, selectedTickets } = store

  // ** States
  const [openMail, setOpenMail] = useState(false)

  // ** Variables
  const labelColors = {
    personal: 'success',
    company: 'primary',
    important: 'warning',
    private: 'danger'
  }

  // ** Handles Update Functions
  const handleTicketClick = id => {
    dispatch(selectCurrentTicket(id))
    setOpenMail(true)
  }

  // ** Handles SelectAll
  const handleSelectAll = e => {
    dispatch(selectAllTickets(e.target.checked))
  }

  /*eslint-disable */

  // ** Handles Folder Update
  const handleFolderUpdate = (e, folder, ids = selectedTickets) => {
    e.preventDefault()
    dispatch(updateMails(ids, { folder }))
    dispatch(resetSelectedTickets())
  }

  // ** Handles Label Update
  const handleLabelsUpdate = (e, label, ids = selectedTickets) => {
    e.preventDefault()
    dispatch(updateMailLabel(ids, label))
    dispatch(resetSelectedTickets())
  }

  // ** Handles Mail Read Update
  const handleMailReadUpdate = (arr, bool) => {
    dispatch(updateMails(arr, { isRead: bool })).then(() => dispatch(resetSelectedTickets()))
    dispatch(selectAllTickets(false))
  }

  // ** Handles Move to Trash
  const handleMailToTrash = ids => {
    dispatch(updateMails(ids, { folder: 'trash' }))
    dispatch(resetSelectedTickets())
  }
  /*eslint-enable */

  // ** Renders Mail
  const renderMails = () => {
    if (tickets.length) {
      return tickets.map((ticket, index) => {
        return (
          <MailCard
            ticket={ticket}
            key={index}
            dispatch={dispatch}
            selectTicket={selectTicket}
            updateMails={updateMails}
            labelColors={labelColors}
            selectedTickets={selectedTickets}
            handleTicketClick={handleTicketClick}
            handleMailReadUpdate={handleMailReadUpdate}
            // formatDateToMonthShort={formatDateToMonthShort}
          />
        )
      })
    }
  }

  return (
    <Fragment>
      <div className='email-app-list'>
        <div className='app-fixed-search d-flex align-items-center'>
          <div className='ml-1 sidebar-toggle d-block d-lg-none' onClick={() => setSidebarOpen(true)}>
            <Menu />
          </div>
          <div className='d-flex align-content-center justify-content-between w-100'>
            <InputGroup className='input-group-merge'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Search className='text-muted' size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id='email-search'
                placeholder='جستجوی تیکت'
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </InputGroup>
          </div>
        </div>
        <div className='app-action'>
          <div className='action-left'>
            <CustomInput
              type='checkbox'
              id='select-all'
              label='انتخاب همه'
              onChange={handleSelectAll}
              checked={selectedTickets.length && selectedTickets.length === tickets.length}
            />
          </div>
          {selectedTickets.length ? (
            <div className='action-right'>
              <ul className='m-0 list-inline'>
                <li className='mr-1 list-inline-item'>
                  <UncontrolledDropdown>
                    <DropdownToggle tag='span'>
                      <Folder size={18} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderUpdate(e, 'draft')}
                        className='d-flex align-items-center'
                      >
                        <Edit2 className='mr-50' size={18} />
                        <span>پیش نویس</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderUpdate(e, 'spam')}
                        className='d-flex align-items-center'
                      >
                        <Info className='mr-50' size={18} />
                        <span>اسپم</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderUpdate(e, 'trash')}
                        className='d-flex align-items-center'
                      >
                        <Trash className='mr-50' size={18} />
                        <span>سطل زباله</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className='mr-1 list-inline-item'>
                  <UncontrolledDropdown>
                    <DropdownToggle tag='span'>
                      <Tag size={18} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'personal')}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-success bullet-sm mr-50' />
                        <span>Personal</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'company')}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-primary bullet-sm mr-50' />
                        <span>Company</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'important')}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-warning bullet-sm mr-50' />
                        <span>Important</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'private')}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-danger bullet-sm mr-50' />
                        <span>Private</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className='mr-1 list-inline-item'>
                  <span className='action-icon' onClick={() => handleMailReadUpdate(selectedTickets, false)}>
                    <Mail size={18} />
                  </span>
                </li>
                <li className='mr-1 list-inline-item'>
                  <span className='action-icon' onClick={() => handleMailToTrash(selectedTickets)}>
                    <Trash size={18} />
                  </span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <PerfectScrollbar className='email-user-list' options={{ wheelPropagation: false }}>
          {tickets.length ? (
            <ul className='email-media-list'>{renderMails()}</ul>
          ) : (
            <div className='no-results d-block'>
              <h5>هیچ تیکتی وجود ندارد</h5>
            </div>
          )}
        </PerfectScrollbar>
      </div>
      <MailDetails
        openMail={openMail}
        dispatch={dispatch}
        ticket={store.currentTicket}
        labelColors={labelColors}
        setOpenMail={setOpenMail}
        updateMails={updateMails}
        paginateMail={paginateMail}
        updateMailLabel={updateMailLabel}
        handleMailToTrash={handleMailToTrash}
        handleFolderUpdate={handleFolderUpdate}
        handleLabelsUpdate={handleLabelsUpdate}
        handleMailReadUpdate={handleMailReadUpdate}
        // formatDateToMonthShort={formatDateToMonthShort}
      />
      <ComposePopUp composeOpen={composeOpen} toggleCompose={toggleCompose} />
    </Fragment>
  )
}

export default Mails
