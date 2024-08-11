import React from 'react';
import './App.css';
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea, Container } from "@mui/material";

const Content = ({ data }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={6} style={{ marginTop: "0px" }}>
                {data.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 350 }} style={{ marginLeft: "36px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={result.img}
                                    sx={{ height: "200px", width: "100%", objectFit: "cover" }}
                                    alt="Article"
                                />
                                <CardContent>
                                    <Typography gutterBottom style={{ fontWeight: 'bold' }} component="div">
                                        {result.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {result.Description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant="outlined">Share</Button>
                                <Button size="small" variant="outlined" onClick={() => window.location.href = result.link}>Read Article</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;
