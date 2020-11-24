<template>
  <div class="table-container">
    <table>
      <tr>
        <th>Project Name</th>
        <th>Developer</th>
        <th>Main Contractor</th>
        <th>Area</th>
        <th>State</th>
        <th>Status <i class="arrow down"></i></th>
        <th>Sector</th>
      </tr>
      <tr v-for="project in projectsData.data" :key="project.id">
        <td>{{ project.project_name }}</td>
        <td>{{ project.developer }}</td>
        <td>{{ project.main_contractor }}</td>
        <td>{{ project.lga }}</td>
        <td>{{ project.state }}</td>
        <td>
          <div class="status">{{ project.status }}</div>
        </td>
        <td>{{ project.sector }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Projects",
  props: {
    projectsData: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../design/_styles";
</style>
