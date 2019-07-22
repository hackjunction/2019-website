import React from 'react'
import styles from './Divider.module.scss';

const Divider = ({ xs = false, sm = false, md = false, mlg = false, lg = false }) => {
	return (
		<div className={`Divider ${xs ? styles.xs : ''}${sm ? styles.sm : ''}${md ? styles.md : ''}${mlg ? styles.mlg : ''}${lg ? styles.lg : ''}`} />
	)
}

export default Divider