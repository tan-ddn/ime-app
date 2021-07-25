import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import HistoryTimeline from '../History/HistoryTimeline';
import ResearchFeatures from '../Research/ResearchFeatures';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let intro = '<p>Das IME Metallurgische Prozesstechnik und Metallrecycling – Institut und Lehrstuhl der RWTH Aachen (Kurzform: IME) an der RWTH Aachen University ist ein Lehr- und Forschungsinstitut im Bereich der metallurgischen Gewinnung, dem Recycling, der Veredelung und der Synthese von Nichteisenmetallen und Legierungen. Aktuelle Forschungsschwerpunkte fokussieren sich stark auf Aktivitäten zur Circular economy (deutsch: Kreislaufwirtschaft).</p><p>So werden in laufenden Forschungsvorhaben metallurgische Prozesse entwickelt, die ein nachhaltiges Wirtschaften metallhaltiger Abfall- und Reststoffe ermöglichen und damit die Rohstoffversorgung im europäischen Wirtschaftsraum stärken. Das IME ist in die Fachgruppe für „Materialwissenschaft und Werkstofftechnik“ (MuW) der Fakultät für Georessourcen und Materialtechnik eingebunden.</p>';
let forsgeb = {
    field1: 'Der traditionelle Schwerpunkt der Recyclingmetallurgie als Beitrag zur circular economy basiert auf dem Einsatz von TBRC oder Elektrolichtbogenöfen, wo aufbereitete Batteriekomponenten, Elektronikschrotte, verbrauchte Katalysatoren aber auch industrielle Reststoffe wie Stäube, Schlämme oder Schlacken verarbeitet werden.',
    field2: 'Im Bereich der Werkstoffprozesstechnik nimmt die Schutzgas-/Vakuummetallurgie mit den Verfahren induktives Schmelzen, Elektroschlackeumschmelzen und Vakuumlichtbogenschmelzen einen breiten Raum ein, und wird dabei um viele Raffinationsverfahren zur Darstellung sehr reiner Metalle (Zonenschmelzen, fraktionierte Kristallisation, Destillation und Spülgasbehandlung) ergänzt.',
    field3: 'Die dritte Forschungsplattform bilden Labore zur Grundlagenforschung, in denen thermochemisch modellierte Gleichgewichte zwischen Metall und Schlacke experimentell validiert, die Kinetik metallurgischer Reaktionen bestimmt, aber auch Eigenschaften schmelzflüssiger Phasen (z. B. Viskosität, Dichte, Oberflächenspannung, Leitfähigkeit) ermittelt werden.',
    greentxt: '2017 ist es dem IME gelungen das Markenzeichen „Green Metallurgy“ europaweit zu schützen. Metallurgische Konzepte und Prozesse, die auf dem Gedanken des umweltfreundlichen, nachhaltigen, Zero-Waste- und Low-Emission-Metallurgy-Ansatz aufbauen, werden mit diesem Namen/Logo gekennzeichnet.'
};
let pre_u_koo = '<p>Das IME wurde mehrmals für seine wissenschaftlichen Leistungen auf dem Gebiet der Nichteisenmetallurgie mit verschiedenen Preisen ausgezeichnet. So wurde das Institut vom Bundesministerium für Wirtschaft und Energie mit dem Deutschen Rohstoffeffizienz-Preis 2012 für das mit der Firma Accurec Recycling GmbH entwickelten Verfahren zur Rückgewinnung von Rohstoffen aus elektronischen Altgeräten, insbesondere aus Batterien, ausgezeichnet. Außerdem war das IME in den Jahren 2008, 2012 und 2016 Preisträger des weltweit höchstdotierten metallurgischen Kaiserpfalz-Preises der Wirtschaftsvereinigung Metalle. Thematisch waren auch hier sowohl das Batterierecycling, als auch Nanotechnologie und Titanmetallurgie Hintergründe für diese Ehrung.</p><p>Das IME war aktiv an der Gründung des europäischen Forschungsnetzwerks EIT RawMaterials beteiligt und vertritt die Interessen der RWTH als Core-Partner (Rektoratsbeauftragter). Die Beteiligung der RWTH am EIT RawMaterials stärkt die Präsenz im europäischen Raum, gewährt Informationen zu Entwicklungen der Rohstoffbranche und ermöglicht die Förderung von Lehr- und Innovationsvorhaben. Als eines von sechs Instituten der RWTH Aachen University ist das IME Gründungsmitglied des Open-Innovation-Forschungscluster AMAP (Advanced Metals and Processes), in dessen Rahmen gemeinsame vorwettbewerbliche Forschungsprojekte zur Stärkung des Werkstoffs Aluminium erfolgen. Zu diesem Forschungscluster zählen außerdem 14 Industrieunternehmen.</p><p>Aus der intensiven Kooperation mit der Nationalen Technischen Universität Donetsk in der Ukraine hat sich eine Führungsposition im Bereich der Titanmetallurgie ergeben, die u. a. mit der Verleihung der Ehrendoktorwürde an Prof. Bernd Friedrich geehrt wurde.[11] Weitere strategische Partnerschaften pflegt das IME mit der Technischen Universität Istanbul (Hydrometallurgie), der Universität Maribor (Nanopulver), der Nationalen Technischen Universität Athen (industrielle Reststoffe) als auch mit der Universität Belgrad (Elektrochemie).</p>';
let lehrangebot = '<ul><li>Der sich in den vergangenen Jahren vollzogene Strukturwandel in der Metallindustrie hatte auch gravierende Auswirkungen auf die Ingenieursqualifikation. Insbesondere kleinere und mittelständische Unternehmen (KMU) forderten verstärkt fachübergreifende Fähigkeiten. Folglich ist ein Ingenieur auszubilden, der in der Lage ist durch Kombination fundierter Kenntnisse in Metallurgie, Anlagenbau und Informatik, die Entwicklung und Optimierung metallurgischer Prozesse sowie von Metalllegierungen zu ermöglichen.</li><li>Das praxisnah gestaltete Studium der Nichteisenmetallurgie in der Fachgruppe „Materialwissenschaft und Werkstofftechnik“ soll diesen Anforderungen entsprechen. Dabei soll auf die Befähigung sowohl zur Entwicklung von Verfahren zur Herstellung innovativer metallischer Werkstoffe als auch zu deren Recycling ein wesentliches Augenmerk gelegt werden. Das Lehrangebot des IME richtet sich vornehmlich an Studierende des Werkstoffingenieurwesens, sowie der Studiengänge des Wirtschaftsingenieurwesen (Schwerpunkt Werkstoff- und Prozesstechnik) und des Umweltingenieurwesens (Schwerpunkt Rohstofftechnik). Diese werden an der RWTH Aachen in einem 6-semestrigen Bachelor-/4-semestrigen Masterstudiengang oder in einem 4-semestrigen englischsprachigen Aufbaustudiengang zum „Master in Metallurgical Engineering“ ausgebildet.</li><li>In allen drei Studiengängen werden die Schwerpunkte Thermische Gewinnungsverfahren, Thermische Raffinationsverfahren und Hydrometallurgie angeboten. Ferner runden die Wahlfächer „Ressourceneffizienz beim Metallrecycling“, „Metallurgie und Eigenschaften von Al-Schmelzen“, „Planung und Wirtschaftlichkeit metallurgischer Anlagen“ und „Die Wertschöpfungskette der Seltenen Erden (SE)- Gewinnung und Recycling“ das Lehrangebot des Institutes ab.</li></ul>';

