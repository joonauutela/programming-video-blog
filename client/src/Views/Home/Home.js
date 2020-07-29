import React from 'react'
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
                <Header
                    as="h1"
                    content="Website name"
                    inverted
                    style={{
                        fontSize: "4em",
                        fontWeight: "normal",
                    }}
                />
                <Header
                    as="h2"
                    content="Find unpopular programming videos that deserve more attention"
                    inverted
                    style={{
                        fontSize: "1.7em",
                        fontWeight: "normal",
                        marginTop: "1.5em"
                    }}
                />
                <Button primary size="huge">
                    Get Started
          <Icon name="right arrow" />
                </Button>
            </div>
            <Segment className="segment-container" vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                What is this all about?
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                Find useful programming related videos on new and old technologies
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
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Button size="huge">All Posts</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Home