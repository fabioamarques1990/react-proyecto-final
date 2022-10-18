import React from 'react'
import Images from './Images.js'

const Galeria = () => {
	return (

		<div className="container py-5">
			<h2 className='text-center py-4'>Ven y después juntas aquí tu experiencia</h2>
			<div className="row">
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic1} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic2} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic3} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic4} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic5} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic6} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic7} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic8} height="1080" alt="#" loading="lazy" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic9} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic10} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic11} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
				<div className="col-lg-3 col-6 g-3">
					<div className="lc-block">
						<img className="img-fluid" src={Images.pic12} width="1080" height="1080" alt="#" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Galeria