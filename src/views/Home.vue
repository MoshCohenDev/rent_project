<template>
  <div class="todo">
    <v-text-field
      v-model="newSectionTitle"
      class="pa-1"
      clearable
      hide-details
      label="הוסף סעיף חדש"
      outlined
      @click:append="addSection"
      @keyup.enter="addSection"
    ></v-text-field>
    <v-list
      two-line
      subheader
    >
      <div
        v-for="section in sectionsNew"
        :key="section.id"
      >
        <v-list-item
          @click="taksDone(section.id)"
          :class="{' blue-grey lighten-3 ': section.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="section.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{'text-decoration-line-through' : section.done}">
                {{ section.name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="removeSection(section.id)">
                <v-icon>fas fa-trash</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>

export default {
  name: "Home",
  props: ['stepper2'],
  data() {
    return {
      newSectionTitle:'',
      sectionsNew: [],
    }
  },
  methods: {
    addSection(){
      let newAdd={
        id:Date.now(),
        name:this.newSectionTitle,
        done:false
      }
      this.sectionsNew.push(newAdd)
      this.newSectionTitle=''
    },
    taksDone(id) {
      let section = this.sectionsNew.filter(section => section.id === id)[0]
      section.done = !section.done
    },
    removeSection(id){
      this.sectionsNew= this.sectionsNew.filter(section => section.id !== id)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>>

