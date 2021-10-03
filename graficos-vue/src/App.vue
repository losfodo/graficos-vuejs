<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!--linhas de graficos:   https://chartkick.com/vue-->
    <line-chart :data="{ '2017-05-13': 2, '2017-05-14': 5 }"></line-chart>

    <pie-chart
      :data="[
        ['Blueberry', 44],
        ['Strawberry', 23]
      ]"
    ></pie-chart>

    <column-chart
      :data="[
        ['Sun', 32],
        ['Mon', 46],
        ['Tue', 28]
      ]"
    ></column-chart>

    <div>
      <geo-chart
        :data="[
          ['United States', 44],
          ['Germany', 23],
          ['Brazil', 22]
        ]"
      ></geo-chart>
    </div>

    <line-chart :data="datax" />

    <line-chart :data="chartData"></line-chart>

    <area-chart
      :data="{ '2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5 }"
    ></area-chart>

    <radar-chart
    :data="{ '2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5 }"></radar-chart>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      chartData: {
        '2017-05-13': 2,
        '2017-05-14': 5,
        '2017-05-15': 4

      },
      datax: [
        {name: 'Workout', data: {'2017-01-01 00:00:00 -0800': 3, '2017-01-02 00:00:00 -0800': 4}},
        {name: 'Call parents', data: {'2017-01-01 00:00:00 -0800': 5, '2017-01-02 00:00:00 -0800': 3}}
      ],
      data: {//deve ser data aqui nome não pode ser mudado nesse especifico pq não sei
      chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    },
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
