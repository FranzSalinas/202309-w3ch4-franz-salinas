import { Component } from './component';
import { SerieStructure } from '../models/serie';

export class Pending extends Component {
  serieList: SerieStructure[];
  constructor(selector: string, seriesList: SerieStructure[]) {
    super(selector);
    this.serieList = seriesList;
    this.template = this.createTemplate();
    this.render();
  }

  showSeries(allSeries: SerieStructure[]) {
    let listOfSeries = '';
    for (const item of allSeries) {
      listOfSeries += `<li class="serie">
              <img class="serie__poster"
                src="${item.poster}"
                alt="${item.name}poster" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} ${item.year} (1999)</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
            <li class="serie">
              <img class="serie__poster"
                src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
                alt="Game of Thrones poster" />
              <h4 class="serie__title">Game of Thrones</h4>
              <p class="serie__info">David Benioff D. B. Weiss (2011)</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
      `;
    }

    return listOfSeries;
  }

  createTemplate() {
    return `
    <ul class="series-list">
    ${this.showSeries(this.serieList)}
    </ul>
    `;
  }
}
