import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Builder from "./Builder"
import CustomBuilder from "./CustomBuilder"
import PDFForm from "./PDFForm"
import Renderer from "./Renderer"
import SimpleForm from "./SimpleForm"
import WizardForm from "./WizardForm"

const Components = () => {
  const {component}  = useParams()
  return(
    <Container className="pt-3">
     <Tab.Container id="left-tabs-example" defaultActiveKey={component}>
      <Row>
        <Col sm={2}>
          <Nav.Item variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="renderer" href="/components/renderer">
                Form Renderer
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="builder" href="/components/builder">
                Form Builder
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="simple" href="/components/simple">
                Simple Form
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="wizard" href="/components/wizard">
                Wizard Form
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pdf" href="/components/pdf">
                PDF Form
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="custom" href="/components/custom">
                Custom Builder
              </Nav.Link>
            </Nav.Item> */}
          </Nav.Item>
        </Col>
        <Col sm={10} style={{borderLeft: '1px solid #eaeaea', padding: '10px 20px'}}>
          <Tab.Content>
            <Tab.Pane eventKey="renderer">
              <Renderer /> 
            </Tab.Pane>
            <Tab.Pane eventKey="builder">
             <Builder /> 
            </Tab.Pane>
            <Tab.Pane eventKey="simple">
             <SimpleForm /> 
            </Tab.Pane>
            <Tab.Pane eventKey="wizard">
             <WizardForm /> 
            </Tab.Pane>
            <Tab.Pane eventKey="pdf">
             <PDFForm /> 
            </Tab.Pane>
            <Tab.Pane eventKey="custom">
             <CustomBuilder /> 
            </Tab.Pane>
          </Tab.Content>
        </Col>
   
      </Row>
    </Tab.Container>
  </Container>
  )
}

export default Components