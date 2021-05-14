import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './research.scss';

export default class ResearchFeatures extends ResponsiveComponent {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         greenLogoAlign: 'right',
    //         forsgeb: this.props.forsgeb
    //     }
    // }


    render() {
        let greenLogoAlign = (this.state.screenSize === 'xs') ? 'center' : 'right';
        return(
            <div className="research-features">
            <div className="row d-flex align-items-stretch">
                <div className="col-12 col-lg-4 d-flex py-3">
                    <div className="text-center bg-darkblue rounded p-4">
                        <div className="icon rounded">
                        <FontAwesomeIcon icon="charging-station" />
                        </div>
                        <div className="" dangerouslySetInnerHTML={{__html: this.props.forsgeb.field1}} />
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex py-3">
                    <div className="text-center bg-darkblue rounded p-4">
                        <div className="icon rounded">
                        <FontAwesomeIcon icon="fire" />
                        </div>
                        <div className="" dangerouslySetInnerHTML={{__html: this.props.forsgeb.field2}} />
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex py-3">
                    <div className="text-center bg-darkblue rounded p-4">
                        <div className="icon rounded">
                        <FontAwesomeIcon icon="flask" />
                        </div>
                        <div className="" dangerouslySetInnerHTML={{__html: this.props.forsgeb.field3}} />
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-center pt-2">
                <div className="col-12 col-sm-9">
                    <div className="" dangerouslySetInnerHTML={{__html: this.props.forsgeb.greentxt}} />
                </div>
                <div className="col-12 col-sm-3">
                    <p style={{textAlign: greenLogoAlign}}>
                    <img className="box-img rounded" src={process.env.PUBLIC_URL + '/img/green.gif'} alt="Logo Green Metallurgy" />
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

ResearchFeatures.defaultProps = {
    content: {
        field1: 'Der traditionelle Schwerpunkt der Recyclingmetallurgie als Beitrag zur circular economy basiert auf dem Einsatz von TBRC oder Elektrolichtbogenöfen, wo aufbereitete Batteriekomponenten, Elektronikschrotte, verbrauchte Katalysatoren aber auch industrielle Reststoffe wie Stäube, Schlämme oder Schlacken verarbeitet werden.',
        field2: 'Im Bereich der Werkstoffprozesstechnik nimmt die Schutzgas-/Vakuummetallurgie mit den Verfahren induktives Schmelzen, Elektroschlackeumschmelzen und Vakuumlichtbogenschmelzen einen breiten Raum ein, und wird dabei um viele Raffinationsverfahren zur Darstellung sehr reiner Metalle (Zonenschmelzen, fraktionierte Kristallisation, Destillation und Spülgasbehandlung) ergänzt.',
        field3: 'Die dritte Forschungsplattform bilden Labore zur Grundlagenforschung, in denen thermochemisch modellierte Gleichgewichte zwischen Metall und Schlacke experimentell validiert, die Kinetik metallurgischer Reaktionen bestimmt, aber auch Eigenschaften schmelzflüssiger Phasen (z. B. Viskosität, Dichte, Oberflächenspannung, Leitfähigkeit) ermittelt werden.',
        greentxt: '2017 ist es dem IME gelungen das Markenzeichen „Green Metallurgy“ europaweit zu schützen. Metallurgische Konzepte und Prozesse, die auf dem Gedanken des umweltfreundlichen, nachhaltigen, Zero-Waste- und Low-Emission-Metallurgy-Ansatz aufbauen, werden mit diesem Namen/Logo gekennzeichnet.'
    }
};