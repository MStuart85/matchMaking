<template>
  <div class="admin-home shadow rounded">
    <div class="mt-4 mt-md-1 text-center">
      <div>
        <router-link to="/adminstudentpreferences" tag="button" class="te-btn">View Student Preferences</router-link>
      </div>
      <div class="mt-4 mt-md-1 text-center">
        <router-link to="/admincalendar" tag="button" class="te-btn">View/Edit Schedule</router-link>
      </div>
      <div class="mt-4 mt-md-1 text-center">
        <router-link to="/adminviewallprofiles" tag="button" class="te-btn">View All Profiles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHome"
};
</script>

<style scoped>
.admin-home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(248, 249, 250, 0.94);
  padding: 5rem;
  max-width: 700px;
}
</style>