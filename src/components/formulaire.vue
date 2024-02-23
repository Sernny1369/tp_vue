<template>
  <div>
    <h2>Envoyer un e-mail</h2>
    <form @submit.prevent="submitForm">
      <label for="recipient">Destinataire:</label>
      <input
        type="text"
        id="recipient"
        v-model="recipient"
        required
        placeholder="Entrez le destinataire"
      />

      <label for="title">Titre du mail:</label>
      <input
        type="text"
        id="title"
        v-model="title"
        required
        placeholder="Entrez le titre du mail"
      />

      <label for="content">Contenu du mail:</label>
      <textarea
        id="content"
        v-model="content"
        required
        placeholder="Entrez le contenu du mail"
      ></textarea>

      <button type="submit">Envoyer</button>
    </form>

    <!-- Affiche le mail -->
    <div v-if="storedMail">
      <h3>Mail stocké :</h3>
      <p><strong>Destinataire:</strong> {{ storedMail.recipient }}</p>
      <p><strong>Titre:</strong> {{ storedMail.title }}</p>
      <p><strong>Contenu:</strong> {{ storedMail.content }}</p>
      <button @click="logout">Déconnexion</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'LeFormulaire',
  data() {
    return {
      recipient: '',
      title: '',
      content: '',
      storedMail: null,
    };
  },
  methods: {
    submitForm() {
      
      this.storedMail = {
        recipient: this.recipient,
        title: this.title,
        content: this.content,
      };
      
      this.recipient = '';
      this.title = '';
      this.content = '';
    },
    logout() {
      
      this.storedMail = null;
    },
  },
};
</script>

<style scoped>

form {
  max-width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  background-color: #42d392;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h3 {
  margin-top: 20px;
}
</style>

