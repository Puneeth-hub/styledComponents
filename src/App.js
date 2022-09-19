import {Heading, CustomButton} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
      ClickMe
    </CustomButton>
    <CustomButton type="button" color="#0070c1" bgColor="#ffffff">
      ClickMe
    </CustomButton>
  </>
)

export default App
