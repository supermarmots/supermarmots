import {Title, Subtitle} from '../components'
import {Modal, ModalContent, ModalAction, Button} from '../theme/daisyui'
import * as D from '../data'
import {useState} from 'react'

export default function ModalTest() {
  const [open, setOpen] = useState(true) // 혹은 false
  const closeClicked = () => {
    alert('closeClicked')
    setOpen(false)
  }
  const acceptClicked = () => alert('acceptClicked')

  return (
    <section className="mt-4">
      <Title>ModalTest</Title>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={closeClicked}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 btn-primary btn-sm" onClick={acceptClicked}>
              Accept
            </Button>
            <Button className="w-24 btn-sm" onClick={closeClicked}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}
