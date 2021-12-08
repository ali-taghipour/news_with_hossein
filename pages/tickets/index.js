// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Email App Component Imports
import Mails from './Tickets'
import Sidebar from './Sidebar'

// ** Third Party Components
import classnames from 'classnames'

// ** Store & Actions
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   selectTicket,
//   selectAllTickets,
//   resetSelectedTickets,
//   selectCurrentTicket,
//   fetchTickets
// } from '../../redux/actions/tickets'

// import useJwt from '@src/auth/jwt/useJwt'

// ** Styles
// import '@styles/react/apps/app-email.scss'

const EmailApp = () => {
  // ** States
  const [query, setQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [composeOpen, setComposeOpen] = useState(false)

  // ** Toggle Compose Function
  const toggleCompose = () => setComposeOpen(!composeOpen)

  // ** Store Variables
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.tickets)

  // ** Vars
  const params = useParams()

  // ** UseEffect: GET initial data on Mount
  useEffect(() => {
    // useJwt.fetchAllTickets().then(res => {
    //   console.log(res.data)
    //   dispatch(fetchTickets(res.data))
    // }).catch(err => console.log(err))
  }, [query, params.folder, params.label])

  return (
    <Fragment>
      <Sidebar
        // store={store}
        // dispatch={dispatch}
        // fetchTickets={fetchTickets}
        sidebarOpen={sidebarOpen}
        toggleCompose={toggleCompose}
        setSidebarOpen={setSidebarOpen}
        // resetSelectedTickets={resetSelectedTickets}
      />
      <div className='content-right'>
        <div className='content-body'>
          <div
            className={classnames('body-content-overlay', {
              show: sidebarOpen
            })}
            onClick={() => setSidebarOpen(false)}
          ></div>
          <Mails
            // store={store}
            query={query}
            setQuery={setQuery}
            // dispatch={dispatch}
            // fetchTickets={fetchTickets}
            // selectTicket={selectTicket}
            composeOpen={composeOpen}
            // selectAllTickets={selectAllTickets}
            toggleCompose={toggleCompose}
            setSidebarOpen={setSidebarOpen}
            // selectCurrentTicket={selectCurrentTicket}
            // resetSelectedTickets={resetSelectedTickets}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default EmailApp
