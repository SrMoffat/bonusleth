import React from 'react'
import FeedCard from './FeedCard'

export default function Feeds() {
  return (
	  <section id='bonus-feeds'>
		  <div className='section-wrapper'>
			  <div className='bonus-feeds-list'>
				  {
					  Array(5).fill('').map((_, i) => <FeedCard key={i} />)
				  }
			 </div>
		  </div>
	</section>
  )
}
