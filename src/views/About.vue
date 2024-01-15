<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "About",
});
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 Aboutheader">About Us</h1>
    <b-container>
      <b-row>
        <b-col md="6" offset-md="3">
          <img src="../assets/Aboutpic.jpg" class="img-fluid mb-4" alt="About Us Image">
          <p>
            Herzlich willkommen bei Boutique-Hotel Technikum Wien!
            Lassen Sie uns Ihnen mehr über unsere Leidenschaft für Gastfreundschaft, Technologie und Wiener Kultur erzählen.
            Unser Boutique-Hotel ist das Ergebnis einer Vision, die von der Idee getragen wird, eine einzigartige und innovative Erfahrung für Reisende zu schaffen.
            Wir sind fest davon überzeugt, dass Gastfreundschaft mehr ist als nur ein Geschäft – es ist eine Kunst. Diese Kunst üben wir mit Hingabe und Begeisterung aus.
          </p>
          <h3>Unsere Mission</h3>
          <p>
            Unsere Mission ist es, unseren Gästen nicht nur Unterkunft, sondern auch Inspiration zu bieten.
            Wir verstehen, dass Reisen nicht nur das Erkunden neuer Orte bedeutet, sondern auch das Eintauchen in eine Kultur, das Erschaffen von Erinnerungen und das Erleben von Luxus in all seinen Facetten.
          </p>
          <h3>Unsere Philosophie</h3>
          <p>
            Im Boutique-Hotel Technikum Wien sind wir stolz darauf, Tradition und Moderne miteinander zu verbinden.
            Unser Hotel ist ein Ort, an dem sich Wiener Charme und technischer Fortschritt in harmonischer Eintracht begegnen.
            Wir glauben fest daran, dass Innovation und Service Hand in Hand gehen können, und unsere Gäste verdienen nur das Beste.
          </p>
          <h3>Unser Engagement</h3>
          <p>
            Unser Team ist unsere Stärke. Wir sind stolz auf unsere engagierten Mitarbeiter, die Tag für Tag ihr Bestes geben, um sicherzustellen,
            dass Ihr Aufenthalt in unserem Hotel unvergesslich wird. Wir sind für Sie da, um Ihre Bedürfnisse zu erfüllen, sei es durch Empfehlungen
            für Aktivitäten in Wien oder durch erstklassigen Service in unserem Restaurant und der Lounge.
          </p>
          <h3>Nachhaltigkeit</h3>
          <p>
            Als Teil unserer Verantwortung für die Umwelt und die Gesellschaft bemühen wir uns, nachhaltige Praktiken in unser Hotelkonzept zu integrieren.
            Wir arbeiten kontinuierlich an umweltfreundlichen Initiativen und bemühen uns, unsere ökologische Fußabdruck zu minimieren.
          </p>
          <h3>Kontakt</h3>
          <p>
            Wir möchten stets mit unseren Gästen in Kontakt bleiben. Ob es sich um Anfragen, Feedback oder besondere Wünsche handelt,
            wir sind immer erreichbar. Unsere Türen und unser Herz stehen für Sie offen.
            Vielen Dank, dass Sie sich die Zeit genommen haben, uns näher kennenzulernen.
            Wir freuen uns darauf, Sie persönlich in unserem Boutique-Hotel Technikum Wien willkommen zu heißen und Ihre Erwartungen zu übertreffen.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.container {
  background-color: #87ceeb;
  padding: 20px;
  border-radius: 10%;
}

.Aboutheader {
  font-size: 60px;
  color: #2aa1cd;
  font-family: 'Dancing Script';
  text-decoration: underline;
  text-decoration-color: #2aa1cd;
}

img {
  border-radius: 60%;
}
</style>
