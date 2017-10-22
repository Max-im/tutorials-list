import React, { Component } from 'react';
import './Footer.css';
import FooterList from '../../containers/footerList/FooterList';
import { Link } from 'react-router';

const externalLinks = [
  {link: "https://max-im.github.io/", name: "Resume"},
  {link: "#", name: "Portfolio"},
  {link: "https://github.com/Max-im", name: "GitHub"}
];
const socialLinks = [
  {link: "https://www.facebook.com/max.pozhidaev.7", name: 'Facebook'},
  {link: "https://www.linkedin.com/in/maxim-pozhidaev-16726811a/", name: 'LindedIn'},
]

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footerContainer">

          <div className="footer-block">
            <h3 className="footer-title">Menu</h3>
            <ul className="footer-nav">
              <Link to = "/" className="nav-link">Courses</Link>
              <Link to = "/links" className="nav-link">Links</Link>
              <Link to = "/games" className="nav-link">Games</Link>
            </ul>
          </div>

          <FooterList data={externalLinks} title="Contacts"/>
          <FooterList data={socialLinks} title="Social"/>

        </div>
      </footer>
    );
  }
}

export default Footer;
