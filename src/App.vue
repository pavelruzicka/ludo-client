<template>
  <div id="app">
    <div class="board">
      <div class="row row--horizontal">
        <div class="row row--vertical row--end row--reversed">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(0, 5)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
          </div>
          <Field
            v-for="field in fields.slice(5, 7)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
          ></Field>

          <div class="row row--horizontal">
            <Field special="green" :def="'c'"></Field>
            <Field special="green" :def="'d'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(7, 8)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
          </div>

          <div class="row row--horizontal">
            <Field special="green" :def="'a'"></Field>
            <Field special="green" :def="'b'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(8, 9)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
          </div>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="field in fields.slice(9, 10)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
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
            ></Field>

            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="red" :def="'a'"></Field>
            <Field special="red" :def="'b'"></Field>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(11, 12)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>

            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="red" :def="'c'"></Field>
            <Field special="red" :def="'d'"></Field>
          </div>

          <Field
            v-for="field in fields.slice(12, 14)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
          ></Field>
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(14, 19)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
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
            ></Field>
          </div>

          <Field
            v-for="field in fields.slice(32, 34).reverse()"
            :special="field.special"
            :start="field.start"
            :key="field.index"
          ></Field>

          <div class="row row--horizontal">
            <Field special="yellow" :def="'a'"></Field>
            <Field special="yellow" :def="'b'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(31, 32)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
          </div>

          <div class="row row--horizontal">
            <Field special="yellow" :def="'c'"></Field>
            <Field special="yellow" :def="'d'"></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field
              v-for="field in fields.slice(30, 31)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
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
          ></Field>
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(20, 25).reverse()"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
          </div>

          <Field
            v-for="field in fields.slice(25, 27)"
            :special="field.special"
            :start="field.start"
            :key="field.index"
          ></Field>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(27, 28)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="blue" :def="'a'"></Field>
            <Field special="blue" :def="'b'"></Field>
          </div>

          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(28, 29)"
              :special="field.special"
              :start="field.start"
              :key="field.index"
            ></Field>
            <Field empty="true"/>
            <Field empty="true"/>
            <Field special="blue" :def="'c'"></Field>
            <Field special="blue" :def="'d'"></Field>
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
    // fields
    this.fields = Array(40).fill({ occupied: 0, special: null, start: false });

    this.fields[0] = { occupied: 0, special: "green", start: true };
    this.fields[10] = { occupied: 0, special: "red", start: true };
    this.fields[20] = { occupied: 0, special: "blue", start: true };
    this.fields[30] = { occupied: 0, special: "yellow", start: true };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));
  }
};
</script>

<style lang="sass">
*
  box-sizing: border-box

#app
  margin: 3rem 0
  display: flex
  justify-content: center
  align-items: center

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

  &--end *
    align-self: flex-end
</style>
