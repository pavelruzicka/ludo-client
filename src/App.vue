<template>
  <div id="app">
    <div class="board">
      <div class="row row--horizontal">
        <div class="row row--vertical row--end row--reversed">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(0, 5)"
              :special="field.special"
              :key="field.index"
            >{{ field.index }}</Field>
          </div>
          <Field
            v-for="field in fields.slice(5, 9)"
            :special="field.special"
            :key="field.index"
          >{{ field.index }}</Field>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="field in fields.slice(9, 10)"
            :special="field.special"
            :key="field.index"
          >{{ field.index }}</Field>
          <Field
            v-for="(field, index) in [null, null, null, null]"
            special="red"
            :key="index + 100"
          ></Field>
        </div>

        <div class="row row--vertical">
          <Field
            v-for="field in fields.slice(10, 14)"
            :special="field.special"
            :key="field.index"
          >{{ field.index }}</Field>
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(14, 19)"
              :special="field.special"
              :key="field.index"
            >{{ field.index }}</Field>
          </div>
        </div>
      </div>

      <div class="row row--horizontal">
        <Field
          v-for="field in fields.slice(39, 40)"
          :special="field.special"
          :key="field.index"
        >{{ field.index }}</Field>
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
          :key="field.index"
        >{{ field.index }}</Field>
      </div>

      <div class="row row--horizontal">
        <div class="row row--vertical row--end">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(34, 39).reverse()"
              :special="field.special"
              :key="field.index"
            >{{ field.index }}</Field>
          </div>
          <Field
            v-for="field in fields.slice(30, 34).reverse()"
            :special="field.special"
            :key="field.index"
          >{{ field.index }}</Field>
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
            :key="field.index"
          >{{ field.index }}</Field>
        </div>

        <div class="row row--vertical">
          <div class="row row--horizontal">
            <Field
              v-for="field in fields.slice(20, 25).reverse()"
              :special="field.special"
              :key="field.index"
            >{{ field.index }}</Field>
          </div>
          <Field
            v-for="field in fields.slice(25, 29)"
            :special="field.special"
            :key="field.index"
          >{{ field.index }}</Field>
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
    this.fields = Array(40).fill({ occupied: 0, special: null });

    this.fields[0] = { occupied: 0, special: "green" };
    this.fields[10] = { occupied: 0, special: "red" };
    this.fields[20] = { occupied: 0, special: "blue" };
    this.fields[30] = { occupied: 0, special: "yellow" };

    this.fields = this.fields.map((field, index) => ({ ...field, index }));
  }
};
</script>

<style lang="sass">
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
