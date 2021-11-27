<template>
  <div>
    <card style="height: 100%; width: 60%; margin-left: auto;
    margin-right: auto;">
    <div class="row">
      <div class="col-12">
        <v-card>
        <v-img
          height="200px"
          src="https://www.sghs.org/images/Subpage-Banners/Pediatrics.jpg"
        >
        </v-img>

        <v-card-text style="text-align: center;">
          <v-avatar size="56">
              <img
                alt="user"
                src="img/bebe1.png"
              >
            </v-avatar>
            <h6 style="color: black; font-size:20px">
              {{ getBabyName }}
            </h6>
          <div class="font-weight-bold ml-8 mb-2">
            Información General
          </div>
          <v-card>
           <v-list dense>
                <v-list-item>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title>
                      Estado:
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title>
                      <v-chip class="ma-2"
                              outlined
                      >
                        <i v-if="info_bebe[getBabyId-1].estado == 'medio'" class="tim-icons icon-alert-circle-exc"></i>
                        <i v-else-if="info_bebe[getBabyId-1].estado == 'ok'" class="tim-icons icon-check-2"></i>
                        <i v-else class="tim-icons icon-user-run"></i>
                      </v-chip>                  
                    </v-list-item-title>
                         
                  </v-list-item-content>  
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title>
                      Peso:
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title>
                      {{ info_bebe[getBabyId-1].peso + " kg"}}
                    </v-list-item-title>  
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title>
                      Tamaño:
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title>
                      {{ info_bebe[getBabyId-1].tamaño + " cm" }}
                    </v-list-item-title>  
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title>
                      Ultimo examen:
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title>
                      {{ info_bebe[getBabyId-1].last_exam }}
                    </v-list-item-title>  
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title>
                      Pediatra:
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title>
                      {{ info_bebe[getBabyId-1].doc }}
                    </v-list-item-title>  
                  </v-list-item-content>
                </v-list-item>
              </v-list>
          </v-card>
        </v-card-text>
      </v-card>
        <card type="chart" >
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h2 class="card-title">Datos Bebé</h2>
                <p>
                  Datos correspondiente al bebe 
                  respecto a los estándares globales establecidos por la OMS
                </p>
              </div>
              <div class="col-sm-6">
                <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChartCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="initBigChart(index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area" style="height: 100%; width:65%;  margin: 0 auto;">
            <line-chart 
                        ref="bigChart"
                        chart-id="big-line-chart"
                        :chart-data="bigLineChart.chartData"
                        :gradient-colors="bigLineChart.gradientColors"
                        :gradient-stops="bigLineChart.gradientStops"
                        :extra-options="bigLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
        <v-btn block>
          Lista Exámenes
        </v-btn>
      </div>
    </div>
    </card>
  </div>

</template>
<script>
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import * as chartConfigs from '@/components/Charts/config';
  import TaskList from './Dashboard/TaskList';
  import UserTable from './Dashboard/UserTable';
  import config from '@/config';
  import store from '../store'
  import Card from '../components/Cards/Card.vue';

  export default {
    components: {
      LineChart,
      BarChart,
      TaskList,
      UserTable
    },
    data() {
      return {
        info_bebe: [
          {
            id: 1,
            estado: "ok",
            tamaño: 88.1,
            peso: 13.4,
            last_exam: "2021-10-31",
            doc: "María Eugenia Ríos"
          },
          {
            id: 2,
            estado: "medio",
            tamaño: 76.7,
            peso: 9.0,
            last_exam: "2021-11-10",
            doc: "María Eugenia Ríos"
          }
        ],
        bigLineChart: {
          // DATOS PARA LOS BEBES, PRIMERO VA PESO, SEGUNDO VA ALTURA.
          allData: [
            // Primer bebé
            [
              [2.8, 3.4, 5.4, 7.2, 7.5, 8.0, 8.4, 8.8, 9.2, 9.6, 9.9, 10.2,10.5,10.8,11.0,11.3,11.5,11.7,12.0,12.2,12.5,12.7,12.9,13.2,13.4],
              [44.2, 53, 55.4, 62.3, 64, 65.5, 68, 69.3, 70.7, 72.0, 73.4, 74.8,75.9,77.2,78.5,79.6,80.7,81.6,82.8,83.4,84.6,85.4,86.3,87.2,88.1]
            ],
            // Segundo bebé
            [
              [2.4,3.2,3.9,4.5,5.0,5.4,5.7,6.0,6.3,6.5,6.7,6.9,7.0,7.2,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.0],
              [43.6,47.8,51.0,53.5,55.6,57.4,58.9,60.3,61.7,62.9,64.1,65.2,66.3,67.3,68.3,69.3,70.2,71.1,72.0,72.8,73.7,74.5,75.2,76.0,76.7]
            ]
          ],
          // Datos globales sacados de la WHO, todo: {ingresar datos de hombres y mujeres y diferenciarlos}
          globalData: [
            {
              sexo: 'M',
              peso: [3.3,4.5,5.6,6.4,7.0,7.5,7.9,8.3,8.6,8.9,9.2,9.4,9.6,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.8,12.0,12.2],
              altura: [49.9,54.7,58.4,61.4,63.9,65.9,67.9,69.2,70.6,72.0,73.3,74.5,75.7,76.9,78.0,79.1,80.2,81.2,82.3,83.2,84.2,85.1,86.0,86.9,87.8],
            }
          ],
          activeIndex: 0,
          chartData: {
            datasets: [{}],
            labels: ['Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 
            'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 
            'Mes 1', 'Mes 1', 'Mes 1','Mes 1', 'Mes 1', 
            'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 
            'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1', 'Mes 1'],
          },
          extraOptions: {
          maintainAspectRatio: false,
            legend: {
              display: false
            },
          responsive: true,
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 50,
                suggestedMax: 110,
                padding: 20,
                fontColor: "#ff8a76"
              }
            }],
        
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(220,53,69,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#ff8a76"
              }
            }]
          }
        

        },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
      }
    },
    computed: {
      getBabyId() {
        return this.$store.state.id_bebe
      },
      getBabyName() {
        return this.$store.state.nombre_bebe
      },
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      isRTL() {
        return this.$rtl.isRTL;
      },
      bigLineChartCategories() {
        return [(0,'Peso'),(1,'Altura')];
      }
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [{
            label: 'Bebé',
            fill: true,
            borderColor: config.colors.purple,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.purple,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.purple,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[this.$store.state.id_bebe-1][index]
          },{
            label: 'Global',
            size: 100,
            fill: true,
            borderColor: config.colors.teal,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.teal,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.teal,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: index ? this.bigLineChart.globalData[0].altura : this.bigLineChart.globalData[0].peso
          }],
          labels: ['Mes 0','Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 
            'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 
            'Mes 10', 'Mes 11', 'Mes 12','Mes 13', 'Mes 14', 
            'Mes 15', 'Mes 16', 'Mes 17', 'Mes 18', 'Mes 19', 
            'Mes 20', 'Mes 21', 'Mes 22', 'Mes 23', 'Mes 24'],
        }
        this.$refs.bigChart.updateGradients(chartData);
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      this.initBigChart(0);
    },
    beforeDestroy() {
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'en';
        this.$rtl.disableRTL();
      }
    }
  };
</script>
<style>
</style>
