import React from 'react'
import './style.scss'

const Divider = ({ sm = false, md = false, mlg = false, lg = false }) => {
	return (
		<div className={`Divider ${sm ? 'Divider-sm' : ''}${md ? 'Divider-md' : ''}${mlg ? 'Divider-mlg' : ''}${lg ? 'Divider-lg' : ''}`} />
	)
}

export default Divider