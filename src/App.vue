<template>
  <div id="app">
    <div>
      <button @click="spawn()">spawn</button>
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
            />
          </div>
          <Field
            v-for="field in fields.slice(5, 7)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />

          <div class="row row--horizontal">
            <Field special="green" :occupancy="$store.getters.occupancyStatus(602)"/>
            <Field special="green" :occupancy="$store.getters.occupancyStatus(603)"/>
            <Field empty/>
            <Field empty/>
            <Field
              v-for="field in fields.slice(7, 8)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
          </div>

          <div class="row row--horizontal">
            <Field special="green" :occupancy="$store.getters.occupancyStatus(600)"/>
            <Field special="green" :occupancy="$store.getters.occupancyStatus(601)"/>
            <Field empty/>
            <Field empty/>
            <Field
              v-for="field in fields.slice(8, 9)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
          </div>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="field in fields.slice(9, 10)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />
          <Field
            v-for="(field, index) in [null, null, null, null]"
            special="red"
            :key="3 - index + 100"
            :occupancy="$store.getters.occupancyStatus(3 - index + 100)"
          />
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(10, 11)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />

            <Field empty/>
            <Field empty/>
            <Field special="red" :occupancy="$store.getters.occupancyStatus(500)"/>
            <Field special="red" :occupancy="$store.getters.occupancyStatus(501)"/>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(11, 12)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />

            <Field empty/>
            <Field empty/>
            <Field special="red" :occupancy="$store.getters.occupancyStatus(502)"/>
            <Field special="red" :occupancy="$store.getters.occupancyStatus(503)"/>
          </div>

          <Field
            v-for="field in fields.slice(12, 14)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(14, 19)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
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
        />
        <Field
          v-for="(field, index) in [null, null, null, null]"
          special="green"
          :key="3 - index + 200"
          :occupancy="$store.getters.occupancyStatus(3 - index + 200)"
        />
        <Field empty/>
        <Field
          v-for="(field, index) in [null, null, null, null]"
          special="blue"
          :key="index + 300"
          :occupancy="$store.getters.occupancyStatus(index + 300)"
        />
        <Field
          v-for="field in fields.slice(19, 20)"
          :special="field.special"
          :start="field.start"
          :key="field.index"
          :occupancy="$store.getters.occupancyStatus(field.index)"
        />
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
            />
          </div>

          <Field
            v-for="field in fields.slice(32, 34).reverse()"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />

          <div class="row row--horizontal">
            <Field special="yellow" :occupancy="$store.getters.occupancyStatus(800)"/>
            <Field special="yellow" :occupancy="$store.getters.occupancyStatus(801)"/>
            <Field empty/>
            <Field empty/>
            <Field
              v-for="field in fields.slice(31, 32)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
          </div>

          <div class="row row--horizontal">
            <Field special="yellow" :occupancy="$store.getters.occupancyStatus(802)"/>
            <Field special="yellow" :occupancy="$store.getters.occupancyStatus(803)"/>
            <Field empty/>
            <Field empty/>
            <Field
              v-for="field in fields.slice(30, 31)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
          </div>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="(field, index) in [null, null, null, null]"
            special="yellow"
            :key="index + 400"
            :occupancy="$store.getters.occupancyStatus(index + 400)"
          />
          <Field
            v-for="field in fields.slice(29, 30)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(20, 25).reverse()"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
          </div>

          <Field
            v-for="field in fields.slice(25, 27)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
            :occupancy="$store.getters.occupancyStatus(field.index)"
          />

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(27, 28)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
            <Field empty/>
            <Field empty/>
            <Field special="blue" :occupancy="$store.getters.occupancyStatus(700)"/>
            <Field special="blue" :occupancy="$store.getters.occupancyStatus(701)"/>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(28, 29)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
              :occupancy="$store.getters.occupancyStatus(field.index)"
            />
            <Field empty/>
            <Field empty/>
            <Field special="blue" :occupancy="$store.getters.occupancyStatus(702)"/>
            <Field special="blue" :occupancy="$store.getters.occupancyStatus(703)"/>
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

    spawn() {
      this.$store.commit("spawnSet", { color: "red" });
    },

    deploy() {
      this.$store.commit("deployPiece", { color: "red", piece: "a" });
    },

    advance() {
      this.$store.commit("advancePiece", {
        increment: this.rollDice(),
        color: "red",
        piece: "a"
      });
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
