<template>
  <div class="card mt-5">
    <!-- TODO : this need be retrieved dynamically -->
    <div class="card-header bg-dark text-white pulse">
      Real Madris vs PSG (en cours)
    </div>
    <div class="card-body">
      <p class="card-text">
      <div class="container">
        <h4>Résultat du match</h4>
        <div class="row">
          <div class="col">
            <div class="card bg-primary text-white h-100">
              <div class="card-body">
                <p class="card-text">Réal : 1.5</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-primary text-white h-100">
              <div class="card-body">
                <p class="card-text">Nul : 2.1</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-primary text-white h-100">
              <div class="card-body">
                <p class="card-text">Psg : 1.7</p>
              </div>
            </div>
          </div>
        </div>
        <br>
        <h4>Buteur</h4>
        <div class="row mt-1">
            <div class="card bg-primary text-white h-100 col">
              <div class="card-body">
             D. Neymar : 1.3
              </div>
            </div>
        </div>
      <div class="row mt-1">
        <div class="card bg-primary text-white h-100 col">
          <div class="card-body">
          K. Mbappe : 1.6
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="card bg-primary text-white h-100 col">
          <div class="card-body">
          L. Messi : 1.3
          </div>
        </div>
      </div>
        <div class="row mt-1">
          <div class="card bg-primary text-white h-100 col">
            <div class="card-body">
              K. Benzema : 1.5
            </div>
          </div>
        </div>
          <div class="row mt-1">
            <div class="card bg-primary text-white h-100 col">
              <div class="card-body">
                E. Hasard : 2.5
              </div>
            </div>
          </div>
            <div class="row mt-1">
              <div class="card bg-primary text-white h-100 col">
                <div class="card-body">
                  J. Vinicius : 1.8
                </div>
              </div>
            </div>
              <div class="row mt-1">
                <div class="card bg-primary text-white h-100 col">
                  <div class="card-body">
                    M. Icardi : 1.9
                  </div>
                </div>
              </div>
      </div>
      </p>
      <router-link to="/lives" class="btn btn-light">Retour aux lives</router-link>
    </div>
  </div>

</template>

<script>

// @ is an alias to /src
//import axios from '@/services/axios.js'

export default {
    name: 'livedetails',
    mounted() {

    },
    data() {
        return {
          //TODO: shoud be retrieved from json
          //  axios.get('/selections.json')
          selections : []
        }
    },
   created(){
   },
    methods: {
    }
}

</script>
