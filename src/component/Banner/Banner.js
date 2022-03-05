import React, {Component} from 'react';
import { Parallax} from 'react-parallax/';
import {Fade , Reveal} from 'react-reveal/';
const image = require('../../image/profile.jpg');

class Banner extends Component {
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section id="home">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp">
                            <marquee behavior="scroll" direction="up"><h3 style={{textAlign:"left"}}>Hello 👋, I'm</h3> </marquee>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 style={{textAlign:"left"}}> <b> {jhonData.name}</b></h2>
                               
                            </Reveal>
                            
                            <marquee behavior="scroll" direction="down"><h4 className="wow fadeInUp anoimated" style={{textAlign:"left"}}> Full  Stack  JavScript Developer</h4> </marquee>
                            <Fade  bottom cascade duration={1000}>
                                <ul className="list_style social_icon" style = {{textAlign: "left"}}>
                                {
                                    jhonData.socialLinks && jhonData.socialLinks.map(item =>{
                                    return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                            )
                                        }
                                    )
                                }
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}

export default Banner;