<template>
  <div id="container">
    <span v-if="errorMessage" class="errorMessage">{{ errorMessage }}</span>
    <div v-else>
      <div v-if="projectsData">
        <Projects :projectsData="projectsData" />
      </div>
      <span v-else class="loadingMessage">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import { data } from "../src/services/project-service";
import Projects from "@/components/Projects";
export default {
  name: "App",
  components: { Projects },

  data() {
    return {
      projectsData: undefined,
      message: "",
      errorMessage: "",
    };
  },
  async created() {
    await this.loadProjectsData();
  },
  methods: {
    async loadProjectsData() {
      try {
        this.message = "Getting all ongoing projects, please wait...";
        this.projectsData = await data.getOngoingProjectsData();
        this.message = "";
      } catch (error) {
        this.errorMessage = error;
      }
    },
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
