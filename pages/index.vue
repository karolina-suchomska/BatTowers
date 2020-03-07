<template>
  <div class="general-container">
    <Belt />
    <div class="container">
      <div class="box">
        <h1>
          Bat Towers Management
        </h1>
      </div>
      <div class="box">
        <Descriptions
          :descriptions="descriptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Belt from '@/components/Belt'
import Descriptions from '@/components/Descriptions'

export default {
  components: {
    Belt,
    Descriptions
  },
  data () {
    return {
      descriptions: [
        {
          title: 'Profesjonalne zarządzanie wynajmem',
          content: 'Powierzając nam zarządzanie wynajmem swojego apartamentu, możesz spać spokojnie - oddajesz go w ręce doświadczonych profesjonalistów. Zadbamy o to, żeby Twój apartament pracował dla Ciebie, zapewniając maksymalny zysk przy minimalnej stracie czasu, a Twoim gościom - spokój, komfort i obsługę na najwyższym poziomie.'
        },
        {
          title: 'Wynajem długo- i krótkoterminowy',
          content: 'Dzięki nam możesz liczyć na zainteresowanie Twoim apartamentem zarówno wśród turystów, którzy do Batumi zawitali na kilka dni lub tygodni, jak i osób, które szukają w nim miejsca na dłużej.'
        }
      ]
    }
  }
}
</script>
