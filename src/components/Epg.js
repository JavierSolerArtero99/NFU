import React from "react";
import epgData from "../data/epg.json";
import {
  IonSlides,
  IonSlide,
  IonRow,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonTitle,
} from "@ionic/react";
import "./Epg.css";
import EpgInfo from "./EpgInfo";

export default class Epg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: Object.values(epgData.events).reverse(),
      name: epgData.name,
      title: epgData.title,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //Ja vorem
  }

  handleClick(e) {
    console.log(e);
    this.setState({
      selectedEvent: e,
    });
  }

  convertUTCtoDate(utcEpoch) {
    //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,time:'numeric'};
    let d = new Date(0);
    d.setUTCSeconds(utcEpoch);
    return d.toLocaleString("es-ES", {});
  }

  render() {
    const slideOpts = {
      slidesPerView: "auto",
      zoom: false,
      grabCursor: true,
      virtual: true,
    };
    return (
      <IonRow>
        <IonLabel className="my-label">
          <IonTitle>Channel: {this.state.title}</IonTitle>
        </IonLabel>
        <IonSlides options={slideOpts}>
          {this.state.events.map((eventEPG, index) => (
            <IonSlide
              key={index}
              onClick={() => this.handleClick(eventEPG.spa)}
            >
              <IonCard key={"col_" + index}>
                <IonCardHeader>
                  <IonCardSubtitle>
                    {this.convertUTCtoDate(eventEPG.spa.start)}
                  </IonCardSubtitle>
                  <IonCardTitle>{eventEPG.spa.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  {eventEPG.spa.ext && eventEPG.spa.ext.text}
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>
        <EpgInfo
          convertUTCtoDate={this.convertUTCtoDate}
          selectedEvent={this.state.selectedEvent}
        />
      </IonRow>
    );
  }
}
