import React, { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import slices from "../../backoffice/slices.json";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{ marginTop: "160px" }}>
            <Carousel fade activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                {
                    slices.map(slice => 
                        <Carousel.Item>
                            <Link style={{ textDecoration: "none" }} to={slice.url}>
                                <Image width={980} height={520} src={slice.image} className="rounded mx-auto d-block img-fluid" alt="Responsive image" />
                            </Link>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    );
}

export default Home;