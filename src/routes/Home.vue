<template>
    <div class="tiles-container">
      <Card v-for="skill in skills" :key="skill" :title="skill" />
    </div>
</template>

<script>
import { Card } from "@/components/Home";
export default {
  name: "Home",
  components: { Card },
  data: () => {
    return {
      skills: ["react", "angular", "vue", "node", "golang"],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