export default class Imprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            forsgeb: forsgeb,
            pre_u_koo: pre_u_koo,
            lehrangebot: lehrangebot
        }
    }    
    
    render() {
        return(
            <div className="imprint">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/tbrc_aeutor_id_4463.jpg'} transformY='-15%'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    {/* <div id="intro" className="py-3">
                                        <h2 className="heading">Imprint</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-8">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                                <div className="py-2 col-12 col-sm-4">
                                                <figure>
                                                    <img src={process.env.PUBLIC_URL + '/img/about/IME_Gebaeude_Juni_2004-011.jpg'} alt="Building of the IME" />
                                                    <figcaption>Building of the IME</figcaption>
                                                </figure>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}
                                    <div id="imprint" className="py-3">
                                        <h2 className="heading">Imprint</h2>
                                        <div className="row">
                                            <div className="col-12 col-sm-6 py-3">
                                                <p>
                                                According to § 5 TMG
                                                </p>
                                                <p>
                                                <b>Publisher </b>
                                                </p>
                                                <p>
                                                Published on behalf of the Rector of RWTH Aachen University.
                                                </p>
                                                <p>
                                                RWTH Aachen University.<br/> Templergraben 55<br/> 52062 Aachen (street address)<br/> 52062 Aachen (mailing address)<br/><br/> E-mail: <a href="mailto:institut@ime-aachen.de">webmaster@rwth-aachen.de</a><br/>Internet: <a href="http://www.rwth-aachen.de">www.rwth-aachen.de</a>
                                                </p>
                                                <p>
                                                Telefon: +49 241 80 95851 <br/> Fax: +49 241 80 95851
                                                </p>
                                                <p>
                                                RWTH Aachen University is a public corporation. It is represented by the Rector Univ.-Prof. Dr. rer. nat. Dr. h.c. mult. Ulrich Rüdiger
                                                </p>
                                            </div>
                                            <div className="col-12 col-sm-6 py-3">
                                                <p><b>
                                                Supervisory authority
                                                </b></p>
                                                <p>
                                                Ministry of Innovation, Science, Research and Technology of North Rhine-Westphalia, Völklinger Straße 49, 40221 Düsseldorf.
                                                </p>
                                                <p><b>
                                                Tax identification number
                                                </b></p>
                                                <p>
                                                According to § 27 a sales tax law: DE 121689807
                                                </p>
                                                <p><b>
                                                Content responsibility
                                                </b></p>
                                                <p>
                                                The respective creators of the individual pages are responsible for the accuracy and timeliness of the content.
                                                </p>
                                                <p>
                                                Contact: <a href="http://www.metallurgie.rwth-aachen.de/new/src/index2.php?route=team_detail_sql&amp;teamid=29">Prof. Dr. Ing. Dr. h.c. Bernd Friedrich</a><br/> Tel: +49 241 80 95850<br/> E-mail: <a href="mailto:institut@ime-aachen.de">institut@ime-aachen.de</a>
                                                </p>
                                                <p>
                                                Details on questions of liability and data protection can be found in the disclaimer.
                                                </p>
                                                <div style={{"clear": "both"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="" className="row pb-4">
                                        <div id="liability" className="py-3 col-12 col-sm-6">
                                            <h2 className="heading">Liability and privacy</h2>
                                            <p>
                                            The editor is liable for the content to be up to date and accurate. The web pages are designed, uploaded and updated under coordination of the webmasters.<br/><a rel="noopener nofollow " target="_blank" href="http://www9.rwth-aachen.de/awca/c.asp?id=lwb">Disclaimer and privacy policy</a>
                                            </p>
                                        </div>
                                        <div id="terms" className="py-3 col-12 col-sm-6">
                                            <h2 className="heading">Terms of Service</h2>
                                            <p>
                                            You can read about the General Terms and Conditions of RWTH Aachen University, for their Chair for Metallurgical Process Technology and Metal Recycling and Institute for Metallurgy and Electrometallurgy (IME): <br/><a href="http://www.metallurgie.rwth-aachen.de/data/Others/AGB.pdf">Terms of Service</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="to-top-link">
                            <a href="#">top</a>
                            </p> */}
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}