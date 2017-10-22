import React, { Component } from 'react';
import './Footer.css';
import FooterList from '../../containers/footerList/FooterList';

const menu = [
  {link: "#", name: "Courses"},
  {link: "#", name: "Links"},
  {link: "#", name: "Games"}
];
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
          <FooterList data={menu} title="Menu"/>
          <FooterList data={externalLinks} title="Contacts"/>
          <FooterList data={socialLinks} title="Social"/>
        </div>
      </footer>
    );
  }
}

export default Footer;
