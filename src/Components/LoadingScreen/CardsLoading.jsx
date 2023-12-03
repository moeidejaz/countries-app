import React from 'react';
import {Skeleton} from '@mui/material';
import styles from './cardsLoading.module.css';

function CardsLoading() {
    return(
        <section className={styles.cards}>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
        </section>
    )
}

export default CardsLoading;