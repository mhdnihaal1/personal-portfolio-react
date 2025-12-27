import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/skill5.jpg";
import projImg2 from "../assets/img/skill4.jpg";
import projImg3 from "../assets/img/skill3.jpg";
import projImg4 from "../assets/img/skill2.jpg";
import projImg5 from "../assets/img/skill1.jpg";
import projImg6 from "../assets/img/skill6.jpg";
import projImg7 from "../assets/img/skill7.jpg";
import projImg8 from "../assets/img/skill8.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Todo List",
      description: "List & conquer daily tasks",
      imgUrl: projImg4,
      link: "https://todo-app-react-virid-six.vercel.app/",
    },
    {
      title: "Students Managment",
      description: "Used to manage student data",
      imgUrl: projImg5,
      link:"https://student-managment-ts.onrender.com/"
    },
  ];

  const projects2 = [
    {
      title: "Netflix-Clone",
      description: "CheckOut latest series",
      imgUrl: projImg7,
      link:"https://netflix-app-react-nine.vercel.app/"
    },
    {
      title: "Note-Pad application",
      description: "TO note valuable data and pin it on top",
      imgUrl: projImg3,
      link:"https://note-app-frontend-1.onrender.com/"
    },
    {
      title: "User Managment",
      description: "Used to manage  user data",
      imgUrl: projImg5,
      link:"https://user-management-fs1f.onrender.com/"
    },
     
    {
      title: "OLX-Clone",
      description: "To sell and buy things",
      imgUrl: projImg6,
    }
  ];

  const projects3 = [
    {
      title: "Nutro application",
      description: "TO note valuable data and pin it on top",
      imgUrl: projImg3,
      link:"https://nutro-frontend.vercel.app/user/home/"
    },
    {
      title: "Mobile E-commerce",
      description: "User interactive Web to purchase phone",
      imgUrl: projImg8,
      link: "https://coza-store-b3wt.onrender.com/"
    },
    {
      title: "lango-leaf",
      description: "User interactive Web to purchase phone",
      imgUrl: projImg8,
      link: "https://lango-leaf.onrender.com/",
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I was created a E-commerce web-site using mvc arcitecture , created  OLX ,NETFLIX etc..  clones , created User-Managment using TypeScript ,created Todo-list using react  and also created a fullstack NotePad app.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Beginner </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Intermediate </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Advanced </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}