<template>
  <div>
    <h2>Type Your Address</h2>
    <gmap-autocomplete
      placeholder="Pickup Location"
      classname="form-control"
      @place_changed="setPlace"
    >
    </gmap-autocomplete>
    <button @click="usePlace">Add</button>
    <GmapMap
      :center="{lat:10, lng:10}"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import VueGoogleAutocomplete from './VueGoogleAutocomplete';

export default {
  name:'AutoComplete',
  components: { VueGoogleAutocomplete },
  data: function () {
    return {
      address: '',
      place: null,
      markers: []
    }
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      this.address = addressData;
    },
    resetInput(){
      this.address = '';
      this.$refs.address.clear();
    },
    setPlace(place) {
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        this.place = null;
      }
    }

  }
}
</script>

<style scoped>
.address{
  max-width:500px;
  margin:20px auto;
}
.address li{
  list-style: none;
}
input[type="text"]#map{
  width:60%;
  height:32px;
  padding:4px;
  border:1px solid #ddd;
  border-radius:4px;
  font-size:18px;
}
input[type="text"]#map:focus{
  box-shadow:none;
  outline:none;
  border:1px solid #999;
}
.reset-btn{
  margin-top:10px;
  color:#fff;
  padding:10px 30px;
  border-radius:4px;
  box-shadow:0 1px 10px rgba(52, 128, 241, 0.52);
  background:rgb(43, 133, 236);
}
</style>
