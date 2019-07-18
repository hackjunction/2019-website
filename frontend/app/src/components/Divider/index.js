import React from 'react'
import styles from './Divider.module.scss';

const Divider = ({ sm = false, md = false, mlg = false, lg = false }) => {
	return (
		<div className={`${sm ? styles.sm : ''}${md ? styles.md : ''}${mlg ? styles.mlg : ''}${lg ? styles.lg : ''}`} />
	)
}

export default Divider