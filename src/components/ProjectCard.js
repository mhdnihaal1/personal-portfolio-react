import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="text-white">{title}</h4>
          <span className="text-white">{description}</span>
        </div>
          </a>
      </div>
    </Col>
  )
}