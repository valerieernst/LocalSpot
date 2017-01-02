import React from 'react';

const currentListing = ({listing}) => {
  <Image src={listing.image_url} responsive />
  <h2>{listing.name}</h2>
  <div>
    <h4 className="col-sm-6">Rating: {listing.rating}/5</h4> 
    <h4 className="col-sm-6">Type: {listing.categories[0][0]}</h4>
  </div>
}

export default currentListing;