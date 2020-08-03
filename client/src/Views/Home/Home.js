import React from 'react'
import { Link } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
import {
    Button,
    Grid,
    Header,
    Icon,
    Image,
    Segment
} from "semantic-ui-react";
import landing_image from '../../media/landing_image.jpg'

import './Home.css'

const Home = () => {

    return (
        <div>
            <div className="hero-container">
                <div className="hero-header-container">
                    <Header
                        as="h1"
                        content="Find unpopular programming videos that deserve more attention"
                        inverted
                        style={{
                            fontSize: "3em",
                            fontWeight: "normal",
                            color: "black"
                        }}
                    />
                    <h2><Icon name="check" className="icon-check" />Videos you have never seen before</h2>
                    <h2><Icon name="check" className="icon-check" />Filler text</h2>
                    <h2><Icon name="check" className="icon-check" />More filler text</h2>
                    <h2><Icon name="check" className="icon-check" />Last row. Lets do one more filler text</h2>
                    <br />
                    <Link to={"/posts"}>
                        <Button primary size="huge">
                            Get Started
          <Icon name="right arrow" />
                        </Button>
                    </Link>
                </div>
            </div>
            <Segment className="segment-container" vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                What is this all about?
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                Find useful programming related YouTube-videos
                                that deserve more traffic and attention. Up your skills to the next level.
                            </p>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                Second header that has nothing
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                Yes that's right, theres nothing here yet. Lorem ipsum ja niin edelleen. Filler text.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <Image
                                bordered
                                rounded
                                size="large"
                                src={landing_image}
                            />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
        </div>
    )
}

export default Home