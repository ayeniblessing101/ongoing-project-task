<template>
  <div id="container">
    <span v-if="errorMessage" class="errorMessage">{{ errorMessage }}</span>
    <span v-if="loadingMessage" class="loadingMessage">{{
      loadingMessage
    }}</span>
    <div v-if="projects !== {}">
      <Projects :projectsData="projects" />
    </div>
  </div>
</template>

<script>
import Projects from "@/components/Projects";
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: { Projects },

  async created() {
    await this.loadProjectsData();
  },
  methods: {
    ...mapActions(["getProjectsAction"]),
    async loadProjectsData() {
      await this.getProjectsAction();
    },
  },
  computed: {
    ...mapState(["projects", "loadingMessage", "errorMessage"]),
  },
};
</script>
<style lang="scss">
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#container {
  width: 90%;
  margin: 50px auto;

  .errorMessage {
    background-color: #f8d7d9;
    color: #731c25;
    border-radius: 5px;
    padding: 25px;
  }

  .loadingMessage {
    background-color: #cde5fe;
    color: #024084;
    border-radius: 5px;
    padding: 25px;
  }
}
</style>
