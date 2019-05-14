import React, { Component }  from 'react';

class Evento extends Component {
    render() {
        const { name, logo, description } = this.props.info; 

        if(!name) return null;

        let desc = description.text;
        // console.log(desc.length);

        if(desc.length > 250) {
            desc = desc.substr(0, 250);
        }

        return(
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        { logo !== null ?
                            <img src={logo.url} alt={name.text}/> 
                            : ''
                        }
                    </div>

                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{name.text}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Evento;