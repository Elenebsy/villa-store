import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import './Home.css';
import './mainslider.css';
import Search from '../Search-Bar/Search';
import Footer from '../Footer/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3000/properties'); // Update the URL with your server endpoint
      const data = response.data;
      this.setState({
        propertyData: data,
        loading: false,
      });
      console.log('Fetched Property Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { propertyData, loading } = this.state;

    // Filter properties based on type
    const houses = propertyData.filter((property) => property.type === 'house').slice(0, 9);
    const apartments = propertyData.filter((property) => property.type === 'apartment').slice(0, 9);

    return (
      <div className="HomeBody">
        <div className="category">
          <div className="categoryTitle">
            <ul className="link">
              <li>
                <NavLink to="/Houses" className="1c">
                  Houses
                </NavLink>
              </li>
              <li>
                <NavLink to="/Apartments" className="1c">
                  Apartments
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="h">
          <Search />
        </div>
        <div className="categoryProducts">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="slider">
                {houses.map((property) => (
                  <div key={property.property_id} className="slider-item">
                    <div className="card">
                      <img src={property.image1} alt={property.Out_ttitle} />
                      <div className="card-content">
                        <h3>{property.Out_ttitle}</h3>
                        <p>Price: ${property.price}</p>
                        {/* Add more details as needed */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider">
                {apartments.map((property) => (
                  <div key={property.property_id} className="slider-item">
                    <div className="card">
                      <img src={property.image1} alt={property.Out_ttitle} />
                      <div className="card-content">
                        <h3>{property.Out_ttitle}</h3>
                        <p>Price: ${property.price}</p>
                        {/* Add more details as needed */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
