import Link from "next/link";
import { Card, Row, Col, Container } from "react-bootstrap";

const Blog = (props) => {
    return (
        <div className="m-5">
            <Container>
                <Row sm={1}>
                    {props.posts.map(({id, title, date, thumnail})=>(
                        <Col sm={6} key={id}>
                            <Card>
                                <Card.Body>
                                    <Link href={`/posts/${id}`}>
                                        <img src={`${thumnail}`} />
                                    </Link>
                                    <Link href={`/posts/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br />
                                    <small>{date}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
