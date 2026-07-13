export interface HomeListing {
  id: string;
  name: string;
  city: string;
  pool: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  imageUrl: string;
  smartMoveHighlights: string;
}

export const allHomeListings: HomeListing[] = [
  { id: 'dal-1', name: 'Northeast Dallas Family Home', city: 'Dallas', pool: 'Dallas', price: '$575,000', beds: '4 Beds', baths: '3 Baths', sqft: '2,579 sqft', imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80', smartMoveHighlights: 'Northeast Dallas four-bedroom in a quiet established neighborhood. Open floor plan with large backyard. Easy access to I-635 and US-75.' },
  { id: 'dal-2', name: 'Uptown Townhome', city: 'Dallas', pool: 'Dallas', price: '$595,000', beds: '2 Beds', baths: '2.5 Baths', sqft: '1,523 sqft', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', smartMoveHighlights: "Uptown Dallas townhome steps from McKinney Ave. Ideal for buyers entering one of Dallas's fastest-appreciating neighborhoods. Walkable lifestyle with strong resale value." },
  { id: 'dal-3', name: 'McKinney Ave Condo', city: 'Dallas', pool: 'Dallas', price: '$850,000', beds: '2 Beds', baths: '3 Baths', sqft: '1,485 sqft', imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', smartMoveHighlights: 'Rare Uptown Dallas opportunity walking distance to restaurants, bars, and Katy Trail access. Ideal for buyers or investors.' },
  { id: 'dal-4', name: 'Vickery Place Townhome', city: 'Dallas', pool: 'Dallas', price: '$695,000', beds: '2 Beds', baths: '1.5 Baths', sqft: '1,140 sqft', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80', smartMoveHighlights: 'Uptown Dallas property in Vickery Place. Strong investment potential in a high-demand urban corridor. Updated interiors with premium finishes and private outdoor space.' },
  { id: 'dal-5', name: 'Uptown Skyline Townhome', city: 'Dallas', pool: 'Dallas', price: '$1,850,000', beds: '3 Beds', baths: '3.5 Baths', sqft: '4,450 sqft', imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80', smartMoveHighlights: 'Stunning Uptown Dallas townhome with over 4,400 sqft. Rooftop terrace with panoramic skyline views, elevator, and private two-car garage. Exceptional finish level.' },
  { id: 'ndal-1', name: 'Preston Hollow Estate', city: 'North Dallas', pool: 'North Dallas', price: '$3,450,000', beds: '5 Beds', baths: '6 Baths', sqft: '6,980 sqft', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', smartMoveHighlights: "Extraordinary estate in Preston Hollow. Nearly 7,000 sqft of luxury living with resort-style grounds in one of Dallas's most prestigious corridors." },
];
