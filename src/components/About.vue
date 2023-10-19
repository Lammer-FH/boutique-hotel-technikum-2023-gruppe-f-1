<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "About"
})
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 Aboutheader" >About Us</h1>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <img src="@/assets/Aboutpic.jpg" class="img-fluid mb-4" alt="About Us Image">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum eligendi laudantium earum id assumenda molestias esse consectetur 
          fuga quos! Vitae nemo rerum magni iste magnam neque explicabo nulla, similique modi culpa, quia dignissimos itaque tenetur distinctio. 
          Facilis deleniti error consectetur repudiandae culpa, sunt voluptate ad illo ex vitae, temporibus reprehenderit possimus ut autem minima.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere porro voluptate maxime, atque impedit asperiores ex optio aliquam sed 
          similique eaque fuga molestiae et distinctio perspiciatis nobis sequi repellat 
          natus consequatur mollitia quos pariatur ad? Ipsa ipsum commodi quasi, eveniet quos nam voluptatibus ducimus sunt pariatur? Quasi, sequi quia?
        </p>
      </div>
    </div>
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
    color: #2aa1cd, #2a2820;
    font-family:'Dancing Script';
    text-decoration: underline;
    text-decoration-color: #2aa1cd;
  }
  img {
    border-radius: 60%; 
  }
</style>
