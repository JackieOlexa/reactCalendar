import React from 'react';
import { IonCheckbox, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';


function TodoItem(props) {
  return (
    <IonItem>
      <IonCheckbox labelPlacement="end" justify="start" id={props.id} checked={props.completed}>{props.name} | {props.dueDate}</IonCheckbox>
      <IonButtons>
        <IonButton>Edit</IonButton>
        <IonButton>Delete</IonButton>
      </IonButtons>
    </IonItem>

  );
}

export default TodoItem;
