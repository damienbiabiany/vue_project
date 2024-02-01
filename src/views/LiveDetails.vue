<template>
  <div class="card mt-5">
    <!-- TODO : this need be retrieved dynamically -->
    <div class="card-header bg-dark text-white pulse">
      {{ liveTitle }} (en cours)

      <!-- {{ selections }} -->
      <!-- <div v-if="selections.length > 0">
        <div v-for="selection in selections" :key="selection.id">
        </div>
      </div> -->

      <div v-for="(items, category) in groupedByMarketArray" :key="category">
        <h2>{{ category }}</h2>
        <ul>
          <li v-for="item in items" :key="item.id">
            <p>Name: {{ item.name }}</p>
            <p>Current Odd: {{ item.currentOdd }}</p>
            <p>State: {{ item.state }}</p>
            <!-- You can add more details as needed -->
          </li>
        </ul>
      </div>


    </div>
    <div class="card-body">
      <p class="card-text"></p>
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
      <router-link to="/lives" class="btn btn-light">Retour aux lives</router-link>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import axios from '@/services/axios.js'

export default {
  name: 'livedetails',
  data() {
    return {
      //TODO: shoud be retrieved from json
      //  axios.get('/selections.json')
      selections: [],
      filteredSelections: [],
      itemId: null,
      liveTitle: this.$route.params.name,
      groupedByMarketArray: {}
    }
  },
  mounted() {
    this.fetchSelections();
    this.itemId = this.$route.params.id;
    this.liveTitle = this.$route.params.name
  },
  watch: {
    // Watch for changes in route parameters
    '$route.params.id': function (newId) {
      this.itemId = newId;
      this.fetchSelections();
    }
  },
  methods: {
    fetchSelections() {
      axios.get('/selections.json')
        .then(response => {
          this.selections = response.data;

          if (this.selections && this.selections.length > 0) {
            console.log('this.selections =', this.selections);
            console.log('this.itemId     =', this.itemId);

            // Filter selections to include only those with item.market.event.id value equals to the current live id

            this.filteredSelections = this.selections.filter(item => item.market.event.id === this.itemId);
            console.log('this.filteredSelections  =', this.filteredSelections);

            // const uniqueMarketNames = [...new Set(filteredSelections.map(item => item.market.name))];
            // console.log('uniqueMarketNames =', uniqueMarketNames);

            this.groupedByMarketArray = this.groupedByMarket(this.filteredSelections)
            console.log('this.groupedByMarketArray =', this.groupedByMarketArray);

            // Convert the JSON object to a JSON string
            const jsonString = JSON.stringify(this.groupedByMarketArray, null, 2);
            console.log('jsonString =', jsonString);

          } else {
            this.filteredSelections = [];
            this.groupedByMarketArray = {};
          }
        })
        .catch(error => {
          console.error("Error fetching the selections:", error);
        });
    },
    /*
        The JSON data is stored in the data function under bets.
        The groupedByMarket methods organizes this data by market names.
     */
    groupedByMarket(data) {
      /*
        We use Array.prototype.reduce() to iterate over the data and accumulate the results into an object (acc).
        For each item, we check if the market.name already exists as a key in our accumulator object. If it doesn't, we initialize it with an empty array.
        We then push the current item into the array corresponding to its market name.
        Finally, the function returns the accumulated object where each key is a unique market name and its value is an array of items.
      */
      return data.reduce((acc, item) => {
        const marketName = item.market.name;
        if (!acc[marketName]) {
          acc[marketName] = [];
        }
        acc[marketName].push(item);
        return acc;
        /*    
          An empty object {} is passed as the second argument to reduce(). 
          This ensures that acc (the accumulator) is initialized as an empty object.
        */
      }, {}); // Initial value set as an empty object
    },
  },
}

</script>
