import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { MainContainer } from '../app/MainContainer';

// Styles
const useStyles = makeStyles((theme) => ({
    welcome: {
        fontWeight: 'bold'
    }
}));

function Main(props: RouteComponentProps) {
    // Style
    const classes = useStyles();

    return (
        <MainContainer padding={1}>
            <h2 className={classes.welcome}>
                Welcome to SmartERP React Project
            </h2>
        </MainContainer>
    );
}

export default Main;
