<template>
  <div class="student-calendar-home">
    <div class="table-responsive">
      <table id="tablePreview" class="table w-auto">
        <!--Table head-->
        <thead>
          <tr>
            <th>Time</th>
            <th>Company</th>
          </tr>
        </thead>
        <!--Table body-->
        <tbody>
          <tr>
            <th scope="row">11:45-12:10</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">12:15-12:40</th>
            <td>Quicken 1</td>
          </tr>
          <tr>
            <th scope="row">12:45-1:10</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">1:15-1:40</th>
            <td></td>
          </tr>

          <tr class="table-success">
            <th scope="row">1:40-2:00</th>
            <td>LUNCH</td>
          </tr>

          

          <tr>
            <th scope="row">2:00-2:25</th>
            <td>Merkle</td>
          </tr>

          <tr>
            <th scope="row">2:30-2:55</th>
            <td></td>
          </tr>

          <tr>
            <th scope="row">3:00-3:25</th>
            <td></td>
          </tr>

          <tr>
            <th scope="row">3:30-3:55</th>
            <td>Hello World!</td>
          </tr>

          <tr>
            <th scope="row">4:00-4:25</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.student-calendar-home {
  background: rgba(248, 249, 250, 0.94);
  padding: 5rem;
  margin: 10rem;
}

.table {
  margin: auto;
}

.table th, td {
  padding: 1rem 2rem;
}

.table thead, th {
  text-transform: uppercase;
}
</style>