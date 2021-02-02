<template>
    <div class="robotcontrol">

        <div sticky>
            <h3>Robot Connection: <v-icon slot="icon" :color="connection ? 'success' : 'error'" size="36">mdi-access-point</v-icon>{{status}}</h3>
        </div><v-banner />

        <h3>Robot Control: </h3>
        <div class="d-flex flex-wrap justify-space-around pb-4 pt-4" >
            <v-card @click="abortRobot" height="80px" min-width="150px" x-large color="error" class="pa-2 ma-2 d-flex justify-center align-center flex-column action">
                <v-icon style="font-size:2rem;">mdi-cancel</v-icon>
                Abort
            </v-card>
            <v-card :disabled="locks.robotIsLocked" v-if="!locks.robotIsPaused" @click="resumeRobot" height="80px" min-width="150px" x-large color="green lighten-3" class="pa-2 ma-2 d-flex justify-center align-center flex-column action">
                <v-icon style="font-size:2rem;">mdi-play</v-icon>
                Robot Resume
            </v-card>
            <v-card :disabled="locks.robotIsLocked" v-else @click="pauseRobot" height="80px" min-width="150px" x-large color='yellow lighten-2' class="pa-2 ma-2 d-flex justify-center align-center flex-column action">
                <v-icon style="font-size:2rem;">mdi-pause</v-icon>
                Robot Pause
            </v-card>
        </div>

    </div> 
</template>

<script>

export default {
    data: () => {
        return {
          coonection: false,       
          status: '',
          stations: [],
          timer: {},
          locks: {},
    }
    },
    sockets: {
      connect() {
        this.connection = true;
      },
      disconnect() {
        this.connection = false;
      }
    },
    mounted() {
        this.socket.subscribe('status-message', msg => {
            this.status = msg;
        });
        this.socket.subscribe('timer', timer => {
          this.timer = timer;
        });
        this.sockets.subscribe ('locks', data => {
          this.locks = data.locks;
        });

    },
    methods: {
      goToStation(station) {
        this.$socket.emit('to-station', station);
      },
      goToCharge() {
        this.$socket.emit('charge');
      },
      pauseRobot() {
        this.$socket.emit('pause-robot');
      },
      resumeRobot() {
        this.$socket.emit('resume-robot');
      },
      abortRobot() {
        this.$socket.emit('abort-robot');
      },
      unlockButtons() {
        this.isLocked = false;
      },
    
    },
}
</script>

