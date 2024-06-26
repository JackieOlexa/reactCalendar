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
            <IonButtons slot="end">
              <IonButton href="/logOut">Log Out</IonButton>
              <IonButton href="/login">Change Account</IonButton>
              <IonButton href="/createAccount">Create Account</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonText><h3 class="myDesign">Add a new todo item:</h3></IonText>
        <IonCard class="card-center">
          <form>
            <IonInput label="Thing to do:" placeholder="New Todo"></IonInput>
            <IonInput label="Deadline:" placeholder="mm/dd/yyyy"></IonInput>
            <IonButton class="submitting" type="submit">Submit</IonButton>
          </form>
        </IonCard>
        <IonCard>
          <TodoItem id="todo-0" name="Eat" dueDate="03/25/2024" completed={true} />
          <TodoItem id="todo-1" name="Sleep" dueDate="06/19/2102" completed={false} />
          <TodoItem id="todo-2" name="Repeat" dueDate="03/26/2024" completed={false} />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
