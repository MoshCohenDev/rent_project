<template>
  <div class="home">
    <v-row align="center">
      <v-col cols="12">
        <v-select
          v-model="contract"
          :items="group"
          :menu-props="{ top: true, offsetY: true }"
          label="סוגי חוזים"
          @change="choseContracts"
        >
        </v-select>
        <div class="row ">
          <v-text-field
            v-model="newSection"
            class="pa-3"
            style="width: 70%"
            clearable
            hide-details
            label="הוסף סעיף חדש"
            outlined
            @click:append="addSection"
            @keyup.enter="addSection"
          ></v-text-field>

        </div>
        <v-treeview

          :items="sections"
          selectable
        >

          <template v-slot:prepend="{item}">
            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'fas fa-arrow-up' : 'fas fa-arrow-down' }}</v-icon>
            </v-btn>
            <v-btn
              @click="dialog = !dialog"
              style="margin: auto" x-small fab dark color="indigo">
              <v-icon dark>fas fa-plus</v-icon>
            </v-btn>
            <v-btn icon @click.stop="removeSection(item)">
              <v-icon color="blue">fas fa-trash</v-icon>
            </v-btn>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <v-card>
                <v-card-text>
                  <v-text-field v-model="newSection" label="הוסף סעיף חדש"/>
                  <small class="grey--text">* This doesn't actually save.</small>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="dialog = false;
                    addSectionByItem(item.id)"
                  >
                    הוספה
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </template>
        </v-treeview>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'selectContract',
  data: () => ({
    group: ['חוזה עירוני', 'חוזה סטנדרטי', 'חוזה מומלץ'],
    items: [
      {
        name: 'municipalContract',
        label: 'חוזה עירוני'
      },
      {
        name: 'standardContract',
        label: 'חוזה סטנדרטי'
      },
      {
        name: 'recommendedContract',
        label: 'חוזה מומלץ'
      },
    ],
    contract: '',
    newSection: '',
    dialog: false,
    show:false

  }),
  computed: mapState('contracts', ['sections'],),


  methods: {
    ...mapActions('contracts', ['getContractsById', 'insertContract', 'insertContractById']),
    ...mapMutations('contracts', ['setContract', 'seTransContract','deleteContract']),

    choseContracts() {
      let transContract = null;
      for (const item of this.items) {
        if (this.contract === item.label) {
          transContract = item.name;
        }
      }
//add and set section
      this.seTransContract(transContract);
      this.getContractsById(transContract)
        .then(() => {

        });
    },
    addSection() {
      if (this.newSection === '') {
        alert('עליך להוסיף מטלה');
        return;

      }
      let addNewSection = {
        id: Date.now(),
        name: this.newSection,
        done: false
      };
      this.newSection = '';
      this.insertContract(addNewSection);

    },
    addSectionByItem(itemId) {
      debugger
      if (this.newSection === '') {
        alert('עליך להוסיף מטלה');
        return;
      }
      let addNewSectionItem = {
        id: Date.now(),
        name: this.newSection,
        done: false
      };
      this.newSection = '';
      debugger
      console.log(itemId);
      // let obj={addNewSectionItem,itemId}
      debugger
      this.insertContractById(addNewSectionItem);

    },
    doneClick(id) {
      const section = this.sections.filter(section => section.id === id);
      section.done = !section.done;

    },
    removeSection(id) {
      debugger
      this.deleteContract(id)
      // this.sections.splice(id, 1);
      // this.sections = this.sections.filter(section => section.id !== id);

    }
  }
};
</script>

<style scoped>
.home {
  text-align: left;
}
</style>
