import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomePage extends Component {
  @tracked data = [];
  @tracked columns = [0, 1, 2, 3];
  @tracked rows = [];

  @tracked mockData = {
    data: [
      {
        row: 0,
        col: 0,
        value: '﻿Markets',
      },
      {
        row: 1,
        col: 0,
        value: 'FTSE 100',
      },
      {
        row: 2,
        col: 0,
        value: 'Germany 30',
      },
      {
        row: 3,
        col: 0,
        value: 'Wall Street',
      },
      {
        row: 4,
        col: 0,
        value: 'Bitcoin (USD)',
      },
      {
        row: 5,
        col: 0,
        value: 'Crypto 10 Index',
      },
      {
        row: 6,
        col: 0,
        value: 'GBP/USD',
      },
      {
        row: 7,
        col: 0,
        value: 'EUR/USD',
      },
      {
        row: 8,
        col: 0,
        value: 'USD/JPY',
      },
      {
        row: 9,
        col: 0,
        value: 'Spot Gold',
      },
      {
        row: 10,
        col: 0,
        value: 'Oil - US Crude',
      },
      {
        row: 0,
        col: 1,
        value: 'Sell',
      },
      {
        row: 1,
        col: 1,
        value: '7157.8',
      },
      {
        row: 2,
        col: 1,
        value: '12739.7',
      },
      {
        row: 3,
        col: 1,
        value: '26785.6',
      },
      {
        row: 4,
        col: 1,
        value: '8161.76',
      },
      {
        row: 5,
        col: 1,
        value: '2497.49',
      },
      {
        row: 6,
        col: 1,
        value: '1.29848',
      },
      {
        row: 7,
        col: 1,
        value: '1.11533',
      },
      {
        row: 8,
        col: 1,
        value: '108.520',
      },
      {
        row: 9,
        col: 1,
        value: '1486.01',
      },
      {
        row: 10,
        col: 1,
        value: '5309.1',
      },
      {
        row: 0,
        col: 2,
        value: 'Buy',
      },
      {
        row: 1,
        col: 2,
        value: '7159.8',
      },
      {
        row: 2,
        col: 2,
        value: '12741.7',
      },
      {
        row: 3,
        col: 2,
        value: '26787.2',
      },
      {
        row: 4,
        col: 2,
        value: '8197.76',
      },
      {
        row: 5,
        col: 2,
        value: '2535.49',
      },
      {
        row: 6,
        col: 2,
        value: '1.29865',
      },
      {
        row: 7,
        col: 2,
        value: '1.11539',
      },
      {
        row: 8,
        col: 2,
        value: '108.527',
      },
      {
        row: 9,
        col: 2,
        value: '1486.31',
      },
      {
        row: 10,
        col: 2,
        value: '5311.9',
      },
      {
        row: 0,
        col: 3,
        value: 'Change',
      },
      {
        row: 1,
        col: 3,
        value: '-8.0',
      },
      {
        row: 2,
        col: 3,
        value: '-15.5',
      },
      {
        row: 3,
        col: 3,
        value: '15.2',
      },
      {
        row: 4,
        col: 3,
        value: '-46.26',
      },
      {
        row: 5,
        col: 3,
        value: '-9.12',
      },
      {
        row: 6,
        col: 3,
        value: '0.00174',
      },
      {
        row: 7,
        col: 3,
        value: '-0.00175',
      },
      {
        row: 8,
        col: 3,
        value: '0.123',
      },
      {
        row: 9,
        col: 3,
        value: '-3.92',
      },
      {
        row: 10,
        col: 3,
        value: '-73.4',
      },
    ],
  };

  @tracked allRows = [];

  @action setValues() {
    for (let i = 0; i <= this.columns; i++) {
      let temp = [];
      this.mockData.map((item) => {
        if (item.row === this.columns[i]) {
          temp.push(item.value);
        }
        this.allRows.push(temp);
      });
    }
    console.log(this.allRows);
  }

  @action async getApiData() {
    await fetch('https://a.c-dn.net/b/2Me8Xl.json')
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        this.data = data;
        console.log(this.data);
        this.data.data.map((item) => {
          this.rows.push(item.value);
        });
      });
  }
}
