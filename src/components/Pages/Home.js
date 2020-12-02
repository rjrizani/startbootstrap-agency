import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-useble components
import Services from '../Common/services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';


class Home extends Component {
    render(){
        return(
            <div>
                <Header
                    title="Welcome to Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                <Timeline/>
                <Team/>
               
            </div>
        )
    }
}

export default Home;