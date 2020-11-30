import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';


class About extends Component {
    render(){
        return (
            <div>
                <Header
                    title="Welcome to Our Studio!"
                    subtitle="It's really great story"
                    showButton={false}
                    image={image}
                />
                <Timeline/>
                
            </div>
           
        );
    }
}

export default About;