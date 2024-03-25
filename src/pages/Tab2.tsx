import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><h1 class="myDesign">To Do List</h1></IonTitle>
          <IonButtons slot="end">
            <IonButton href="/logOut">Log Out</IonButton>
            <IonButton href="/login">Change Account</IonButton>
            <IonButton href="/createAccount">Create Account</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">To Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
