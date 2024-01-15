<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Impressum"
})
</script>

<template>
  <div class="container mt-5">
    <h1 class="h1">Impressum</h1>

    <b-container>
      <b-row>
        <b-col md="6">
          <p>
            Impressums-, Offenlegungs- und Informationspflichten
            nach § 14 UGB, § 25 MedienG und § 5 E-Commerce-Gesetz.
          </p>

          <p class="mt-4">Boutique Hotel Technikum GmbH<br>
            Technikumgasse 35<br>
            1010 Wien<br>
            Österreich
          </p>

          <p>
            Telefon: +43 1 123 456<br>
            Email: <a href="mailto:office@technikum.at">office@technikum.at</a>
          </p>

          <p>
            <span style="text-decoration: underline;">Geschäftsführung:</span><br>
            Max Mustermann, Anna Musterfrau<br>
          </p>
          <p>
            Registereintragungen: Handelsgericht Wien, FN xxxxxx i<br>
            Umsatzsteuer-Identifikationsnummer: ATU xxxxxxxx<br>
            Unternehmensgegenstand: Hotelbetrieb, Tourismus<br>
            Aufsichtsbehörde: Magistratische Bezirksamt, 1010 Wien
          </p>

          <p>
            Nähere Informationen: siehe <router-link to="/about">About</router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style scoped>

</style>
