import { Carousel } from "react-bootstrap";

function Slide() {
  return (<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN95FA98xNYdNg14l0JXP3Y56bxu0WsIQjD9Ka13BPw9JTnGwGE972Gek_B79ha4uiQjU&usqp=CAU"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuwGXQg3wA_aOFt5K58vStXzhjXj-RG53KmpVgjcW2tC8gejHWc25bMcn9oUTLCloc-E&usqp=CAU"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);
}

export default Slide;