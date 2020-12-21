import React from "react";
import { IonCard, IonTitle } from "@ionic/react";
import "./EpgInfo.css";

export default class EpgInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.selectedEvent ? (
      <IonCard className="EpgInfo">
        <IonTitle size="large">{this.props.selectedEvent.name}</IonTitle>
        <p>
          <strong>About:</strong> {this.props.selectedEvent.ext.text}
        </p>
        <p>
          <strong>Idioma:</strong> {this.props.selectedEvent.language}
        </p>
        <p>
          <strong>Empieza: </strong>
          {this.props.convertUTCtoDate(this.props.selectedEvent.start)}
        </p>
      </IonCard>
    ) : (
      <IonCard></IonCard>
    );
  }
}
