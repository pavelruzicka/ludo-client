<template>
  <div id="app">
    <div>
      <button @click="advance()">Advance</button>
    </div>

    <div class="board">
      <div class="row row--horizontal">
        <div class="row row--vertical row--end row--reversed">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(0, 5)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>
          <Field
            v-for="field in fields.slice(5, 7)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>

          <div class="row row--horizontal">
            <Field special="green" :occ="'c'"></Field>
            <Field special="green" :occ="'d'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(7, 8)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>

          <div class="row row--horizontal">
            <Field special="green" :occ="'a'"></Field>
            <Field special="green" :occ="'b'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(8, 9)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="field in fields.slice(9, 10)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>
          <Field
            v-for="(field, index) in [null, null, null, null]"
            special="red"
            :key="index + 100"
          ></Field>
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(10, 11)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>

            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="red"></Field>
            <Field special="red"></Field>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(11, 12)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>

            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="red"></Field>
            <Field special="red"></Field>
          </div>

          <Field
            v-for="field in fields.slice(12, 14)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(14, 19)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>
        </div>
      </div>

      <div class="row row--horizontal">
        <Field
          v-for="field in fields.slice(39, 40)"
          :special="field.special"
          :start="field.start"
          :key="field.index"
          :occupancy="$store.getters.occupancyStatus(field.index)"
        ></Field>
        <Field
          v-for="(field, index) in [null, null, null, null]"
          special="green"
          :key="index + 200"
        ></Field>
        <Field empty="true"/>
        <Field v-for="(field, index) in [null, null, null, null]" special="blue" :key="index + 300"></Field>
        <Field
          v-for="field in fields.slice(19, 20)"
          :special="field.special"
          :start="field.start"
          :key="field.index"
          :occupancy="$store.getters.occupancyStatus(field.index)"
        ></Field>
      </div>

      <div class="row row--horizontal">
        <div class="row row--vertical row--end">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(34, 39).reverse()"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>

          <Field
            v-for="field in fields.slice(32, 34).reverse()"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>

          <div class="row row--horizontal">
            <Field special="yellow"></Field>
            <Field special="yellow"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(31, 32)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>

          <div class="row row--horizontal">
            <Field special="yellow"></Field>
            <Field special="yellow"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(30, 31)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="(field, index) in [null, null, null, null]"
            special="yellow"
            :key="index + 400"
          ></Field>
          <Field
            v-for="field in fields.slice(29, 30)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(20, 25).reverse()"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
          </div>

          <Field
            v-for="field in fields.slice(25, 27)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          ></Field>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(27, 28)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="blue"></Field>
            <Field special="blue"></Field>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(28, 29)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            ></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="blue"></Field>
            <Field special="blue"></Field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from "./components/Field.vue";

export default {
  name: "app",

  components: { Field },

  data() {
    return {};
  },

  created() {
    this.fields = Array(40).fill({ occupied: "", special: null, start: false });

    this.fields[0] = { occupied: "", special: "green", start: true };
    this.fields[10] = { occupied: "", special: "red", start: true };
    this.fields[20] = { occupied: "", special: "blue", start: true };
    this.fields[30] = { occupied: "", special: "yellow", start: true };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));
  },

  methods: {
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    },

    advance() {
      this.$store.commit("advancePiece", { increment: this.rollDice() });
    }
  }
};
</script>

<style lang="sass">
*
  box-sizing: border-box

#app
  margin: 1rem 0
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  & button
    margin-bottom: 2rem

.row
  display: flex
  flex: 0 0 auto
  
  &--horizontal
    flex-direction: row

    &.row--reversed
      flex-direction: row-reverse

  &--vertical
    flex-direction: column

    &.row--reversed
      flex-direction: column-reverse

  &--end > *
    align-self: flex-end
</style>
