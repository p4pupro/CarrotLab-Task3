import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Layout from '../constants/Layout';
import smallSpIcon from '../assets/images/lang/spain-flag-icon-16.png';
import mediumSpIcon from '../assets/images/lang/spain-flag-icon-32.png';
import largeSpIcon from '../assets/images/lang/spain-flag-icon-64.png';
import smallUkIcon from '../assets/images/lang/united-kingdom-flag-icon-16.png';
import mediumUkIcon from '../assets/images/lang/united-kingdom-flag-icon-32.png';
import largeUkIcon from '../assets/images/lang/united-kingdom-flag-icon-64.png';
import smallFrIcon from '../assets/images/lang/france-flag-icon-16.png';
import mediumFrIcon from '../assets/images/lang/france-flag-icon-32.png';
import largeFrIcon from '../assets/images/lang/france-flag-icon-64.png';

const IconChangeLang = (props: any) => {

    const { country } = props;

    const getCountryIcon = (country: any) => {
    
        switch (country) {
            case 'es':
                return [smallSpIcon, mediumSpIcon, largeSpIcon];
            case  'en':
                return [smallUkIcon, mediumUkIcon, largeUkIcon];
            case 'fr':
                return [smallFrIcon, mediumFrIcon, largeFrIcon];
            default:
                return [smallUkIcon, mediumUkIcon, largeUkIcon];   
        }
    }

    const sizeIcon = getCountryIcon(country);


    return (

        <Image
            source={
                Layout.isSmallDevice ?
                    sizeIcon[0]
                : Layout.isMediumDevice ?
                    sizeIcon[1]
                :
                    sizeIcon[2]
            }
            style={styles.image} resizeMode='contain'
        />

    );
}

export default IconChangeLang;

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        borderRadius: 50,
        margin: 10
    }
});