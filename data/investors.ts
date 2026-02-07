import { InvestorProperty } from './types';
/**
 * INVESTOR'S CORNER DATA FILE
 * 
 * This file contains exclusive investment-grade property listings.
 * These are manually curated opportunities for real estate investors.
 * 
 * HOW TO UPDATE LISTINGS:
 * 1. Edit the investorProperties array below
 * 2. Add new properties by copying the template below
 * 3. Commit changes to GitHub - Vercel will auto-deploy
 * 
 * PROPERTY TEMPLATE:
 * {
 *   id: 'unique-id',
 *   name: 'Property Name',
 *   location: 'Specific Address or Area',
 *   city: 'City, TX',
 *   priceRange: '$2.5M - $3.2M' or 'Contact for Pricing',
 *   capRate: '6.5%', 
 *   units: '48 Units' or '120-Unit Complex',
 *   description: 'Detailed investment opportunity description',
 *   highlights: ['Key Feature 1', 'Key Feature 2', 'Key Feature 3'],
 *   imageUrl: 'https://placehold.co/800x600/...',
 *   investmentType: 'Value-Add' | 'Turnkey' | 'Development' | 'Premium',
 * }
 */
export const investorProperties: InvestorProperty[] = [
];
export const getAllInvestorProperties = (): InvestorProperty[] => {
  return investorProperties;
};
export const getFeaturedInvestorProperties = (): InvestorProperty[] => {
  return investorProperties.filter(prop => prop.featured);
};
export const getPropertiesByType = (type: InvestorProperty['investmentType']): InvestorProperty[] => {
  return investorProperties.filter(prop => prop.investmentType === type);
};
