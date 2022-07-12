<template>
  <yandex-map :coords="coords" :zoom="zoom">
    <ymap-marker v-for="(marker) in markers" :marker-id="marker.id" :coords="marker.coords" :icon="markerIcon"
      :balloon-template="balloonTemplate(marker)" :marker-events="['click']">
    </ymap-marker>
  </yandex-map>
  <!-- <img src="../assets/marker.png" hidden> -->
</template>


<script>
import { markerParser } from '../scripts/get-marker-data.js';

const markers = markerParser.get_markers();

//console.log(markers);

export default {
  data: () => ({
    coords: [59.939099, 30.315877],
    markers: markers,
    zoom: 12,

  }),
  setup() {
    let sizeX = 91; let sizeY = 127;
    let scale = 3;
    let X = sizeX / scale;
    let Y = sizeY / scale;
    let offsetX = -X / 2;
    let offsetY = -Y;
    return {
      markerIcon: {
        layout: 'default#image',
        imageHref: './marker.png',
        imageSize: [X, Y],
        imageOffset: [offsetX, offsetY],
      }
    }
  },
  computed: {
    balloonTemplate(m) {
      //return content;
      return (m) => {
        let content = `
        <div style="font-size:16px">
          <div>Компания-владелец: <strong>${m.data.owner}</strong></div>
          <div>Размер: <strong>${m.data.size}</strong></div>
          <div>Предназначение: <strong>${m.data.type}</strong></div>
          <div style="font-size:10px; margin-top:8px">Местонахождение: ${m.coords}</div>
        </div>
        `;
        return content;
      };
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../styles/baloon.css';

.ymap-container {
  height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #eee;
}
</style>
