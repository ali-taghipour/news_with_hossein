// ** React Imports
import { useEffect, useState } from 'react'

// ** Custom Components
// import Avatar from '@components/avatar'

// ** Third Party Components
// import { Editor } from '@tinymce/tinymce-react'
import Select, { components } from 'react-select'
import { X, Paperclip, MoreVertical, Trash } from 'react-feather'
import {
  Button,
  Modal, 
  ModalBody,
  Form,
  Label,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledButtonDropdown
} from 'reactstrap'
// import { selectThemeColors } from '@utils'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** User Avatars
// import img1 from '@public/img/avatar-s-3.jpg'
// import img2 from '@public/img/avatar-s-1.jpg'
// import img3 from '@public/img/avatar-s-4.jpg'
// import img4 from '@public/img/avatar-s-6.jpg'
// import img5 from '@public/img/avatar-s-2.jpg'
// import img6 from '@public/img/avatar-s-11.jpg'

// ** Styles
// import '@styles/react/libs/editor/editor.scss'
// import '@styles/react/libs/react-select/_react-select.scss'

// import useJwt from '@src/auth/jwt/useJwt'
// import { useSelector } from 'react-redux'

const ComposePopup = props => {
  // ** Props & Custom Hooks
  // const [skin, setSkin] = useSkin()
  const { composeOpen, toggleCompose } = props

  // ** States
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [name, setName] = useState()
  const [files, setFiles] = useState()

  // const store = useSelector(state => state.auth)

  const MySwal = withReactContent(Swal)
  

  const handleSuccess = (msg) => {
    return MySwal.fire({
      title: 'تیکت ارسال شد',
      text: msg,
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("username")))
    setEmail(JSON.parse(localStorage.getItem("email")))
    setPhone(JSON.parse(localStorage.getItem("phone_number")))
  }, [])

  // ** User Select Options & Components
  const selectOptions = [
    { value: 'pheobe', label: 'Pheobe Buffay', img: img1 },
    { value: 'chandler', label: 'Chandler Bing', img: img2 },
    { value: 'ross', label: 'Ross Geller', img: img3 },
    { value: 'monica', label: 'Monica Geller', img: img4 },
    { value: 'joey', label: 'Joey Tribbiani', img: img5 },
    { value: 'Rachel', label: 'Rachel Green', img: img6 }
  ]

  const SelectComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='flex-wrap d-flex align-items-center'>
          {/* <Avatar className='my-0 mr-50' size='sm' img={data.img} /> */}
          {data.label}
        </div>
      </components.Option>
    )
  }

  // ** Toggles Compose POPUP
  const togglePopUp = e => {
    e.preventDefault()
    toggleCompose()
  }

  const handleSend = () => {
    const formdata = new FormData()
    formdata.append("title", title)
    formdata.append("description", description)
    formdata.append("email", email)
    formdata.append("phone", phone)
    formdata.append("name", name)
    formdata.append("files", files)
    // useJwt.createTicket(formdata).then(res => {
    //   console.log(res.data)
    //   handleSuccess(res.data.message)
    //   window.location.reload();
    // }).catch(err => console.log(err))
  }
  return (
    <Modal
      scrollable
      fade={false}
      id='compose-mail'
      container='.content-body'
      className='modal-lg'
      isOpen={composeOpen}
      backdrop={false}
      contentClassName='p-0'
      toggle={toggleCompose}
      modalClassName='modal-sticky'
    >
      <div className='modal-header'>
        <h5 className='modal-title'>ارسال تیکت</h5>
        <div className='modal-actions'>
          <a href='/' className='text-body' onClick={togglePopUp}>
            <X size={14} />
          </a>
        </div>
      </div>
      <ModalBody className='p-0 flex-grow-1'>
        <Form className='compose-form' onSubmit={handleSend}>
          <div className='compose-mail-form-field'>
            <Label for='email-to' className='form-label'>
              برای:
            </Label>
            <div className='flex-grow-1'>
              <Select
                isMulti
                id='email-to'
                isClearable={false}
                // theme={selectThemeColors}
                // options={selectOptions}
                className='react-select select-borderless'
                classNamePrefix='select'
                components={{ Option: SelectComponent }}
              />
            </div>
          </div>
          <div className='compose-mail-form-field'>
            <Label for='email-subject' className='form-label'>
              عنوان:
            </Label>
            <Input id='email-subject' placeholder='موضوع تیکت' onChange={e => setTitle(e.target.value)}/>
          </div>
          <div id='message-editor'>
            {/* <Editor
              style={{}}
              onChange={e => setDescription(e.target.getContent())}
              apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
              init={{
                textalign: 'right',
                height: 296,
                menubar: false,
                branding: false,
                statusbar: false,
                placeholder: 'متن تیکت', 
                toolbar_location: 'bottom',
                skin: skin === 'dark' ? 'dark' : undefined,
                toolbar: 'fontselect bold italic underline link',
                content_css: skin === 'dark' ? 'dark' : undefined
              }}
            /> */}
          </div>
          <div className='compose-footer-wrapper'>
            <div className='btn-wrapper d-flex align-items-center'> 
              <UncontrolledButtonDropdown direction='up' className='mr-1'>
                <Button color='primary' onClick={handleSend}>
                  ارسال
                </Button>
                <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' tag='a' onClick={handleSend}>
                    تیکت زمانبندی شده
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <div className='email-attachement'>
                <Label className='mb-0' for='attach-email-item'>
                  <Paperclip className='cursor-pointer ml-50' size={18} />
                  <input type='file' name='attach-email-item' id='attach-email-item' hidden onChange={e => setFiles(e.target.files)}/>
                </Label>
              </div>
            </div>
            <div className='footer-action d-flex align-items-center'>
              <UncontrolledDropdown className='mr-50' direction='up'>
                <DropdownToggle tag='span'>
                  <MoreVertical className='cursor-pointer' size={18} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    افزودن برچسب
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    چاپ
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Trash size={18} onClick={toggleCompose} />
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default ComposePopup
