<template>
    <div class="user">
        <h1> Set Schedule: </h1>
        <v-spacer></v-spacer>

        <v-form>
            <v-row justify="space-around" align="center">
                <v-col cols="12" sm="6" md="4">
                    <h3>Start:</h3>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="start" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="start" label="Start Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="start" :max="end" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(start)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                    <h3>End:</h3>
                    <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="end" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="end" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="end" :min="start" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu2 = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.menu2.save(end)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>






            <h3> Time: </h3>
            <v-row>
                <v-col cols="11" sm="5">
                    <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="time" label="Picker in dialog" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on">
                            </v-text-field>
                        </template>
                        <v-time-picker v-if="modal2" v-model="time" full-width>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal2 = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(time)">
                                OK
                            </v-btn>
                        </v-time-picker>
                    </v-dialog>
                </v-col>
            </v-row>
            <v-btn @click="submit" >Submit</v-btn>
        </v-form>

        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menu: false,
                menu2: false,
                start: null,
                end: null,
            }
        },
  }
</script>
