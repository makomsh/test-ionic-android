<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button @click="showAlert('ボタンが押されました')">ボタン</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
// import { PushNotifications } from '@capacitor/push-notifications';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

export default defineComponent({
  name: 'Tab1Page',
  methods: {
    showAlert(msg) {
      alert(msg)
    }
  },
  async mounted() {
    // await PushNotifications.requestPermissions().then(async (result) => {
    //   console.log('result: ',result)
    //   console.log('granted: '+result.granted)
    //   if (result.receive === "granted") {
    //     await PushNotifications.register();
    //     console.log('registerd')
    //   }
    // })
    // .catch((e) => {
    //   console.error(e)
    // });

    // PushNotifications.addListener(
    //   'registration',
    //   (token) => {
    //     // 取得したtokenはサーバーサイドで保持しましょう
    //     console.log('token: ' + token.value);
    //     // eiBzrDYkSyKLyt8l2t2kaK:APA91bHGMactUV4dL_NibYQnDTa5_cpeW1uKANUHGRe9YqOf0v7nJsfPYAid8m7SB1Z0Ws3_8d2CsX8JVcqYdX8CdPmEGj_38TxmmzZ4jji8M0m6yGtpy8RtanzVoNUAztny5UeevZoo
    //   }
    // );

    const auth = getAuth();
    signInWithRedirect(auth, new GoogleAuthProvider())
      .then(() => {
        console.log('redirectResult')
        return getRedirectResult(auth);
      })
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        const token = credential.accessToken;

        console.log('token', token);
        // The signed-in user info.
        // const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton }
});
</script>
