import { IonText, IonInput, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import './Tab2.css';
import TodoItem from '../components/TodoItem';

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
        <IonText><h3 class="myDesign">Add a new todo item:</h3></IonText>
        <IonCard class="card-center">
          <form>
            <IonInput label="Todo Name"></IonInput>
            <IonButton class="submitting" type="submit">Submit</IonButton>
          </form>
        </IonCard>
        <IonCard>
          <TodoItem name="Eat" completed={true} />
          <TodoItem name="Sleep" completed={false} />
          <TodoItem name="Repeat" completed={false} />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
