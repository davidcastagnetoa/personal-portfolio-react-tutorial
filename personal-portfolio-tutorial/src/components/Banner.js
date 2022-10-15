import { Container , Row, Col} from 'react-bootstrap';


export const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                    <spam className='tagline'>Welcome to my Portfolio</spam>
                    <h1>{`Hi I'm webdecoded`}<span className='wrap'>Web developer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button onClick={()=>{ console.log('connect') }}>Let's connect</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
